import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import '../Navbar.css';
import './Home.css';

function Home() {
  return (
    <>
      <div class="header">
        <form class="contact-form" action="#" >
          <div class="contact-form-ico">  <i class="fas fa-search"></i></div>
          <input class="contact-form-text" type="text" name="baza" placeholder="Szukaj..." />
          <input class="contact-form-btn" type="submit" value="Szukaj" />
        </form>
      </div>
      <div class='header2'>
        <h2>Filtry</h2>
        <div id="typ-osoby-filtr">
          <b>Typ osoby:</b>
          <input type="checkbox" id="poszukuje" name="poszukuje"
          />
          <label for="poszukuje">Poszukuje</label>
          <input type="checkbox" id="oddaje" name="oddaje" />
          <label for="radio">Oddaje</label>
        </div>
        <div id="kategoria-filtr">
          <b>Kategoria:</b>
          <select name="kat" id="kat-select">
            <option value="">--Wszystko--</option>
            <option value="Mieszkanie">Mieszkanie</option>
            <option value="Zywnosc">Żywność</option>
            <option value="Ubrania">Ubrania</option>
            <option value="Zabawki">Zabawki dla dzieci</option>
            <option value="Korepetycje">Korepetycje</option>
            <option value="Medykamenty">Medykamenty</option>
          </select>
        </div>
      </div>
      <div class="content">
        <h2>Ogłoszenia</h2>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
      </div>
      <Footer />
    </>
  );
}

export default Home;