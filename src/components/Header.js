import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
       <h1>Hi, My name is Isabel Toledo</h1>
        <Typed 
        
        className="typed-text"
        strings = {["Welcome", "So nice to meet you!"]}
        typeSpeed = {40}
        backSpeed = {60}
        loop
        />

      </div>
    </div>
  );
};

export default Header;
