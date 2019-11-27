import React from "react";
import rounder from "../helperMethods/rounder";

function degToCompass(num) {
  var val = Math.floor(num / 22.5 + 0.5);
  var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return arr[val % 16];
}

const Wind = ({ currently }) => {
  const windDirection = degToCompass(currently.windBearing);

  return (
    <div className="wind">
      <div>
        <h4>Wind</h4>
      </div>
      <div>
        <p>Wind speed: {rounder(currently.windSpeed)}km/h</p>
        <p>Wind direction: {windDirection}</p>
      </div>
    </div>
  );
};

export default Wind;
