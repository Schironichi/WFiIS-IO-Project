import PropTypes from 'prop-types'
import React from 'react';
import { useParams } from 'react-router-dom';
import '../../App.css';
import Footer from '../Footer';
import '../Navbar.css';
import './Home.css';
import {Advert} from './Advert'
import {Details} from './Details'
import { useLocation } from "react-router-dom"




export class Notice_details extends React.Component {

    

    constructor(props) {
        super(props);

        this.state = {
          id: 0,
          tab: [],
          type: "",
          priority: "",
          creation_date: "",
          expiration_date: "",
          reports_number: "",
          city: "",
          status:"",
          category:"",
          opis: "",
          title: ""
        };
      }


    async componentDidMount() {
        //taking database data from server
        let dbRes = (await fetch(`http://localhost:5000/details/${this.state.id}`,{params: this.state})).json().then(
          response => {
    
            for (let i = 0; i < response.length; i+=1){
              this.setState( {type: response[0].type} );
              this.setState( {category: response[0].id_category} );
              this.setState( {title: response[0].notice_title} );
              this.setState( {creation_date: response[0].creation_date} );
              this.setState( {expiration_date: response[0].expiration_date} );
              this.setState( {reports_number: response[0].reports_number} );
              this.setState( {city: response[0].city} );
              this.setState( {status: response[0].status_description} );
              this.setState( {opis: response[0].notice_description} );
            }
            
          }
        )
      }

  render() {

    const { id } = this.props.match.params;
    this.state.id=id;

    return (
        <>

        <Details data={this.state}/>
               
        </>
    )
  }
}



export default Notice_details