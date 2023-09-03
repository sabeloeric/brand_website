"use client";

import React, { useState, useEffect, Fragment } from 'react';
import SectionTitle from './section-title';
import CaseStudiesList from './case-studies-list';
import '../scss/components/case-studies.scss';
import { generatedCaseStudies } from '../constants/case-studies';

function CaseStudiesContainer() {
  const [loading, setLoading] = useState(true);
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]); 
  
  useEffect(() => {
    setLoading(true);

    fetch('https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setCaseStudies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setCaseStudies(generatedCaseStudies);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className='case-studies-wrapper'>
      <SectionTitle title='Case Studies' />
      {loading && <div className='case-studies-loader'>Loading...</div>}

      {!loading && (
        <Fragment>
          <div className='mobile-case-studies'>
            <CaseStudiesList caseStudies={caseStudies} caseStudiesToShow={1} />
          </div>
          <div className='desktop-case-studies'>
            <CaseStudiesList caseStudies={caseStudies} />
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default CaseStudiesContainer;
