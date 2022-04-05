import { useState, useEffect } from "react";
import paginate from "./paginate";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const TodayTempPaginate = ({ data }) => {
  const { forecast: { forecastday } } = data;
  const [today] = forecastday;
  const { hour } = today;
  // console.log(hour);
  // paginate(hour);
  //state
  const [slide, setSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(paginate(hour))
  const [temperatures, setTemperatures] = useState([]);
  // console.log(totalSlides);

  useEffect(() => {
    setTemperatures(paginate(hour)[slide])
  }, [slide, hour]);

  const handleSlides = (index) => {
    setSlide(index)
  }

  return (
    <>
      <div className='paginate-rows'>
        {temperatures.map(value => {
          return (
            <div key={value.time_epoch} className='temp-paginate-card' >
              <div>
                <Img src={value.condition.icon} />
              </div>
              <div style={{ textAlign: 'center', fontSize: '0.7rem' }} >
                {value.time.slice(11, 16)}
                <div style={{ fontSize: "1rem" }}  >
                  {Math.round(value.temp_c)}
                  <span style={{ textAlign: 'center', fontSize: '0.5rem' }}>°C</span>
                </div>
              </div>
            </div>
          )
        }
        )}
      </div>
      <div style={{ margin: '5px', textAlign: 'center' }}>
        {totalSlides.map((item, index) => {
          return (
            <button
              key={index}
              className={` page-btn ${index === slide ? "active-btn" : null}`}
              onClick={() => handleSlides(index)}
            >{index + 1}</button>)
        })}
      </div>
    </>
  )
}

export default TodayTempPaginate;