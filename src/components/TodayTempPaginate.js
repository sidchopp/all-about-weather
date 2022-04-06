import { useState, useEffect } from "react";
import paginate from "./paginate";
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

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

  const nextPage = () => {
    setSlide((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > totalSlides.length - 1) {
        nextPage = 0
      }
      return nextPage
    })
  }
  const prevPage = () => {
    setSlide((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = totalSlides.length - 1
      }
      return prevPage
    })
  }

  return (
    <>
      <div className='paginate-rows'>
        {temperatures.map(value => {
          return (
            <div key={value.time_epoch} className='temp-paginate-card font' >
              <div style={{ fontSize: '0.8rem' }} >
                {value.time.slice(11, 16)}
              </div>
              <div style={{ textAlign: 'center' }}>
                <Img src={value.condition.icon} />
              </div>
              <div style={{ fontSize: '1.2rem' }}  >
                {Math.round(value.temp_c)}
                <span >°C</span>
              </div>
            </div>
          )
        }
        )}
      </div>
      <div className="btn-container ">
        <IconButton size="small" onClick={prevPage} className="prev-btn"><ArrowLeftIcon /></IconButton>
        {totalSlides.map((item, index) => {
          return (
            <button
              key={index}
              className={` page-btn ${index === slide ? "active-btn" : null}`}
              onClick={() => handleSlides(index)}
            >{index + 1}</button>)
        })}
        <IconButton size="small" onClick={nextPage} className="next-btn"><ArrowRightIcon /></IconButton>
      </div>
    </>
  )
}

export default TodayTempPaginate;