import React from 'react';
import Image from 'next/image';

interface CaseStudiesListProps {
  caseStudies: CaseStudy[];
}

interface CaseStudy {
  imageUrl: string;
  title: string;
  description: string;
}

function CaseStudiesList({ caseStudies }: CaseStudiesListProps) {
  return (
    <div className='case-studies'>
      {caseStudies.map((study, index) => (
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
    </div>
  );
}

export default CaseStudiesList;
