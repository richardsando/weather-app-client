import React from "react";
import moment from "moment";
import moonCalc from '../helperMethods/moonCalc'

const Moon = ({ daily }) => {
  const today = daily.data[0];
  const sunriseTime = new Date(today.sunriseTime * 1000);
  const sunrise = moment(sunriseTime).format("h:mm a");
  const sunsetTime = new Date(today.sunsetTime * 1000);
  const sunset = moment(sunsetTime).format("h:mm a");

  return (
    <div className="lunar">
      <div className="moon">
        <h4>Lunar activity</h4>
        <p>Moon phase: {moonCalc(today.moonPhase)}</p>
      </div>
      <div>
        <p>Sunrise: {sunrise}</p>
        <p>Sunset: {sunset} </p>
      </div>
    </div>
  );
};

export default Moon;
