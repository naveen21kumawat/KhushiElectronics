import React from 'react'

function Footer() {
  return (
    
    <footer className="bg-gray-800 text-white py-6 mt-10 flex  items-center justify-around ">
       <div className="mt-4  flex flex-row items-center w-1/3 ">
          <a href="" 
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-block ml-10 mr-2"
          target="_blank"
          rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
          <a href="/terms"
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-
          2 px-4 rounded inline-block"
          target="_blank"
          rel="noopener noreferrer"
          >
            Terms of Service
          </a>
        </div>
      <div className="container w-1/3 mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Refurbished Laptop Shop. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with ❤️ by Your Name
        </p>
       
      </div>
      <div className="w-1/3 flex justify-center">
        <div className="">
         < h1 className="text-center text-gray-400 text-xs mt-4">Developed By Khushi Electronics</h1>
        </div>
      </div>
    </footer>

  )
}

export default Footer