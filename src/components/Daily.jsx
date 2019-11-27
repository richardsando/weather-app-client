import React from "react";
import rounder from "../helperMethods/rounder";
import moment from "moment";

const Daily = ({ daily }) => {
  const dailyArr = daily.data.filter((element, index) => {
    return index >= 1 && index <= 4;
  });

  const days = dailyArr.map((element, index) => {
    const icon = require(`../images/icons/${element.icon}.svg`);
    const dateObj = new Date(element.time * 1000);
    const date = moment(dateObj).format("ddd, MMM Do");

    return (
      <div className="daily-container" key={index}>
        <div className="daily-list-item">
          <p>{date}</p>
          <img className="daily-img" src={icon} alt="" />
          <div className="daily-temp">
            <p className="max-temp">{rounder(element.temperatureMax)}° </p>
            <p className="slash">/</p>
            <p className="min-temp">{rounder(element.temperatureMin)}°</p>
          </div>
        </div>
        <hr />
      </div>
    );
  });

  return <div className="daily-list">{days}</div>;
};

export default Daily;
