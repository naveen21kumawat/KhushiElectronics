import React from 'react'
import '../App.css' // Ensure Tailwind CSS is imported


function Navbar() {
  return (
    <>
    <div className="nav  text-white flex justify-between items-center p-4">
      <div className="shop-name">KhusiLaptop</div>
      <ul className="nav-links">
        <li className='text-red-900'>Home</li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
    </div>
    </>
  )
}

export default Navbar