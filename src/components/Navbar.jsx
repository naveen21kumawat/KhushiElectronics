import React from 'react'
import '../App.css' 

function Navbar() {
  return (
    <>
    <div className="nav w-full bg-blue-200 text-black flex justify-between items-center p-4">
      <div className="shop-name w-1/4 italic">KhusiLaptop</div>
      <ul className="text-blue-900 w-3/4  flex  justify-center gap-4">
        <li >Home</li>
        <li>Shop</li>
        <li>Contact</li>
      </ul>
    </div>
    </>
  )
}

export default Navbar