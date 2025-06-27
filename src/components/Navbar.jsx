import React from 'react'
import '../App.css' 

function Navbar() {
  return (
    <>
    <div className="nav w-full bg-blue-200 text-black flex justify-between items-center px-4">
      <div className="shop-name w-1/4 italic">KhusiLaptop</div>
      <ul className="text-blue-900 w-3/4  flex  justify-center items-center gap-8  p-2">
        <li><a href="home">Home</a></li>
        <li><a href="shop">Shop</a></li>
        <li><a href="about">About</a></li>
      </ul>
    </div>
    </>
  )
}

export default Navbar