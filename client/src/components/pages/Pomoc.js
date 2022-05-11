import React from 'react';
import '../../App.css';
import { Button } from '../Button';
import Footer from '../Footer';
import '../Navbar.css';
import './Login.css';
import './PomocRegulaminTworcy.css';

function Pomoc() {
  

  return (
    
    <>
    <div class='poboczne'>
<h1>Pomoc</h1>
	<p>
    <br></br><h3>Podstawowe pytania</h3><br></br>  
<b>Co można ogłosić na serwisie? </b><br></br>

    Mieszkania oraz pokoje, 

    Żywność, 

    Ubrania, 

    Zabawki dla dzieci, 

    Korepetycje, 

    Medykamenty. 

 

<br></br>  <b>  W jaki sposób możemy zarządzać ogłoszeniami? </b><br></br>

    Filtrować oraz wyszukiwać ogłoszenia. Filtrami dostępnymi w serwisie mogą być: 

    Oferty oddania a oferty poszukiwania produktu, 

    Typ ogłoszonego produktu. 

    Sortować ogłoszenia, 

    Modyfikować oraz zamykać wystawione ogłoszenia, 

    Zgłaszać nieodpowiednie oferty , 

    Przeglądać wystawione przez nas ogłoszenia z pozycji profilu użytkownika. 

 

<br></br>   <b> Kto może korzystać z serwisu? </b><br></br>

    Administrator, posiadający pełną kontrolę nad ogłoszeniami dostępnymi na stronie, 

    Użytkownik szukający pomocy, który może dodać ofertę poszukiwania produktu oraz zgłaszać się do ofert proponujących pomoc, 

    Użytkownik oferujący pomoc, który może dodać ofertę pomocy. 

 

  <br></br>  <b>Jakie znaczenie ma mieć ten serwis? </b><br></br>

Serwis został stworzony z myślą o oddzieleniu pomocy polsko-ukraińskiej od pozostałych, istniejących już popularnych stron z ofertami. Umożliwi to większą wygodę zarówno dla ludzi oferujących pomoc oraz tych, którzy tej pomocy będą potrzebowali. 

  

 <br></br>   <b> Jakie formy bezpieczeństwa będą dostępne w serwisie?</b>  <br></br>

    Automatyczna filtracja niecenzuralnych oraz nieodpowiednich słów w ogłoszeniach, 

    Weryfikacja rejestrujących się użytkowników, 

    Opcja zgłoszenia ofert przez innych użytkowników, 

    Ręczne usuwanie ogłoszeń przez Administratorów. 

 
    <br></br> <b> Jakie informacje muszą znajdować się w ogłoszeniu? </b> <br></br>

Ogłoszenie zostaje wystawione z wykorzystaniem formularza. Dane, które będą wpisywane w formularze to m.in.: 

    Numer kontaktowy, 

    Adres e-mail, 

    Data wygaśnięcia ogłoszenia, 

    Tytuł ogłoszenia, 

    Opis ogłoszenia, 

    Typ ogłoszenia, 

    Rodzaj produktu w ogłoszeniu. 

  
 <br></br>   <b> Co można zrobić na profilu użytkownika?  </b><br></br>

    Przeglądać wystawione ogłoszenia, 

    Przeglądać ogłoszenia, na które się odpowiedziało, 

    Zmieniać dane konta – adresu e-mail, hasła, typu konta, itp.,  <br></br>

 <br></br> <b>  Jak zalogować się na konto? </b><br></br>

Należy wpisać nick i hasło podane przy zakładaniu konta oraz nacisnąć przycisk "Zaloguj się"

 <br></br>   <b> Jak się zarejestrować? </b><br></br>
W zakładce Logowanie jest przycisk zarejestruj się. Po wpisaniu wszystkich wymaganych informacji  można założyć konto klikacją "Zarejestuj się"

 <br></br>  <b> Jak dodać / edytować ogłoszenie? </b> <br></br>
Należy wybrać odpowiedni przycisk na stronie Mój profil i wpełnić furmularz który się wyświetli.

 <br></br> <b>Rezerwowanie ogłoszenia:  </b><br></br>
Osoba zamawiająca klika przycisk "Rezerwuj" a ogłoszznie zminia w tedy status na zarezerwowanie .
Osoby wystawiająca ogłoszenie dostaje powiadominie ż ktoś jest chętny.Wtedy klika przycisk "Potwierdź" i ogłosznie zminia status na zakończone (jeśli wystawiający nie potwierdzi w ciągu 24h  - ogłosznie jest przywracane jako aktywne (po 5 przywróceniach ogłoszenie jest usuwane  bo najwyraźniej wystawiający jest nieaktywnym użytkownikiem)).Dane zamawiającego są wysyłane mailem do osoby która wystawia to ogłoszenie w celu daleszego kontaku.

 <br></br><b> Jak mogę sporawdzić organizacje charytatywne? </b> <br></br>
U dołu strony na stopce znajduje się link do strony z organizacjami charytatywnymi.  <br></br> <br></br> <br></br> <br></br>


    </p>
</div>
    



    </>
    	
	
  );
  
  
  }	


export default Pomoc;