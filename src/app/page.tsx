import { Fragment } from 'react'
import Header from './components/header'
import HeroSection from './components/hero-section'
import WhatWeDo from './components/what-we-do'
import Brands from './components/brands'
import Footer from './components/footer'
import CaseStudiesContainer from './components/case-studies'

export default function Home() {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <WhatWeDo />
      <CaseStudiesContainer />
      <Brands />
      <Footer />
    </Fragment>
  )
}
