import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  overflow: 'scroll',
  width: "370px",
  height: "550px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 1,
};

export default function AirQuality({ data }) {
  // console.log(data);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <><Button size="small" color="primary" variant="contained" onClick={handleOpen}>Air Quality</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/* <Paper style={{ padding: "10px", position: "relative" }} elevation={12} > */}

            <>
              <Typography variant="h6" color="text.primary" component="p">
                Air Quality
              </Typography>
              <Typography variant="h7" color="text.secondary" component="p" sx={{ mt: 2 }} >
                Carbon Monoxide: {data.current.air_quality.co}
              </Typography>
              <Typography variant="h7" color="text.secondary" component="p" sx={{ mt: 2 }}>
                Nitrogen Dioxide: {(data.current.air_quality.no2).toFixed(2)}
              </Typography>
              <Typography variant="h7" color="text.secondary" component="p" sx={{ mt: 2 }}>
                Ground Level Ozone Pollution: {(data.current.air_quality.o3.toFixed(2))}
              </Typography>
              <Typography variant="h7" color="text.secondary" component="p" sx={{ mt: 2 }} >
                Fine particulate matter (PM2.5): {(data.current.air_quality.pm2_5.toFixed(2))}
              </Typography>
              <Typography variant="h7" color="text.secondary" component="p" sx={{ mt: 2 }}  >
                Particulate Matter (PM10): {(data.current.air_quality.pm10.toFixed(2))}
              </Typography>
              <Typography variant="h7" color="text.secondary" component="p" sx={{ mt: 2 }}>
                Sulphur Dioxide: {(data.current.air_quality.so2.toFixed(2))}
              </Typography>
            </>
            {/* </Paper> */}
          </Box>
        </Modal>
      </>

    </div>
  );
}
