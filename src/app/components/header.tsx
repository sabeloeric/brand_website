import React from 'react';
import Image from 'next/image';
import '../scss/components/header.scss';

function Header() {
  return (
    <nav className='header'>
      <div className='header__container'>
        <div className='header__figure'>
          <Image
            fill={true}
            src='/logo.svg'
            alt='logo'
            className='header__logo'
          />
        </div>
        <div className='header__links'>
          <a href='#' className='header__link'>
            Services
          </a>
          <a href='#' className='header__link'>
            Industries
          </a>
          <a href='#' className='header__link'>
            Cases
          </a>
          <a href='#' className='header__link'>
            Contact
          </a>
        </div>
        <button className='header__button'>
          Let&apos;s Talk
        </button>
      </div>
    </nav>
  );
}

export default Header;
