import React from "react";
import headerImage from "./../img/coffee.jpg";

function Header(){

  return (
    <React.Fragment>
      <div className="header">
        <h1>The Burlap Bean Tracker</h1>
        <img src={headerImage} alt="coffee" />
        <hr/>
      </div>
    </React.Fragment>
  );
}

export default Header; 