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
      <div className="nav w-full shadow-md hover:shadow-2xl transition translet duration-300 border-2 text-black shadow-2xl flex justify-between items-center px-4">
        <div className="shop-name w-1/4 italic text-2xl">KhusiLaptop</div>
        <ul className="text-blue-900 w-3/4 m-2 flex  justify-center items-center gap-8  p-2">
          <li>
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
