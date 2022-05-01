import React from 'react';
import '../../App.css';
import { ButtonDodaj } from '../Button_dodaj';
import Footer from '../Footer';
import '../Navbar.css';
import './Myprofile.css';

class Myprofile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: "Login",
      firstName: "Imie",
      lastName: "Nazwisko",
      email: "Email",
      password: "Hasło",
      serverFirstName: "",
      serverLastName: ""
    };
  }

  async componentDidMount() {
    //taking user data from server
    let data = (await fetch("http://localhost:5000/api/getUserData")).json();
    this.setState( {serverFirstName: (await data).firstName} );
    this.setState( {serverLastName: (await data).lastName} );
    this.setState( { firstName: (await data).firstName } );
    this.setState( { lastName: (await data).lastName } );
  }

  changeInput( evt, property ) {
    property.value = evt.target.value;
    this.setState( property );
  }

  saveAllClick() {
    //all changes saved in state send to server
  }
  
  render() {
    return (
      <>
        <div class='up'>
          <div class='dane'>
            <h2>
                Twoje Dane
                <button type='button' onClick={ () => this.saveAllClick(this) } style={ {marginLeft: '300px'} } >
                  Zapisz zmiany
                </button>
            </h2>

            <div id='user_personal_data_div'>
              <InputInProfile
                type='text'
                label='Login'
                value={this.state.userName}
                onChange={ (evt) => this.changeInput(evt, this.state.userName) }
              />

              <InputInProfile 
                type='text'
                label='Imie' 
                value={this.state.firstName} 
                onChange={ (evt) => this.changeInput(evt, this.state.firstName) } 
              />

              <InputInProfile 
                type='text'
                label='Nazwisko' 
                value={this.state.lastName} 
                onChange={ (evt) => this.changeInput(evt, this.state.lastName) } 
              />

              <InputInProfile 
                type='email'
                label='Email' 
                value={this.state.email} 
                onChange={ (evt) => this.changeInput(evt, this.state.email) } 
              />

              <InputInProfile 
                type='password'
                label='Hasło' 
                value={this.state.password} 
                onChange={ (evt) => this.changeInput(evt, this.state.password) } 
              />
            </div>

          </div>
            
          <div class='dodaj'>
            <ButtonDodaj rest={"/dodaj"}>Dodaj ogłoszenie</ButtonDodaj>
          </div>

        </div>

        <div className='clear_div'> </div>
        
        <div class='down' style={ {marginBottom: '100px'} }>
          <Announcements />
          <Messages />
        </div>
        <Footer/>
      </>
    );
  }
}


class InputInProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {readonly: true, checked: false};
  }

  checkBoxChange() {
    if( ! this.state.checked )
      this.setState( {readonly: false, checked: true} )
    else
      this.setState( {readonly: true, checked: false })
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
              type = {this.props.type} 
              value = {this.props.value}
              readOnly = {this.state.readonly} 
              onChange = { evt => this.props.onChange(evt) }
            /> 
            <label> <input type='checkbox' onChange={ () => this.checkBoxChange(this) }/> Edytuj </label>
          </div>

          <div className='clear_div'></div>
        </div>
      </>
    );
  }
}


class Announcements extends React.Component {

  constructor(props) {
    super(props);

    this.state = { keys: [0], values: ["Puste Pole"] };
    this.announcements = null;
  }

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

  componentDidMount() {
    //send request for notices data
    let numbers = [0, 1, 2];
    let data = [ "Lorem Ipsum1", "Lorem Ipsum2", "Lorem Ipsum3" ];
    
    this.setState( { keys: numbers, values: data}, () => this.createNotices(this) );
  }

  render() {
    return (
      <>
        <h2> Twoje ogłoszenia </h2>
        <ul className='notices_ul'>
          {this.announcements}
        </ul>
      </>
    );
  }
}


class Messages extends React.Component {
  constructor(props) {
    super(props);

    this.state = { keys: [0], values: ["Puste Pole"] };
    this.messages = null;
  }

  createNotices() {
    this.messages = this.state.keys.map( (num) =>
    <li key={ num.toString() } className='notices_li' >
      <fieldset className='notices_filedset'>
        
        <div className='notices_value_div'>
          <div> <h1> powiadomienie {num + 1} </h1> </div>
          <div>
            <p> { this.state.values[num] } </p>
          </div>
        </div>

        <div  className='notices_buttons_div'>
          <button type='button'> Potwierdź </button>
          <button type='button'> Anuluj </button>
        </div>

        <div className='clear_div'></div>
      </fieldset>
    </li>
    );
  }

  componentDidMount() {
    //send request for messages data
    let numbers = [0, 1, 2];
    let data = [ "Lorem Ipsum1", "Lorem Ipsum2", "Lorem Ipsum3" ];
    
    this.setState( { keys: numbers, values: data}, () => this.createNotices(this) );
  }

  render() {
    return (
      <>
        <h2> Twoje powiadomienia </h2>
        <ul className='notices_ul'>
          {this.messages}
        </ul>
      </>
    );
  }
}


export default Myprofile;