import React from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faContactCard,
  faHouse,
  faShop,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="nav bg-blue-50  shadow-lg w-full flex flex-wrap md:flex-nowrap sm:nowrap items-center justify-between mb-2 mt-1 m-1 rounded-2xl px-4 py-2   ">
        <div className="shop-name w-full md:w-1/4 italic text-center text-purple-800 text-base md:text-lg font-semibold mb-2 md:mb-0">
          Khushi Laptop
        </div>
        <ul className="w-full md:w-3/4 flex flex-wrap justify-evenly md:justify gap-1 text-sm md:text-base rounded-2xl border-2 p-3 text-blue-900">
          <li className="hover:text-blue-600 transition duration-300">
            <Link to="/" className="flex items-center gap-1">
              <FontAwesomeIcon icon={faHouse} />
              Home
            </Link>
          </li>
          <li className="hover:text-blue-600 transition duration-300">
            <Link to="/shop" className="flex items-center gap-1">
              <FontAwesomeIcon icon={faShop} />
              Shop
            </Link>
          </li>
          <li className="hover:text-blue-600 transition duration-300">
            <Link to="/about" className="flex items-center gap-1">
              <FontAwesomeIcon icon={faContactCard} />
              Contact
            </Link>
          </li>
          <li className="hover:text-blue-600 transition duration-300">
            <Link to="/review" className="flex items-center gap-1  rounded-md">
              <FontAwesomeIcon icon={faStar} />
              Review
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
