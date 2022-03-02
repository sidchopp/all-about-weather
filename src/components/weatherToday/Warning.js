import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ReportIcon from '@mui/icons-material/Report';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CancelIcon from '@mui/icons-material/Cancel';

//Components
import useStyles from '../styles/UseStyles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  overflow: 'scroll',
  width: "350px",
  height: "550px",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 1,
};

export default function Warning({ data }) {
  // console.log(data);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Destructuring data to get ONLY alerts
  const { alerts: { alert } } = data;
  // console.log(alert);

  // To avoid duplicates in alert
  const uniqueAlert = new Set();
  const filteredAlert = alert.filter(el => {
    const duplicate = uniqueAlert.has(el.category);
    uniqueAlert.add(el.category);
    return !duplicate;
  });
  console.log(filteredAlert);

  return (
    <div>
      {filteredAlert.length === 0
        ? <></>
        : <>
          <IconButton variant="contained" onClick={handleOpen}>
            <ReportIcon fontSize='large' color="warning" />
          </IconButton>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Paper className={classes.card} style={{ padding: "10px", position: "relative" }} elevation={12} >
                {filteredAlert.map(alert => (
                  <>
                    <Grid key={alert.effective} container direction="row" justifyContent="space-between" alignItems="center" >
                      <Grid item >
                        <Typography variant="h6" component="p">
                          Warning
                        </Typography>
                      </Grid>
                      <Grid item >
                        <IconButton className={classes.darkColor} variant="contained" onClick={handleClose}>
                          <CancelIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                    <Typography variant="button"  >
                      {alert.event}
                    </Typography>
                    <Typography variant="h6" component="p" sx={{ mt: 2 }}>
                      Issued By
                    </Typography>
                    <Typography variant="h7" component="p">
                      {alert.headline}
                    </Typography>
                    <Typography variant="h6" component="p" sx={{ mt: 2 }} >
                      Description
                    </Typography>
                    <Typography variant="h7" component="p" >
                      {alert.desc}
                    </Typography>
                    <Typography variant="h6" component="p" sx={{ mt: 2 }}  >
                      Effective From
                    </Typography>
                    <Typography variant="h7" component="p">
                      {` 
                      ${new Date(alert.effective)}
                       to 
                       ${new Date(alert.expires)}
                       `}
                    </Typography>
                  </>
                )
                )}
              </Paper>
            </Box>
          </Modal>
        </>
      }
    </div>
  );
}