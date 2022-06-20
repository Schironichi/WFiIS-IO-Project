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
<form class="contact-form" action="../../dodaj_ogloszenie" method="post" >
	
    <input class="contact-form-text" type="text"  name="tytul" placeholder="Podaj tytuł" /><br></br>
    <textarea class="contact-form-text"  name="opis" rows="5" cols="50" placeholder="Podaj opis" ></textarea><br></br>
    <input class="contact-form-text" type="text"  name="lokalizacja" placeholder="Podaj lokalizacje" /><br></br>
  
    <select class="contact-form-text" name="kategoria" >
      <option selected disabled>Wybierz kategorie</option>
      <option value="1">Mieszkanie</option>
      <option value="2">Żywność</option>
      <option value="3">Ubrania</option>
      <option value="4">Zabawki dla dzieci</option>
      <option value="5">Korepetycje</option>
      <option value="6">Medykamenty</option>
   </select><br></br>
    <input class="contact-form-text" type="text"  name="typ" placeholder="Podaj typ ogłoszenia (oglaszam / szukam)"/><br></br>

<input class="contact-form-btn" type="submit" value="Dodaj ogłoszenie " name="sub"/>

</form>


</div>
        <Footer/>
    </>
  );
}

export default Dodaj_ogloszenie;
// <input class="contact-form-text" type="text"  name="uzytkownik" placeholder="Podaj twoje id"/><br></br>
//  <input class="contact-form-text" type="text"  name="kategoria" placeholder="Podaj id kategorii"/><br></br>