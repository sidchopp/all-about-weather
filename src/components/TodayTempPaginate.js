import { useState, useEffect } from "react";
import paginate from "./paginate";
import { styled } from '@mui/material/styles';

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
  paginate(hour);
  //state
  const [slide, setSlide] = useState(0);
  const [temperatures, setTemperatures] = useState([]);
  console.log(slide);

  useEffect(() => {
    setTemperatures(paginate(hour)[slide])
  }, [])
  console.log(slide);

  return (
    <div className='paginate-rows'>
      {temperatures.map(value => {
        return (
          <div key={value.time_epoch} className='temp-paginate-card' >
            <div>
              <Img src={value.condition.icon} />
            </div>
            <div >
              {value.time.slice(11, 16)}
              <div>
                {value.temp_c} °C
              </div>
            </div>
          </div>
        )
      }
      )}
    </div>
  )
}

export default TodayTempPaginate;