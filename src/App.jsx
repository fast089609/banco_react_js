import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Navbar from './components/Navbar'
import Slider from './components/Slider'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import LineButton from './components/LineButton'
import Notices from './components/Notices'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
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

export default App
