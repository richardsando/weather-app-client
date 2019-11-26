import React from 'react';

const Temperature = props => {
  const temp = props.temp;
  return <p>The current temperature is {temp}</p>;
};

export default Temperature;
