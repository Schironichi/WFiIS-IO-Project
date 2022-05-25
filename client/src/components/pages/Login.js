import React , {useRef} from 'react';
import '../../App.css';
import { Button } from '../Button';
import Footer from '../Footer';
import '../Navbar.css';
import './Login.css';





function Login() {

  function ajaxProba() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       console.log(this.responseText);
      }
    };
    xhttp.open("POST", "http://localhost:5000/login111", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send("login=" + document.getElementById("loginID").value + "&password=" + document.getElementById("passwordID").value);
  }

  function pobierzId() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       console.log(this.responseText);
      }
    };
    xhttp.open("GET", "http://localhost:5000/userid", true);
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.send();
  }

  return (
    
    <>
<form class="box">
  <h1>Logowanie</h1>
  <input type="text" name="login" id = "loginID" placeholder="Username" />
  <input type="password" name="password" id = "passwordID" placeholder="Password" />
  <input type="button" name="" value="Zaloguj się" onClick={ajaxProba} />
  <input type="button" name="" value="Pobierz id" onClick={pobierzId} />
  <br></br>
  <h2>Nie masz konta</h2>
  <Button>Zarejestuj się</Button>
</form>
	
  
    



        <Footer/>
    </>
    	
	
  );
  
  
  }	


export default Login;