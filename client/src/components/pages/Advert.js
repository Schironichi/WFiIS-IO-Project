import React from 'react';
import { ButtonDodaj } from '../Button_dodaj';
import './Adverts.css';
import { Icon } from './Icon';

export const Advert = ({
    data,
    onClick
}) => {
    function showAdvert(){
        console.log("show");
    }
    function  reserveAdvert(){
        console.log("reserve");
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
        <div class="advert-container">
            <Icon num={data.category}/>
            <div>
                <p class="advert-entry">Typ: {data.type}</p>
                <p class="advert-entry">Priorytet: {data.priority}</p>
                <p class="advert-entry">Wygasa: {getDate(data.expiration_date)}</p>
                <p class="advert-entry">Zgłoszone osoby: {data.reports_number}</p>
                <p class="advert-entry">Miasto: {data.city}</p>
            </div>
            <div class="advert-control">
                {data.status=="active"?
                <p class="status-info active-status">Aktywny</p>:<p class="status-info inactive-status">Nieaktywny</p>}
                <ButtonDodaj rest={''} onClick={showAdvert} className={'adv-button'} buttonSize={'btn2--small'}>Zobacz ogloszenie</ButtonDodaj>
                {data.status=="active"?<ButtonDodaj rest={''} onClick={reserveAdvert} className={'adv-button'} buttonSize={'btn2--small'}>Rezerwuj</ButtonDodaj>:null}
            </div>
        </div>
    );
};