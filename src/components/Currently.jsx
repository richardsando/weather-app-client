import React from "react";
import rounder from "../rounder";

const Currently = ({ currently }) => {
  const icon = require(`../images/icons/${currently.icon}.svg`);
  console.log(currently);

  return (
    <div className="currently">
      <p className="currentlyTemp">{rounder(currently.temperature)}°C</p>
      <p>{currently.summary}</p>
      <img className="currentlyImg" src={icon} alt="" />
    </div>
  );
};

export default Currently;
