import React from 'react';
import '../../App.css';
import { ButtonDodaj } from '../Button_dodaj';
import Footer from '../Footer';
import '../Navbar.css';

function Myprofile() {
  return (
    <>
        <div class='up'>
          <div class='dane'>
            <h2>Twoje dane:</h2>
            <p>Lorem</p>
            <p>Lorem</p>
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

export default Myprofile;