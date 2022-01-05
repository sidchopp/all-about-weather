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
      <Button size="small" color="warning" variant="contained" onClick={handleOpen}>Warning</Button>
      <Modal
        open={open}
        onClose={handleClose}
      // aria-labelledby="modal-modal-title"
      // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {data.alerts.alert.map(alert => (
            alert.length === 0
              ? "No Warning today"
              : <>
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

        </Box>
      </Modal>
    </div>
  );
}