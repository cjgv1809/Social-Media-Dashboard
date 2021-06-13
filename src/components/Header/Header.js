import React from "react";
import "./Header.css";

const Header = ({ children }) => {
  return (
    <header className="header">
      <div className="wrapper">
        <div className="header__grid">
          <div>
            <h1>Social Media Dashboard</h1>
            <p className="header__total">Total Followers: 23, 004</p>
          </div>
          {/* Here the "children" is the switch component as we can see in the App component, there's the Header component surrounding it */}
          {children}
        </div>
      </div>
    </header>
  );
};

export default Header;
