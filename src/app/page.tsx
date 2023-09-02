import { Fragment } from 'react'
import Header from './components/header'
import HeroSection from './components/hero-section'
import WhatWeDo from './components/what-we-do'
import Brands from './components/brands'

export default function Home() {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <WhatWeDo />
      <Brands />
    </Fragment>
  )
}
