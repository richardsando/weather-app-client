import React from "react";
import rounder from'../rounder'

const Comfort = ({ currently }) => {
  return (
    <div className="comfort">
      <h4>Comfort Level</h4>
      <p>Humidity: {currently.humidity * 100}%</p>
      <div>
      <p>Feels like {rounder(currently.apparentTemperature)}°C</p>
      <p>UV index {currently.uvIndex}</p>
      </div>
    </div>
  );
};

export default Comfort;
