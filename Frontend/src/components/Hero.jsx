import React from 'react'

function Hero() {
  return (
    <>
    <div className="hero w-full h-72 flex background-white background-white p-10 shadow-lg rounded-lgx px-4">
      <div className="hero-content w-1/2 text-center item-center justify-center flex flex-col gap-4"> 
        <h1 className="text-4xl font-bold mb-2">
          Top Quality Refurbished Laptops
        </h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          at Unbeatable Prices
        </h2>
        <div className="flex justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded">Shop Now</button>
          <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded">
            View Deals
          </button>
      </div></div>
      <div className="hero-content w-1/2 "> </div>
    </div>
    </>
  )
}

export default Hero