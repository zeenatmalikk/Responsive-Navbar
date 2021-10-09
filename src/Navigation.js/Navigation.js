import React, { useState } from "react";
import menuItems from "../Navbar/MenuItems";
import "./Navigation.css";
const Navigation = () => {
  const [showIcon, setshowIcon] = useState(false);
  const handleIcon=()=>{
      setshowIcon(!showIcon)
  }
  return (
    <div>
      <nav className="nav-bar">
        <h1 className="logo-nav">
          React <i className="fab fa-react"></i>
        </h1>
        <div className="menuicon" onClick={handleIcon}>
          <i  className={showIcon ? "fas fa-times":"fas fa-bars"}></i>
        </div>
        <ul className={showIcon ? "navmenu mobile": "navmenu"}>
          {menuItems.map((item) => {
            return (
              <li>
                <a href={item.url} className={item.cName}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
