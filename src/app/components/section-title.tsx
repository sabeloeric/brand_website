import React from 'react'
import '../scss/components/section-title.scss'

interface SectionTitleProps {
    title: string;
  }

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
    return (
    <div className='section-title'>
        <div className='section-title__line'></div>
        <div className='section-title__text'>
            {title}
        </div>
    </div>
  )
}

export default SectionTitle