import React , { useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import '../../App.css';
import { Button } from '../Button';
import Footer from '../Footer';
import '../Navbar.css';
import './Logout.css';
import { LoginContext } from '../../LoginContext';

function Logout() {
  const [uid, setUid] = useContext(LoginContext);
  const history = useHistory();
  useEffect(() => {
    console.log(uid);
    if (uid === -1 || uid === 'undefined') {
      return history.push('/login');
    }
  }, []);

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      setUid(-1);
    }
  };
  xhttp.open("GET", "api/logout", true);
  xhttp.setRequestHeader('Content-type', 'application/json');
  xhttp.send();

  return (
    
    <>
<form class="box">
  <h1>Pomyślnie wylogowano</h1>
  <br></br>
  <h2>Czy chcesz się ponownie zalogować?</h2>
  <Button>Zaloguj się</Button>
</form>
	
  
    



        <Footer/>
    </>
    	
	
  );
  
  
  }	


export default Logout;