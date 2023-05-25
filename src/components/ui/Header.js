import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

const Header = () => {
  const MENU = ["HOME", "MENU", "ABOUT", "CONTACT"];
  const RIGHT = [
    {
      icon: <BsSearch size={27} />,
    },
    { icon: <FaRegUserCircle size={27} /> },
  ];
  return (
    <div className="header-container">
      <h1 style={{ fontWeight: 700 }}>RECIPES</h1>
      <div className="">
        <ul className="ul-hozi">
          {MENU.map((menu) => (
            <li key={menu}>{menu}</li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="ul-hozi ">
          {RIGHT.map((right, index) => (
            <li key={index}>{right.icon}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
