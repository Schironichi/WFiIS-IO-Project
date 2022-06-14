import React, { useContext, useEffect } from 'react';
import '../../App.css';
import { Button } from '../Button';
import Footer from '../Footer';
import '../Navbar.css';
import './Login.css';
import { LoginContext } from '../../LoginContext';
import { useHistory } from 'react-router-dom'

function Signup() {
  const [uid, setUid] = useContext(LoginContext);
  const history = useHistory();
  useEffect(() => {
    if (uid !== -1 && uid !== 'undefined') {
      return history.push('/myprofile');
    }
  }, []);

  return (
    
    <>
<form class="box" action="../../register" method="post">
  <h1>Rejestracja</h1>
  <input type="text" name="name" placeholder="Imie" required />
  <input type="text" name="surname" placeholder="Nazwisko" required />
  <input type="text" name="email" placeholder="E-mail" required />
  <input type="text" name="login" placeholder="Username" required />
  <input type="password" name="password" placeholder="Password" required />
  <input type="submit" name="submit" value="Zarejestruj się" required />
  <br></br>

</form>
	
  
    



        <Footer/>
    </>
    	
	
  );
  
  
  }	


export default Signup;