import React from "react";
import rounder from'../rounder'
import moment from 'moment'

const Hourly = props => {
  const hoursArr = props.hourly.data.filter((value, index) => {
    return index >= 1 && index <= 23;
  });
  const hours = hoursArr.map((hour, index) => {
    const icon = require(`../images/icons/${hour.icon}.svg`);
    const date = new Date(hour.time * 1000);
    const time = moment(date).format( "h:mm a")
    return (
      <div className="hour" key={index}>
        <p className="hour-date">{time}</p>
        <img className="hourly-img" src={icon} alt="" />
        <p className="hour-temp">{rounder(hour.temperature)}°</p>
      </div>
    );
  });

  return <div className="hourlyContainer">{hours}</div>;
};

export default Hourly;
