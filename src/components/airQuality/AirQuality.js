import * as React from 'react';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import MasksIcon from '@mui/icons-material/Masks';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import CancelIcon from '@mui/icons-material/Cancel';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // overflow: 'scroll',
  width: "350px",
  // height: "550px",


};

export default function AirQuality({ data }) {
  // console.log(data);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div >
      <IconButton color="info" variant="contained" onClick={handleOpen}>
        <MasksIcon fontSize='large' />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Card variant="outlined" sx={style}>
          <div className='modal'>
            <Grid container direction="row" justifyContent="space-between" alignItems="center" >
              <Grid item >
                <Typography variant="h6" component="p">
                  Air Quality
                </Typography>
              </Grid>
              <Grid item >
                <IconButton variant="contained" onClick={handleClose}>
                  <CancelIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Typography variant="h7" component="p" sx={{ mt: 2 }} >
              Carbon Monoxide: {Math.round(data.current.air_quality.co).toFixed(2)}
            </Typography>
            <Typography variant="h7" component="p" sx={{ mt: 2 }}>
              Nitrogen Dioxide: {(data.current.air_quality.no2).toFixed(2)}
            </Typography>
            <Typography variant="h7" component="p" sx={{ mt: 2 }}>
              Ground Level Ozone Pollution: {(data.current.air_quality.o3.toFixed(2))}
            </Typography>
            <Typography variant="h7" component="p" sx={{ mt: 2 }} >
              Fine particulate matter (PM2.5): {(data.current.air_quality.pm2_5.toFixed(2))}
            </Typography>
            <Typography variant="h7" component="p" sx={{ mt: 2 }}  >
              Particulate Matter (PM10): {(data.current.air_quality.pm10.toFixed(2))}
            </Typography>
            <Typography variant="h7" component="p" sx={{ mt: 2 }}>
              Sulphur Dioxide: {(data.current.air_quality.so2.toFixed(2))}
            </Typography>
          </div>
        </Card>
      </Modal>
    </div>
  );
}
