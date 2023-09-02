import React from 'react'
import Image from 'next/image'
import '../scss/components/hero-section.scss'

function HeroSection() {
  return (
    <div className='hero'>
        <Image
            fill={true}
            src='/hero-image.png'
            alt='hero image'
            className='hero__image'
          />
        <div className='hero__content'>
            <h1 className='title hero__title'>
                Live with Confidence
            </h1>
            <h2 className='subtitle hero__subtitle'>
                José Mourinho brings confidence to pan-African Sanlam campaign.
            </h2>
            <button className='button button--primary'>
                View project
            </button>
        </div>
    </div>
  )
}

export default HeroSection