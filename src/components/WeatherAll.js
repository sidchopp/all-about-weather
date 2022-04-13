import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

//Components
import { useGlobalContext } from './Context';
import WeatherForecast from './WeatherForecast';
import WeatherToday from './WeatherToday';
import Loader from './Loader';
import WeatherTodayDetails from './WeatherTodayDetails';
import WeatherYesterday from './WeatherYesterday'
import ChartTodayTemp from './charts/ChartTodayTemp';
// import BackgroundImage from '../dynamic/BackgroundImage';

// const styles = {
//   paperContainer: {
//     backgroundImage: `url(${BackgroundImage()})`,
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//     backgroundPosition: 'center',
//     padding: "5px"
//   }
// };

function WeatherAll() {
  const { loading, data, dataYesterday } = useGlobalContext();

  // if data is not fetched,show loader
  if (loading) {
    return (
      <Loader />
    )
  }
  return (
    <>
      {(Object.keys(data).length !== 0 && Object.keys(dataYesterday).length !== 0)
        ? <>
          <div>
            <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={4} lg={4}>
                  <WeatherToday data={data} />
                </Grid>
                <Grid item xs={12} md={8} lg={8}>
                  <WeatherTodayDetails data={data} />
                </Grid>
              </Grid>
            </Container>
            <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
              <ChartTodayTemp />
            </Container>
            <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
              <WeatherForecast />
            </Container>
            <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
              <WeatherYesterday />
            </Container>
          </div>
        </>
        : <div></div>
      }
    </>
  )
}

export default WeatherAll;
