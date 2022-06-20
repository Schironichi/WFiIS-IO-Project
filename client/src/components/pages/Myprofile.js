import React, { useContext } from 'react';
import '../../App.css';
import { ButtonDodaj } from '../Button_dodaj';
import Footer from '../Footer';
import '../Navbar.css';
import './Myprofile.css';
import Dialog from '../Dialog';
import { Advert } from './Advert';
import { Message } from './Message';
import { Paging } from './Paging'
import { LoginContext } from '../../LoginContext';
import { Redirect, useHistory } from 'react-router-dom'

class Myprofile extends React.Component {
  static contextType = LoginContext;

  render() {
    // const [uid, setUid] = useContext(LoginContext);
    if (this.context.uid === -1 || this.context.uid === 'undefined') {
      <Redirect to="/login" />
    }

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText)
      }
    };
    xhttp.open("GET", "api/userid", true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send();
 


    return (
      <>
        <div className='clear_div'> </div>

        <div class='down' style={{ marginBottom: '100px' }}>
          <Paging array={[{ nr: 0, title: "Ogłoszenia", component: <Announcements /> }, { nr: 1, title: "Powiadomienia", component: <Messages /> }, { nr: 2, title: "Moje dane", component: <YourData /> }]} />
        </div>
        <Footer />
      </>
    );
  }
}


class InputInProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = { readonly: true, checked: false };
  }

  checkBoxChange() {
    if (!this.state.checked)
      this.setState({ readonly: false, checked: true })
    else
      this.setState({ readonly: true, checked: false })
  }


  render() {
    return (
      <>
        <div className='main_profileInput_div'>

          <div className='label_profileInput_div'>
            <label> {this.props.label}: </label>
          </div>

          <div className='input_profileInput_div'>
            <input
              type={this.props.type}
              value={this.props.value}
              readOnly={this.state.readonly}
              onChange={evt => this.props.onChange(evt)}
            />
            <label> <input type='checkbox' onChange={() => this.checkBoxChange(this)} /> Edytuj </label>
          </div>

          <div className='clear_div'></div>
        </div>
      </>
    );
  }
}

class YourData extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: { value: 'None' },
      login: { value: "Login" },
      firstName: { value: "Imie" },
      lastName: { value: "Nazwisko"},
      email: { value: "Email" },
      password: { value: "" },
    };
  }

  async componentDidMount() {
    //taking user data from server
    let data = await (await fetch("http://localhost:5000/api/getUserData")).json();

    console.log( `data: ${ JSON.stringify(data) }` );
    if ( data.logged === false ) {
      window.location.replace("http://localhost:3000/login");
    }
    else {
      this.setState( { firstName: { value: data.firstName} } );
      this.setState( { lastName: { value: data.lastName} } );
      this.setState( { email: { value: data.email} })
      this.setState( { login: { value: data.login} })
      this.setState( { id: {value: data.id} } );
      this.setState( { dialogOpen: false } );
    }
  }

  closeDialog() {
    this.setState( {dialogOpen: false} );
  }

  async confirm() {
    let res = await fetch("http://localhost:5000/api/userPasswordChange", {
      method: "POST",
      headers:{ "Accept": "application/json", 'Content-Type': 'application/json' },
      body: JSON.stringify( { 
        id: this.state.id.value,
        login: this.state.login,
        password: this.state.password.value
      } )
    });

    res = await res.json();
    console.log( JSON.stringify( res ) );
    this.closeDialog();
    window.location.reload();
  }

  decline() {
    this.closeDialog();
  }

  changeInput(evt, property) {
    property.value = evt.target.value;
    this.setState(property);
  }

  async saveAllClick() {
        //all changes saved in state send to server
        let changes = { id: this.state.id.value };
        let data = await ( (await fetch("http://localhost:5000/api/getUserData")).json() );
        
        console.log( `data: ${data}` );
        if( data.login !== this.state.login.value ) {
          console.log(` login changed: ${data.login} != ${this.state.login.value}` )
          changes = Object.assign( changes, {login: this.state.login.value } );
        }
        if( data.firstName !== this.state.firstName.value ) {
          console.log(` fname changed: ${data.firstName} != ${this.state.firstName.value}` )
          changes = Object.assign( changes, {name : this.state.firstName.value} );
        }
        if( data.lastName !== this.state.lastName.value ) {
          console.log(` lname changed: ${data.lastName} != ${this.state.lastName.value}` )
          changes = Object.assign( changes, {surname: this.state.lastName.value} );
        }
        if( data.email !== this.state.email.value ) {
          console.log(` email changed: ${data.email} != ${this.state.email.value}` )
          changes = Object.assign( changes, {email: this.state.email.value} );
        }
    
        if( this.state.password.value !== "" ) {
          console.log(` pass changed: "" != ${this.state.password.value}` )
          this.setState( {dialogOpen: true} );
        }
    
        console.log(`changes: ${JSON.stringify(changes)}`);
    
        let resp = await fetch("http://localhost:5000/api/changeUserData", {
          method: 'POST',
          headers:{ "Accept": "application/json", 'Content-Type': 'application/json' },
          body: JSON.stringify(changes)
        });
        resp = await resp.json();
        console.log(` res: ${ JSON.stringify( resp ) }`);
        if( resp.message === 'great succes' )
          console.log("succes");
          if( this.state.password.value == "" )
            window.location.reload();
        else 
          console.log("fail");    
  }
  render() {
    return (
      <div class='daneMyProfile'>

        <Dialog 
          open={ this.state.dialogOpen } 
          onClose={ () => this.closeDialog() }
          handleConfirm={ () => this.confirm() }
          handleDecline={ () => this.decline() }
        >
          Czy na pewno zmienić hasło?
        </ Dialog>

        <div id='user_personal_data_div'>
        <InputInProfile
          type='text'
          label='Login'
          value={this.state.login.value}
          onChange={ (evt) => this.changeInput(evt, this.state.login) }
        />

        <InputInProfile 
          type='text'
          label='Imie' 
          value={this.state.firstName.value} 
          onChange={ (evt) => this.changeInput(evt, this.state.firstName) } 
        />

        <InputInProfile 
          type='text'
          label='Nazwisko' 
          value={this.state.lastName.value} 
          onChange={ (evt) => this.changeInput(evt, this.state.lastName) } 
        />

        <InputInProfile 
          type='email'
          label='Email' 
          value={this.state.email.value} 
          onChange={ (evt) => this.changeInput(evt, this.state.email) } 
        />

        <InputInProfile 
          type='password'
          label='Hasło' 
          value={this.state.password.value} 
          onChange={ (evt) => this.changeInput(evt, this.state.password) } 
        />
          <button type='button' onClick={() => this.saveAllClick(this)} style={{
            float: "right",
            marginTop: "-60px"
          }} >
            Zapisz zmiany
          </button>
        </div>

      </div>
    );
  }
}


class Announcements extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      visableData: [],
      type: "",
      priority: "",
      creation_date: "",
      expiration_date: "",
      reports_number: "",
      city: "",
      status: "",
      category: ""
    };

  }



  // async componentDidMount() {
  //   let dbRes = (await fetch("http://localhost:5000/bazaOgloszenUsera")).json().then(
  //     response => {
  //       for (let i = 0; i < response.length; i+=1){
  //         this.setState( {id_user: response[0].id_user} );
  //         this.setState( {id_notice: response[0].id_notice} );
  //         this.setState( {type: response[0].type} );
  //         this.setState( {priority: response[0].priority} );
  //         this.setState( {creation_date: response[0].creation_date} );
  //         this.setState( {expiration_date: response[0].expiration_date} );
  //         this.setState( {reports_number: response[0].reports_number} );
  //         this.setState( {city: response[0].city} );
  //         this.setState( {status_description: response[0].status_description} );
  //         this.setState( {category: response[0].id_category} );
  //       }
  //       this.setState({data:response});
  //     }
  //   )
  // } 

  createNotices() {
    this.announcements = this.state.keys.map( (num) =>
    <li key={ num.toString() } className='notices_li'>
      <fieldset className='notices_filedset'>
        
        <div className='notices_value_div'>
          <div> <h1> Ogłoszenie {num + 1} </h1> </div>
          <div>
            <p> { this.state.values[num] } </p>
          </div>
        </div>

        <div className='notices_buttons_div'>
          <button type='button'> Edytuj </button>
          <button type='button'> Usuń </button>
        </div>

        <div className='clear_div' ></div>
      </fieldset>
    </li>
    );
  }

  async componentDidMount() {
    let dbRes = (await fetch("http://localhost:5000/bazaOgloszenUsera")).json().then(
      response => {
        for (let i = 0; i < response.length; i += 1) {
          this.setState({ id_user: response[0].id_user });
          this.setState({ id_notice: response[0].id_notice });
          this.setState({ type: response[0].type });
          this.setState({ priority: response[0].priority });
          this.setState({ creation_date: response[0].creation_date });
          this.setState({ expiration_date: response[0].expiration_date });
          this.setState({ reports_number: response[0].reports_number });
          this.setState({ city: response[0].city });
          this.setState({ status_description: response[0].status_description });
          this.setState({ category: response[0].id_category });
        }
        this.setState({ data: response });
      }
    )
  }

  render() {
    const { data } = this.state;
    return (
      <>
        <div class="content">
          <div class='upper'>
            <ButtonDodaj rest={"dodaj"}>Dodaj ogłoszenie</ButtonDodaj>

          </div>
          {data.map(adv => (
            <Advert key={adv.id_notice} data={adv} buttons={["Edytuj", "Usuń"]} res={["editing", "editAdvert", "deleting", "deleteAdvert"]} />
          ))}
        </div>
      </>
    );
  }
}


class Messages extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      visableData: [],
      type: "",
      priority: "",
      creation_date: "",
      expiration_date: "",
      reports_number: "",
      city: "",
      status: "",
      category: ""
    };
    this.messages = null;

  }


  async componentDidMount() {
    let dbRes = (await fetch("http://localhost:5000/ogloszeniaReserved")).json().then(
      response => {
        for (let i = 0; i < response.length; i += 1) {
          this.setState({ id_user: response[0].id_user });
          this.setState({ id_notice: response[0].id_notice });
          this.setState({ type: response[0].type });
          this.setState({ priority: response[0].priority });
          this.setState({ creation_date: response[0].creation_date });
          this.setState({ expiration_date: response[0].expiration_date });
          this.setState({ reports_number: response[0].reports_number });
          this.setState({ city: response[0].city });
          this.setState({ status_description: response[0].status_description });
          this.setState({ category: response[0].id_category });
        }
        this.setState({ data: response });
      }
    )
  }

  // componentDidMount() {
  //   //send request for messages data
  //   let numbers = [0, 1, 2];
  //   let data = ["Lorem   Ipsum1", "Lorem Ipsum2", "Lorem Ipsum3"];

  //   this.setState({ keys: numbers, values: data });
  // }

  render() {
    const { data } = this.state;
    console.log(data)
    return (
      <>
        <div>
          <ul className='notices_ul'>
          {data.map(adv => (
            <Message key={adv.id_notice} data={adv} buttons={["Anuluj", "Akceptuj"]} res={["canceling", "can", "completing", "acc"]} />
          ))}
          </ul>
        </div>
      </>
    );
  }
}


export default Myprofile;