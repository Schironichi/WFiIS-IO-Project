import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../Navbar.css';
import './Home.css';
import {Advert} from './Advert'

class Home extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      tab: [],
      type: "",
      priority: "",
      creation_date: "",
      expiration_date: "",
      reports_number: "",
      city: "",
      status:""
    };
  }

  async componentDidMount() {
    //taking database data from server
    let dbRes = (await fetch("http://localhost:5000/baza")).json().then(
      response => {

        for (let i = 0; i < response.length; i+=1){
          this.setState( {type: response[0].type} );
          this.setState( {priority: response[0].priority} );
          this.setState( {creation_date: response[0].creation_date} );
          this.setState( {expiration_date: response[0].expiration_date} );
          this.setState( {reports_number: response[0].reports_number} );
          this.setState( {city: response[0].city} );
          this.setState( {tab: response[0].city} );
          this.setState( {status: response[0].status_description} );
          console.log(response)
        }
        
      }
    )
  } 
  
  render() {
  
    return (
      <>
        <div class="header">
          <form class="contact-form" action="#" >
            <div class="contact-form-ico">  <i class="fas fa-search"></i></div>
            <input class="contact-form-text" type="text" name="baza" placeholder="Szukaj..." />
            <input class="contact-form-btn" type="submit" value="Szukaj" />
          </form>
        </div>
        <div class='header2'>
          <h2>Filtry</h2>
          <div id="typ-osoby-filtr">
            <b>Typ osoby:</b>
            <input type="checkbox" id="poszukuje" name="poszukuje"
            />
            <label for="poszukuje">Poszukuje</label>
            <input type="checkbox" id="oddaje" name="oddaje" />
            <label for="radio">Oddaje</label>
          </div>
          <div id="kategoria-filtr">
            <b>Kategoria:</b>
            <select name="kat" id="kat-select">
              <option value="">--Wszystko--</option>
              <option value="Mieszkanie">Mieszkanie</option>
              <option value="Zywnosc">Żywność</option>
              <option value="Ubrania">Ubrania</option>
              <option value="Zabawki">Zabawki dla dzieci</option>
              <option value="Korepetycje">Korepetycje</option>
              <option value="Medykamenty">Medykamenty</option>
            </select>
          </div>
        </div>
        <div class="content">
          <h2>Ogłoszenia</h2>
          <Advert data={this.state}/>
          </div>
        <Footer />
      </>
    );
  
    
  }


}





export default Home;