import { Button } from "@material-ui/core";
import React, { useState } from "react";
import menuItems from "./MenuItems";
import "./Navbar.css";
const Navbar = () => {
  const [state, setstate] = useState(false);

  const handleClick = () => {
    setstate(!state)
  };

  return (
    <div>
      <nav className="navbar-items">
        <h1 className="navbar-logo">
          React <i className="fab fa-react"></i>{" "}
        </h1>
        <div className="menu-icon" onClick={handleClick}>
          <i className={state ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={state ? 'nav-menu active':'nav-menu'} >
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>{" "}
              </li>
            );
          })}
        </ul>
        <button style={{backgroundColor:'teal',color:'#fff',padding:'10px',width:'100px',border:'2px #6876f7'}}>
            Signup
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
