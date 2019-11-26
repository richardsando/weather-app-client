import React from "react";
import moment from "moment";

const Time = () => {
  const time = new Date();
  return (
    <div className="time">
      <h3>{moment(time).format("MMMM Do YYYY, h:mm a")}</h3>
    </div>
  );
};

export default Time;
