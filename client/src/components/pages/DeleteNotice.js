import React, { useContext } from 'react';
import '../../App.css';
import { Button } from '../Button';
import Footer from '../Footer';
import '../Navbar.css';
import './Login.css';
import { Redirect, useHistory } from 'react-router-dom'
import { LoginContext } from '../../LoginContext';

class DeleteNotice extends React.Component{
    static contextType = LoginContext;

    constructor(props) {
        super(props);

        this.state = {
          id: 0,
          };
      }

     async componentDidMount() {
     let dbRes = (await fetch(`http://localhost:5000/usunOgloszenie/${this.state.id}`)).json()} 

  
     changeInput( evt, property ) {
        property.value = evt.target.value;
        this.setState( property );
      }
    
      saveAllClick() {
        //all changes saved in state send to server
      }


  render(){

    const { id } = this.props.match.params;
    this.state.id=id;

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
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
        <h2>
            Ogłoszenie poprawnie usunięte.
        </h2>
    </div>
    
    <Footer/>
    </>
    );
  }	

  } 
    
    
  


export default DeleteNotice;