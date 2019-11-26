import React from "react";
import rounder from'../rounder'

const Comfort = ({ currently }) => {
  return (
    <div className="comfort">
      <div>
      <h4>Comfort Level</h4>
      <p>Humidity: {rounder(currently.humidity * 100)}%</p>
      </div>
      <div>
      <p>Feels like {rounder(currently.apparentTemperature)}°</p>
      <p>UV index {currently.uvIndex}</p>
      </div>
    </div>
  );
};

export default Comfort;
