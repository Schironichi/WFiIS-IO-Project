import React from 'react';
import { ButtonDodaj } from '../Button_dodaj';
import './Adverts.css';
import { Icon } from './Icon';

export const Advert = ({
    data,
    onClick
}) => {
    return (
        <div class="advert-container">
            <Icon/>
            <div>            {data.type}<br></br>
            {data.priority}<br></br>
            {data.creation_date}<br></br>
            {data.expiration_date}<br></br>
            {data.reports_number}<br></br>
            {data.city}<br></br>
            </div>
            <div class="advert-control">
                <ButtonDodaj className={'adv-button'} buttonSize={'btn2--small'}>Zobacz ogloszenie</ButtonDodaj>
                {data.status=="active"?<ButtonDodaj className={'adv-button'} buttonSize={'btn2--small'}>Rezerwuj</ButtonDodaj>:null}
            </div>
        </div>
    );
};