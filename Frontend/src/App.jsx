import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import RefurbishedLaptopShop from './components/RefurbishedLaptopShop'
import Hero from './components/Hero'
import Footer from './components/Footer'
import FeaturedProduct from './components/FeaturedProduct'

export default function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
<FeaturedProduct/>
    {/* <RefurbishedLaptopShop/> */}
    <Footer/>
    </>
  )
}
