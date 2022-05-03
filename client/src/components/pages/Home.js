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
      data: [],
      visableData:[],
      type: "",
      priority: "",
      creation_date: "",
      expiration_date: "",
      reports_number: "",
      city: "",
      status:"",
      category:""
    };
    this.filterAdverts = this.filterAdverts.bind(this)
    this.filterCat = this.filterCat.bind(this)
    this.getFilteredAdverts = this.getFilteredAdverts.bind(this)
  }

  filterAdverts = () => {
    let search = [];
    let give = [];
    if(document.getElementById("poszukuje").checked)
    {
      search = this.state.data.filter(function( obj ) {
        return obj.type === "szukam";
      });
    }
    if(document.getElementById("oddaje").checked)
    {
      give = this.state.data.filter(function( obj ) {
        return obj.type === "oglaszam";
      });
    }
    let arr=search.concat(give);
    var num=document.getElementById("kat-select").selectedIndex;
    if(num>0)
    {
      arr = arr.filter(function( obj ) {
        return obj.id_category === num;
      });
    }
    this.setState({visableData:arr});
  }

  filterCat = () => {
    var num=document.getElementById("kat-select").selectedIndex;
    console.clear();
    console.log(this.state.visableData);
    console.log(this.state.data);
    
    console.log(this.state.visableData);
  }

  getFilteredAdverts = () => {
    this.filterAdverts();
    this.filterCat();
  }

  async componentDidMount() {
    document.getElementById("poszukuje").checked=true;
    document.getElementById("oddaje").checked=true;
    //taking database data from server
    let dbRes = (await fetch("http://localhost:5000/baza")).json().then(
      response => {
        for (let i = 0; i < response.length; i+=1){
          this.setState( {id_user: response[0].id_user} );
          this.setState( {id_notice: response[0].id_notice} );
          this.setState( {type: response[0].type} );
          this.setState( {priority: response[0].priority} );
          this.setState( {creation_date: response[0].creation_date} );
          this.setState( {expiration_date: response[0].expiration_date} );
          this.setState( {reports_number: response[0].reports_number} );
          this.setState( {city: response[0].city} );
          this.setState( {status: response[0].status_description} );
          this.setState( {category: response[0].id_category} );
        }
        this.setState({data:response});
        this.filterAdverts();
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
            <input type="checkbox" onChange={this.filterAdverts} id="poszukuje" name="poszukuje"
            />
            <label for="poszukuje">Poszukuje</label>
            <input type="checkbox" onChange={this.filterAdverts} id="oddaje" name="oddaje"/>
            <label for="radio">Oddaje</label>
          </div>
          <div id="kategoria-filtr">
            <b>Kategoria:</b>
            <select name="kat" id="kat-select" onChange={this.filterAdverts}>
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
          {this.state.visableData.map(adv => (
            <Advert key={adv.id_notice} data={adv}/>
          ))}
          </div>
        <Footer />
      </>
    );
  
    
  }


}





export default Home;