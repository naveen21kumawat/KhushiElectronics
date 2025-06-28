import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faContactCard,
  faHouse,
  faShop,
} from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <>
      <div className="nav w-full flex   shadow-lg rounded-lgx px-4">
        <div className="shop-name bg- w-1/4 italic px-2 m-auto  p-1 text-center ">
        <marquee className='text-purple-800' behavior="rigth" direction="">Welcome To Khushi Laptop</marquee>
        Khushi Laptop</div>
        <ul className="text-blue-900 w-3/4 m-2 border-2 bg-white flex  justify-center items-center gap-8  p-2">
          <li className="text-blue-900 hover:text-blue-600 border-3 transition duration-300">
            <a href="home">
              <FontAwesomeIcon className="mx-2" icon={faHouse} />
              Home
            </a>
          </li>
          <li>
            <a href="shop">
              <FontAwesomeIcon className="mx-2" icon={faShop} />
              Shop
            </a>
          </li>
          <li>
            <a href="about">
              <FontAwesomeIcon className="mx-2" icon={faContactCard} />
              Contact
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
