import React from "react";
import rounder from "../rounder";

const Currently = ({ currently, daily }) => {
  const icon = require(`../images/icons/${currently.icon}.svg`);
  const today = daily.data[0];

  return (
    <div className="currently">
      <div className="currentlyTempWrapper">
        <p className="currentlyTemp">{rounder(currently.temperature)}°</p>
        <div  className="today-low-high">
          <p>{rounder(today.temperatureHigh)}°</p> <p>/ {rounder(today.temperatureLow)}°</p>
        </div>
      </div>
      <div>
        <img className="currentlyImg" src={icon} alt="" />
        <p className="summary">{currently.summary}</p>
      </div>
    </div>
  );
};

export default Currently;
