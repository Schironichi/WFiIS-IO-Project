import React from 'react';
import { ButtonDodaj } from '../Button_dodaj';
import './Adverts.css';
import { Icon } from './Icon';
import { Notice_details } from './Notice_details';
import { Navbar } from '../Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Alert from "react-bootstrap/Alert";
import { Button } from '../Button';
import { useHistory } from "react-router-dom";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';


import { withRouter } from "react-router-dom";









/*

export const NR = ({
    id
  })=>{

    useEffect (()=>
    async () => {
        const result = await fetch('http://localhost:5000/changeToReservation/${id}',({params: id}).json());
        }); 


      return (
          <>
          <h1>a{item}a</h1>
          </>

      );
  };


  export const ReservationDetail=()=>{

    const params = useParams();
return <div>id stuff...</div>
  }


  export const Register=()=>{
  
  const location = useLocation()
  
  //store the state in a variable if you want 
  //location.state then the property or object you want
  
  const Name = location.state.name
  
  return(
    <div>
      hello my name is {Name}
    </div>
  )
  
  }

  */

  
class Canceling extends React.Component {
   
    constructor(props) {
        super(props); 
        this.state = {
          id: 0
        };
      }
    
      async componentDidMount() {
        //taking database data from server
    let dbRes = (await fetch(`http://localhost:5000/cancelReservation/${this.state.id}`,{params: this.state})).json().then(
        response => {
            for (let i = 0; i < response.length; i+=1){
            console.log(response)
          }
          
        }
      )
      } 
    render() {
 
        const { id } = this.props.match.params;
        this.state.id=id;

        return (
          <>
        <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '40px'}}>Pomyslnie odrzucono zgłoszenie</h1>
    

        </>
    );
  
    
}


}

export default Canceling;