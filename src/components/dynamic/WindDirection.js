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
  // console.log(data.current.wind_degree);

  if (data.current.wind_degree > 0 && data.current.wind_degree < 90 && data.current.wind_degree) {
    return <BsFillArrowUpRightCircleFill />;
  } else if (data.current.wind_degree > 90 && data.current.wind_degree < 180 && data.current.wind_degree) {
    return <BsFillArrowUpLeftCircleFill />;
  } else if (data.current.wind_degree > 180 && data.current.wind_degree < 270 && data.current.wind_degree) {
    return <BsFillArrowDownLeftCircleFill />;
  } else if (data.current.wind_degree > 270 && data.current.wind_degree < 360 && data.current.wind_degree) {
    return <BsFillArrowDownRightCircleFill />;
  } else if (data.current.wind_degree === 0 && data.current.wind_degree) {
    return <BsFillArrowRightCircleFill />;
  } else if (data.current.wind_degree === 90 && data.current.wind_degree) {
    return <BsFillArrowUpCircleFill />;
  } else if (data.current.wind_degree === 180 && data.current.wind_degree) {
    return <BsFillArrowLeftCircleFill />;
  } else if (data.current.wind_degree === 270 && data.current.wind_degree) {
    return <BsFillArrowDownCircleFill />;
  } else {
    return <BsWind />

  }
};

export default WindDirection;
