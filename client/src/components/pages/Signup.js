import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import Footer from '../Footer';
import '../Navbar.css';
import './Login.css';

function Signup() {
  

  return (
    
    <>
<form class="box" action="" method="post">
  <h1>Rejestracja</h1>
  <input type="text" name="" placeholder="Imie i nazwisko" />
  <input type="text" name="" placeholder="E-mail" />
  <input type="text" name="" placeholder="Username" />
  <input type="password" name="" placeholder="Password" />
  <input type="submit" name="" value="Zarejestruj się" />
  <br></br>

</form>
	
  
    



        <Footer/>
    </>
    	
	
  );
  
  
  }	


export default Signup;