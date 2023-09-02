'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import '../scss/components/header.scss';

function Header() {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen(!isSideNavOpen);
  };

  return (
    <nav className={`header ${isSideNavOpen ? 'open' : 'closed'}`}>
      <div className='header__container'>
        <button
          className='header__toggle-button'
          onClick={toggleSideNav}>
          ☰
        </button>
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
      {/* Side Navigation Menu */}
      <div className={`header__sidenav ${isSideNavOpen ? 'open' : 'closed'}`}>
        <button
          className='header__toggle-button header__toggle-button--close'
          onClick={toggleSideNav}>
          X
        </button>
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
    </nav>
  );
}

export default Header;
