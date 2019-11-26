import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1>Weather X</h1>{" "}
      <div className="header-info">
        {" "}
        <a className="ricardo" href="https://github.com/richardsando">By Ricardo</a>
        <a className="dark-sky" href="https://darksky.net/forecast/">
          Powered by Dark Sky
        </a>
      </div>
    </div>
  );
};

export default Header;
