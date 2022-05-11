import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../Navbar.css';
import './Home.css';
import './Organizations.css';
import {Organizations_tmp} from './Organizations_tmp'
import Alert from "react-bootstrap/Alert";

class Organizations extends React.Component{

  constructor(props) {
    super(props);
    this.state = {

      data: [],
      visableData:[],
      type: "",
      organization_name: "",
      account: "",
      address: "",

    };
    this.Pomocnicza = this.Pomocnicza.bind(this)

  }

  Pomocnicza = () => {
    this.setState({visableData:this.state.data});
  }

 
  async componentDidMount() {
  
    //taking database data from server
    let dbRes = (await fetch("http://localhost:5000/organizacje")).json().then(
      response => {

        for (let i = 0; i < response.length; i+=1){
          this.setState( {id: response[0].id_organization} );
          this.setState( {organization_name: response[0].organization_name} );
          this.setState( {account: response[0].account} );
          this.setState( {address: response[0].address} );


        }
        
        this.setState({data:response});
        this.Pomocnicza();
      }
    )
  } 
  
  render() {
  
    return (
      <>
       
      
        <div class="content">
          <h2>Organizacje charytatywne</h2>
          <table class="content-table">
  <thead>
    <tr>
      <th>Nazwa</th>
      <th>Konto</th>
      <th>Adres</th>
     
    </tr>
  </thead>
  <tbody>
          {this.state.visableData.map(adv => (
            <Organizations_tmp key={adv.id_organization} data={adv}/>
          ))}

</tbody>
</table>
          </div>
        
      </>
    );
  
    
  }


}






export default Organizations;