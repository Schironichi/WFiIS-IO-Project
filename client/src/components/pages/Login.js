import React , { useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom'
import '../../App.css';
import { Button } from '../Button';
import Footer from '../Footer';
import '../Navbar.css';
import './Login.css';
import { LoginContext } from '../../LoginContext';





function Login() {
  const [uid, setUid] = useContext(LoginContext);
  const history = useHistory();
  useEffect(() => {
    if (uid !== -1 && uid !== 'undefined') {
      return history.push('/myprofile');
    }
  }, []);

  function ajaxProba() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       console.log(this.responseText);
       setUid(this.responseText);
       return history.push('/myprofile');
      }
    };
    xhttp.open("POST", "api/login", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.send("login=" + document.getElementById("loginID").value + "&password=" + document.getElementById("passwordID").value);
  }

  function pobierzId() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       console.log(this.responseText);
       setUid(this.responseText);
      }
    };
    xhttp.open("GET", "api/userid", true);
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
  {/* <input type="button" name="" value="Pobierz id" onClick={pobierzId} /> */}
  <br></br>
  <h2>Nie masz konta</h2>
  <Button>Zarejestuj się</Button>
</form>
	
  
    



        <Footer/>
    </>
    	
	
  );
  
  
  }	


export default Login;