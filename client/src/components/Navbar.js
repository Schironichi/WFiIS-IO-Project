import React, { useState, useEffect, useContext } from 'react';

import { Link } from 'react-router-dom';
import './Navbar.css';
import { LoginContext } from '../LoginContext';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [uid, setUid] = useContext(LoginContext);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
         <div className='navbar-logo'> ogUAszamy.pl </div>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
            {uid == -1 ? (
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Strona główna
              </Link>
            </li>
              <li className='nav-item'>
              <Link
                to='/login'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Logowanie
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/signup'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Rejestracja
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/kontakt'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               Kontakt
              </Link>
            </li>
            
          </ul>

) : (
  <ul className={click ? 'nav-menu active' : 'nav-menu'}>
    <li className='nav-item'>
      <Link to='/' className='nav-links' onClick={closeMobileMenu}>
        Strona główna
      </Link>
    </li>
      <li className='nav-item'>
      <Link
        to='/logout'
        className='nav-links'
        onClick={closeMobileMenu}
      >
       Wyloguj
      </Link>
    </li>
    <li className='nav-item'>
      <Link
        to='/myprofile'
        className='nav-links'
        onClick={closeMobileMenu}
      >
       Mój profil
      </Link>
    </li>
    
    <li className='nav-item'>
      <Link
        to='/kontakt'
        className='nav-links'
        onClick={closeMobileMenu}
      >
       Kontakt
      </Link>
    </li>
    
  </ul>
  )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
