import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Warning({ data }) {
  console.log(data);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Warning</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {data.alerts.alert.map(alert => (
            alert.length === 0
              ? "No Worning today"
              : <>
                <Typography id="modal-modal-title" variant="h4" component="h2">
                  {alert.event}
                </Typography>
                <Typography id="modal-modal-title" variant="h7" >
                  {`${alert.category} issued by ${alert.headline}`}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  {alert.desc}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 6 }}>
                  {`Effective from ${alert.effective} to ${alert.expires}`}
                </Typography>
              </>

          )
          )}

        </Box>
      </Modal>
    </div>
  );
}