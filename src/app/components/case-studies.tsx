'use client';

import React, { useState, useEffect } from 'react';
import SectionTitle from './section-title';
import CaseStudiesList from './case-studies-list';
import '../scss/components/case-studies.scss';

function CaseStudiesContainer() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [caseStudies, setCaseStudies] = useState([]);

  useEffect(() => {
    setLoading(true);

    fetch(
      'https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws'
    )
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
        setError(error);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className='case-studies-loader'>Loading...</div>;
  }

  if (error) {
    return null;
  }

  return (
    <div className='case-studies-wrapper'>
      <SectionTitle title='Case Studies' />
      <CaseStudiesList caseStudies={caseStudies} />
    </div>
  );
}

export default CaseStudiesContainer;
