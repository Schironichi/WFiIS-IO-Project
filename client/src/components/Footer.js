import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <section class='footer-links'>
      <div class='footer-link-wrapper'>
      

      <Link
                to='/pomoc'
                className='footer-link-items'
              
              >
               Pomoc
              </Link>
              <Link
                to='/regulamin'
                className='footer-link-items'
                
              >
               Regulamin
              </Link>
              <Link
                to='/organizacje_charytatywne'
                className='footer-link-items'
               
              >
               Organizacje charytatywne
              </Link>
              <Link
                to='/tworcy'
                className='footer-link-items'
                
              >
               Twórcy
              </Link>


      </div>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
                    
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
          </div>
        </div>
      </section>

    </footer>
  );
}

export default Footer;

/*<div class='footer-subscription'>
      <img src="herb.png"  width="100" height="100"/>
      </div>*/