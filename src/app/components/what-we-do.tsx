import React from 'react';
import SectionTitle from './section-title';
import '../scss/components/what-we-do.scss';
import ServiceInfo from './service-info';

function WhatWeDo() {
  return (
    <div className='what-we-do'>
      <SectionTitle title='What we do' />
      <div className='h1 what-we-do__title'>
        We offer a complete range of bespoke design and development services to
        help you turn your ideas into digital masterpieces
      </div>
      <div className='what-we-do__services'>
        <ServiceInfo
          iconUrl='/what-we-do/web-development.svg'
          title='Web development'
          description='We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.'
        />
        <ServiceInfo
          iconUrl='/what-we-do/user-experience.svg'
          title='User experience & design'
          description='Our complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.'
        />
        <ServiceInfo
          iconUrl='/what-we-do/mobile-app-dev.svg'
          title='Mobile app development'
          description='Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.'
        />
        <ServiceInfo
          iconUrl='/what-we-do/blockchain-solutions.svg'
          title='Blockchain solutions'
          description='We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.'
        />
      </div>
    </div>
  );
}

export default WhatWeDo;
