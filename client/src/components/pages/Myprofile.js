import React from 'react';
import '../../App.css';
import { ButtonDodaj } from '../Button_dodaj';
import Footer from '../Footer';
import '../Navbar.css';

class Myprofile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: { value: "Login", readonly: true },
      firstName: { value: "Imie", readonly: true },
      lastName: { value: "Nazwisko", readonly: true },
      email: { value: "Email", readonly: true },
      password: { value: "Hasło", readonly: true },
      serverFirstName: "",
      serverLastName: ""
    };
  }

  async componentDidMount() {
    //taking user data from server
    let data = (await fetch("http://localhost:5000/api/getUserData")).json();
    this.setState( {serverFirstName: (await data).firstName} );
    this.setState( {serverLastName: (await data).lastName} );
    this.setState( { firstName: {value: (await data).firstName, readonly: true}} );
    this.setState( { lastName: {value: (await data).lastName, readonly: true}} );
  }

  editInputClick( property ) {
    property.readonly = false
    this.setState( property );
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
            <h2> Profil użytkownika {this.state.serverFirstName} {this.state.serverLastName} </h2>

            <InputInProfile
              type='text'
              label='Login'
              objectAttr={this.state.userName}
              onChange={ (evt) => this.changeInput(evt, this.state.userName) }
              onClick={ () => this.editInputClick(this.state.userName) }
            />

            <InputInProfile 
              type='text'
              label='Imie' 
              objectAttr={this.state.firstName} 
              onChange={ (evt) => this.changeInput(evt, this.state.firstName) } 
              onClick={ () => this.editInputClick(this.state.firstName) }
            />

            <InputInProfile 
              type='text'
              label='Nazwisko' 
              objectAttr={this.state.lastName} 
              onChange={ (evt) => this.changeInput(evt, this.state.lastName) } 
              onClick={ () => this.editInputClick(this.state.lastName) }
            />

            <InputInProfile 
              type='email'
              label='Email' 
              objectAttr={this.state.email} 
              onChange={ (evt) => this.changeInput(evt, this.state.email) } 
              onClick={ () => this.editInputClick(this.state.email) }
            />

            <InputInProfile 
              type='password'
              label='Hasło' 
              objectAttr={this.state.password} 
              onChange={ (evt) => this.changeInput(evt, this.state.password) } 
              onClick={ () => this.editInputClick(this.state.password) }
            />

            <p>
              <button type='button' onClick={ () => this.saveAllClick(this) } > Save </button>
            </p>
          </div>
            
          <div class='dodaj'>
            <ButtonDodaj>Dodaj ogłoszenie</ButtonDodaj>
          </div>

        </div>
        <div class='down'>
        </div>
        <Footer/>
      </>
    );
  }
}


class InputInProfile extends React.Component {
  render() {
    return (
      <>
        <div className='main_profileInput_div' style={{background: '#b59847'}}>

          <div className='label_profileInput_div' style={{float: 'left', background: '#b54763', width: '200px'}}>
            <label> {this.props.label}: </label>
          </div>

          <div className='input_profileInput_div' style={{float: 'left', background: '#61b547'}}>
            <input 
              type = {this.props.type} 
              value = {this.props.objectAttr.value}
              readOnly = {this.props.objectAttr.readonly} 
              onChange = { evt => this.props.onChange(evt) }
            /> 
            <button type='button' onClick={this.props.onClick}> Edit </button>
          </div>

          <div className='clear_div' style={{clear: 'both'}}></div>
        </div>
      </>
    );
  }
}

export default Myprofile;