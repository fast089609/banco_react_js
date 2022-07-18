import React from 'react'
import Slider from '../Index/Slider'
import Services from '../Index/Services'
import LineButton from '../Index/LineButton'
import Notices from '../Index/Notices'
import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import AboutUs from '../Index/AboutUs'

const Index = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Slider></Slider>
      <Services></Services>
      <AboutUs></AboutUs>
      <LineButton></LineButton>
      <Notices></Notices>
      <Footer></Footer>
    </div>
  )
}

export default Index