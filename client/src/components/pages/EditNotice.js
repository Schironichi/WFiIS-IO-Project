import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import Footer from '../Footer';
import '../Navbar.css';
import './Login.css';

function EditNotice() {
  

  return (
    
    <>
<form class="box" action="../../edited" method="post">
  <h1>Edycja ogłoszenia</h1>
  <input type="text" name="kategoria" placeholder="Kategoria" required />
  <input type="text" name="Treść" placeholder="Treść" required />
  <input type="submit" name="submit" value="Potwierdź edycję" required />
  <br></br>

</form>

        <Footer/>
    </>
    	
	
  );
  
  
  }	


export default EditNotice;