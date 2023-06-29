import React from "react";
import { BsSearch } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const MENU = ["HOME", "MENU", "ADD RECIPES", "CONTACT"]
    ;
  const RIGHT = [
    {
      icon: <BsSearch size={27} />,
    },
    { icon: <FaRegUserCircle size={27} />, route: "profile" },
  ];
  return (
    <div className="header-container">
      <h1 style={{ fontWeight: 700 }}>RECIPES</h1>
      <div className="">
        <ul className="ul-hozi">
          {MENU.map((menu) => (
            <li key={menu}>
              <Link
                to={`/${menu}`}
                style={{ color: "#000", textDecoration: "none" }}
              >
                {menu}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="ul-hozi ">
          {RIGHT.map((right, index) => (
            <li key={index}>
              <Link
                to={`/${right?.route}`}
                style={{ color: "#000", textDecoration: "none" }}
              >
                {right.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
