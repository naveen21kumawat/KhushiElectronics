import React from 'react'
import '../App.css' 

function Navbar() {
  return (
    <>
    <div className="nav text-black flex justify-between items-center p-4">
      <div className="shop-name">KhusiLaptop</div>
      <ul className="nav-links text-blue-900 flex gap-4">
        <li >Home</li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
    </div>
    </>
  )
}

export default Navbar