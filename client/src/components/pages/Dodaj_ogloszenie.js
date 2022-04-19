import React from 'react';
import '../../App.css';
import { ButtonDodaj } from '../Button_dodaj';
import Footer from '../Footer';
import '../Navbar.css';
import './Dodaj_ogloszenie.css';

function Dodaj_ogloszenie() {
  return (
    <>
        <div class="form">
    <h2>Dodaj ogłoszenie</h2>
<form class="contact-form" action="#" >
	
    <input class="contact-form-text" type="text"  name="tytul" placeholder="Podaj tytuł" /><br></br>
    <textarea class="contact-form-text"  name="opis" rows="5" cols="50" placeholder="Podaj opis" ></textarea><br></br>
    <input class="contact-form-text" type="text"  name="lokalizacja" placeholder="Podaj lokalizacje" /><br></br>
    <input class="contact-form-text" type="text"  name="kategoria" placeholder="Podaj kategorie"/><br></br>
    <input class="contact-form-text" type="text"  name="numer" placeholder="Podaj numer kontaktowy"/><br></br>
    <input class="contact-form-text" type="text"  name="email" placeholder="Podaj e-mail" /><br></br>
   <input class="contact-form-text" type="text"  name="data" placeholder="Podaj date wygaśnięcia ogłoszenia" /><br></br>



<input class="contact-form-btn" type="submit" value="Dodaj " name="sub"/>

</form>


</div>
        <Footer/>
    </>
  );
}

export default Dodaj_ogloszenie;