import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import RefurbishedLaptopShop from './components/RefurbishedLaptopShop'
import Hero from './components/Hero'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
    <Navbar/>
    <Hero/>

    <RefurbishedLaptopShop/>
    <Footer/>
    </>
  )
}
