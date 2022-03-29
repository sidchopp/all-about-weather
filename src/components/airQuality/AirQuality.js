import * as React from 'react';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import MasksIcon from '@mui/icons-material/Masks';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import CancelIcon from '@mui/icons-material/Cancel';

const AirQuality = ({ data }) => {
  // console.log(data);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div >
      <IconButton color="info" variant="contained" onClick={handleOpen}>
        <MasksIcon fontSize='large' />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Card variant="outlined" className='air-quality-card'>
          <div className='modal'>
            <Grid container direction="row" justifyContent="space-between" alignItems="center" >
              <Grid item >
                <Typography variant="h6" component="p">
                  <span className='font'>Air Quality</span>
                </Typography>
              </Grid>
              <Grid item >
                <IconButton variant="contained" onClick={handleClose}>
                  <CancelIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Typography variant="h7" component="p" >
              <div >
                <div className='air-quality'>
                  Carbon Monoxide: {Math.round(data.current.air_quality.co).toFixed(2)}
                </div>
                <div className='air-quality'>
                  Nitrogen Dioxide: {(data.current.air_quality.no2).toFixed(2)}</div>
                <div className='air-quality'>
                  Ground Level Ozone Pollution: {(data.current.air_quality.o3.toFixed(2))}
                </div>
                <div className='air-quality'>
                  Fine particulate matter (PM2.5): {(data.current.air_quality.pm2_5.toFixed(2))}
                </div>
                <div className='air-quality'>
                  Particulate Matter (PM10): {(data.current.air_quality.pm10.toFixed(2))}
                </div>
                <div className='air-quality'>
                  Sulphur Dioxide: {(data.current.air_quality.so2.toFixed(2))}
                </div>
              </div>
            </Typography>
          </div>
        </Card>
      </Modal>
    </div>
  );
};

export default AirQuality;
