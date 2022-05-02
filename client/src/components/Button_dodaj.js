import React from 'react';
import './Button_dodaj.css';
import { Link } from 'react-router-dom';
import Notice_details from './pages/Notice_details';
import  {Reservation}  from './pages/Reservation';

const STYLES = ['btn2--primary', 'btn2--outline', 'btn2--test'];

const SIZES = ['btn2--medium', 'btn2--large', 'btn2--small'];

export const ButtonDodaj = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  rest,
  param
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];


  return (

      <Link to={{pathname: `/${rest}/${param}`, state: param}}>
      <button
  
        className={`btn2 ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>

  );
};