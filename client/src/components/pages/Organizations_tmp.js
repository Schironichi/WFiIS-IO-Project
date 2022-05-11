import React from 'react';
import { ButtonDodaj } from '../Button_dodaj';

import './Organizations.css';
import { Icon } from './Icon';
import { Notice_details } from './Notice_details';
import { Navbar } from '../Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Alert from "react-bootstrap/Alert";


export const Organizations_tmp = ({
    data,
    key,
    onClick
}) => {

   


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
        <tr>
                <td>{data.organization_name}</td> 
                <td>{data.account}</td>
                <td>{data.address}</td>

                </tr>
    );
};