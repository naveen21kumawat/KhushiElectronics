import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faContactCard,
  faHouse,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav w-full flex   shadow-lg rounded-lgx px-4">
        <div className="shop-name bg- w-1/4 italic px-2 m-auto  p-1 text-center ">
        <marquee className='text-purple-800' behavior="rigth" direction="">Welcome To Khushi Laptop</marquee>
        Khushi Laptop</div>
        <ul className="text-blue-900 w-3/4 m-2 border-2 bg-white flex  justify-center items-center gap-8  p-2">
          <li className="text-blue-900 hover:text-blue-600 border-3 transition duration-300">
            <Link to="/">
              <FontAwesomeIcon className="mx-2" icon={faHouse} />
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop">
              <FontAwesomeIcon className="mx-2" icon={faShop} />
              Shop
            </Link>
          </li>
          <li>
            <Link to="/about">
              <FontAwesomeIcon className="mx-2" icon={faContactCard} />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
