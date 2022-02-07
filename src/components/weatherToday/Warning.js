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

export default function Warning({ data }) {
  // console.log(data);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {data.alerts.alert.length === 0
        ? <></>
        : <><Button size="small" color="warning" variant="contained" onClick={handleOpen}>Warning</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Paper style={{ padding: "10px", position: "relative" }} elevation={12} >
                {data.alerts.alert.map(alert => (
                  <>
                    <Typography variant="h6" color="text.primary" component="p">
                      Warning
                    </Typography>
                    <Typography variant="button" color="text.secondary" >
                      {alert.event}
                    </Typography>
                    <Typography variant="h6" color="text.primary" component="p" sx={{ mt: 2 }}>
                      Issued By
                    </Typography>
                    <Typography variant="h7" color="text.secondary" component="p">
                      {alert.headline}
                    </Typography>
                    <Typography variant="h6" color="text.primary" component="p" sx={{ mt: 2 }} >
                      Description
                    </Typography>
                    <Typography variant="h7" color="text.secondary" component="p" >
                      {alert.desc}
                    </Typography>
                    <Typography variant="h6" color="text.primary" component="p" sx={{ mt: 2 }}  >
                      Effective From
                    </Typography>
                    <Typography variant="h7" color="text.secondary" component="p">
                      {` ${alert.effective} to ${alert.expires}`}
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