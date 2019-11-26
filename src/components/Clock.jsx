import React from "react";
import Currently from "./Currently";
import Hourly from "./Hourly";
import Daily from "./Daily";
import Comfort from "./Comfort";
import Wind from "./Wind";
import sunny from "../images/icons/sunny.svg";
import location from "../images/icons/location.svg";

const Clock = ({ currently, hourly, daily, requested, timezone }) => {
  return (
    <div className="clock">
      {requested ? (
        <>
          <p>
            {timezone} <img className="location" src={location} alt=""/>
          </p>
          <Currently currently={currently} />
          <Hourly hourly={hourly} />
          <hr />
          <Daily daily={daily} />
          <Comfort currently={currently} />
          <hr />
          <Wind currently={currently} />
        </>
      ) : (
        <>
          <img className="sunny" src={sunny} alt="" />
          <p className="click-the-sun">Loading</p>
        </>
      )}
    </div>
  );
};

export default Clock;
