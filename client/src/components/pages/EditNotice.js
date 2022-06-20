import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import Footer from '../Footer';
import '../Navbar.css';
import './Login.css';



class EditNotice extends React.Component  {

  constructor(props) {
    super(props); 
    this.state = {
      id: 0
    };
  }

  


  render() {

    const { id } = this.props.match.params;
    this.state.id=id;


    function ajaxEditNotice() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
         console.log(this.responseText);
        }
      };
      xhttp.open("POST", "/api/editNotice", true);
      xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xhttp.send("&kategoria=" + document.getElementById("kat").value + "&tresc=" + document.getElementById("tresc").value + "&editId=" + id);
    }


    return (
      <>
      <form class="box" >
  <h1>Edycja ogłoszenia</h1>
  <input type="text" name="kategoria" placeholder="Kategoria" id ="kat" required />
  <input type="text" name="Treść" placeholder="Treść" required id = "tresc"/>
  <input type="button" name="submit" value="Potwierdź edycję" onClick={ajaxEditNotice} required />
  <br></br>

</form>
    <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '40px'}}>{id} ID!</h1>

    </>
);


}


  }


export default EditNotice;