import React from 'react';
import SectionTitle from './section-title';
import '../scss/components/brands.scss';
import Image from 'next/image';

const brand_images = [
  'visa.svg',
  'tymebank.svg',
  'distell.svg',
  'spotify.svg',
  'microsoft.svg',
  'engen.svg',
  'nike.svg',
  'wesgro.svg',
  'multichoice.svg',
  'pick-n-pay.svg',
  'liquid.svg',
  'tfg.svg',
  'santam.svg',

  'sanlam.svg',

  'bbc.svg',
];

function Brands() {
  return (
    <div className='brands'>
      <SectionTitle title="You'll be in good company" />
      <div className='brands__title h1'>Trusted by leading brands</div>
      <div className='brands__images'>
        {brand_images.map((image, index) => (
          <div key={index} className='brands__figure'>
            <Image
              fill
              src={`/brands/${image}`}
              alt={image}
              className='brands__image'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
