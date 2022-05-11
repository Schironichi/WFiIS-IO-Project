import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import Footer from '../Footer';
import '../Navbar.css';
import './Login.css';

function Kontakt() {
  

  return (
    
    <>
    <div class="form">
<form class="contact-form" action="#" >
  <h1>Kontakt</h1>

  <input class="contact-form-text" type="text"  name="email" placeholder="Podaj e-mail" /><br></br>
  <textarea class="contact-form-text"  name="opis" rows="10" cols="50" placeholder="Podaj sprawę w której piszesz" ></textarea><br></br>

  <input class="contact-form-btn" type="submit" value="Wyślij " name="sub"/>
  <br></br>

</form>
	
  
</div>

    </>
    	
	
  );
  
  
  }	


export default Kontakt;