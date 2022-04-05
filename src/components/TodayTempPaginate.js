import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
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
  console.log(hour);
  paginate(hour)

  return (
    <div className='paginate-rows'>
      {hour.map(value => {
        return (
          <div className='temp-paginate-card' >
            {/* <Grid direction='column' container spacing={1} > */}

            <div>
              <Img src={value.condition.icon} />
            </div>

            <div >
              {value.time.slice(11, 16)}
              <div>
                {value.temp_c} °C


              </div>
            </div>


            {/* </Grid> */}
          </div>
        )
      }
      )}


    </div>
  )
}

export default TodayTempPaginate;