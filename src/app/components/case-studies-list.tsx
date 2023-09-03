import React from 'react';
import Image from 'next/image';
import Slider from "react-slick";
import "../scss/vendor/slick/index.scss"; 

interface CaseStudiesListProps {
  caseStudies: CaseStudy[];
  caseStudiesToShow?: number;
}

function CaseStudiesList({ caseStudies, caseStudiesToShow }: CaseStudiesListProps) {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: caseStudiesToShow ?? 3,
    slidesToScroll: 1,
    autoPlay: true,
  };

  // Duplicate the case studies so we can have a continuous loop
  // Since we only have 3 case studies, and we are showing 3 at a time,
  // we need to duplicate the case studies so we can have a continuous loop 
  const doubleCaseStudies = [...caseStudies, ...caseStudies];

  return (
    <div className='case-studies'>
      <Slider {...sliderSettings}>
      {doubleCaseStudies.map((study, index) => (
        <div key={index} className='case-study'>
          <Image
            fill
            src={study.imageUrl}
            alt={study.title}
            className='case-study__image'
          />
          <div className='case-study__content'>
            <h3 className='case-study__title h3'>{study.title}</h3>
            <p className='case-study__description'>{study.description}</p>
          </div>
        </div>
      ))}
      </Slider>
    </div>
  );
}

export default CaseStudiesList;
