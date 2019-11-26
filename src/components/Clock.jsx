import React from "react";

//components
import Currently from "./Currently";
import Hourly from "./Hourly";
import Daily from "./Daily";
import Comfort from "./Comfort";
import Wind from "./Wind";
import Moon from "./Moon";

//icons
import sunny from "../images/icons/sunny.svg";
import location from "../images/icons/location.svg";

const Clock = ({ currently, hourly, daily, requested, timezone }) => {
  return (
    <div className="clock">
      {requested ? (
        <>
          <div className="location-wrapper">
            {timezone} {"  "}
            <img className="location" src={location} alt="" />
          </div>
          <Currently currently={currently} daily={daily} />
          <Hourly hourly={hourly} />
          <hr />
          <Daily daily={daily} />
          <Comfort currently={currently} />
          <hr />
          <Wind currently={currently} />
          <hr />
          <Moon daily={daily} />
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
