import React from 'react';
import { ButtonDodaj } from '../Button_dodaj';
import './Adverts.css';
import { Icon } from './Icon';


import Alert from "react-bootstrap/Alert";


export const Details = ({
    data,
    onClick
}) => {

  
  const showAdvert = () => {
    console.show("advert")
  }

  function  reserveAdvert(){
    console.show("advert")
}

    function getDate(expiration_date)
    {
        if(String.length>0)
        {
            var d=new Date(expiration_date);
            return d.toLocaleString('en-GB', { day:"2-digit",month: 'short',year:"numeric" });
        }
        return "";
    }
    getDate();
    return (
        <div class="advert-container2">
            <Icon num={data.category}/>
            <div>
            <p class="advert-entry"><b>Tytuł:</b> {data.title}</p>
                <p class="advert-entry"><b>Miasto:</b> {data.city}</p>
                <p class="advert-entry"><b>Opis:</b> {data.opis}</p>
            </div>
            <div>
            {data.status==="active"?<ButtonDodaj param={data.id} rest={'zarezerwowano'} onClick={reserveAdvert} className={'adv-button'} buttonSize={'btn2--small'}>Rezerwuj</ButtonDodaj>:null}            </div>
        </div>
    );
};