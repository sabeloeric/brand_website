import React from 'react';
import SectionTitle from './section-title';
import '../scss/components/footer.scss';

function Footer() {
  return (
    <div className='footer'>
      <SectionTitle title='Contact us' />
      <div className='footer__contact-details'>
        <div>
          <div className='footer__title h2'>
            Have a project in mind?
            <br />
            Let&apos;s make it happen
          </div>

          <br />
          <br />
          <br />
          <br />

          <div className='footer__links'>
            <div className='footer__link-block'>
              <a className='footer__link' href='#'>
                Terms of service
              </a>
              <a className='footer__link' href='#'>
                Privacy policy
              </a>
              <a className='footer__link' href='#'>
                Impressum
              </a>
            </div>
            <div className='footer__link-block'>
              <a className='footer__link' href='#'>
                Facebook
              </a>
              <a className='footer__link' href='#'>
                Instagram
              </a>
              <a className='footer__link' href='#'>
                Twitter
              </a>
            </div>
            <div className='footer__link-block'>
              <a className='footer__link' href='#'>
                Github
              </a>
              <a className='footer__link' href='#'>
                Linkedin
              </a>
              <a className='footer__link' href='#'>
                Teams
              </a>
            </div>
            <div className='footer__link-block'>
              <a className='footer__link' href='#'>
                Youtube
              </a>
              <a className='footer__link' href='#'>
                Behance
              </a>
              <a className='footer__link' href='#'>
                Dribbble
              </a>
            </div>
          </div>
        </div>
        <div className='footer__address'>
          22 Street Name, Suburb, 8000,
          <br />
          Cape Town, South Africa
          <br />
          +27 21 431 0001
          <br />
          <a
            className='footer__address-link'
            href='mailto:enquirie@website.co.za'
          >
            enquirie@website.co.za
          </a>
          <br />
          <br />
          <br />
          Explore open jobs
          <br />
          <br />
          ©2000—2023 Company Name
        </div>
      </div>
    </div>
  );
}

export default Footer;
