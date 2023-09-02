import React from 'react';
import Image from 'next/image';
import '../scss/components/service-info.scss';

interface ServiceInfoProps {
  iconUrl: string;
  title: string;
  description: string;
}

function ServiceInfo({ iconUrl, title, description }: ServiceInfoProps) {
  return (
    <div className='service-info'>
      <div className='service-info__figure'>
        <Image
          fill={true}
          src={iconUrl}
          alt={title}
          className='service-info__image'
        />
      </div>
      <div className='service-info__title h4'>{title}</div>
      <div className='service-info__description'>{description}</div>
    </div>
  );
}

export default ServiceInfo;
