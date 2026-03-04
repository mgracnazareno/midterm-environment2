import React from "react";
import "./header.css";

export default function Header() {
  return (
    <header className="top-header">
      <div className="container">
        <div className="header-flex">
          <div className="logo">MGN</div>
          <div className="hamburger"></div>
          <nav className="menu-holder">
            <ul className="nav-menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>

              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
