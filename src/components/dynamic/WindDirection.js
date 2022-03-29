import React from 'react';
import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
  BsFillArrowUpLeftCircleFill,
  BsFillArrowUpRightCircleFill,
  BsFillArrowDownLeftCircleFill,
  BsFillArrowDownRightCircleFill,
  BsWind
} from "react-icons/bs";


function WindDirection({ data }) {
  const { current: { wind_degree: windAngle } } = data;

  if (windAngle > 0 && windAngle < 90 && windAngle) {
    return <BsFillArrowUpRightCircleFill />;
  } else if (windAngle > 90 && windAngle < 180 && windAngle) {
    return <BsFillArrowUpLeftCircleFill />;
  } else if (windAngle > 180 && windAngle < 270 && windAngle) {
    return <BsFillArrowDownLeftCircleFill />;
  } else if (windAngle > 270 && windAngle < 360 && windAngle) {
    return <BsFillArrowDownRightCircleFill />;
  } else if ((windAngle === 0 || windAngle === 360) && windAngle) {
    return <BsFillArrowRightCircleFill />;
  } else if (windAngle === 90 && windAngle) {
    return <BsFillArrowUpCircleFill />;
  } else if (windAngle === 180 && windAngle) {
    return <BsFillArrowLeftCircleFill />;
  } else if (windAngle === 270 && windAngle) {
    return <BsFillArrowDownCircleFill />;
  } else {
    return <BsWind />
  }
};

export default WindDirection;
