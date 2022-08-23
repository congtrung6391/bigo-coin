import { Button, Divider, IconButton, InputBase, Modal, Paper, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import DirectionsIcon from '@mui/icons-material/Directions';
import { useState } from "react";

const InputCoin = ({ icon, onClickIcon }) => (
  <Paper
    component="form"
    sx={{
      p: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      borderRadius: 3,
      backgroundColor: 'rgba(184,192,255,0.5)',
    }}
  >
    <InputBase
      sx={{ ml: 1, flex: 1 }}
      placeholder="Trade coin"
    />
    <Divider sx={{ height: 30, mx: 0.5 }} orientation="vertical" />
    <IconButton color="primary" sx={{ p: '10px' }} aria-label="directions" onClick={onClickIcon}>
      <DirectionsIcon />
    </IconButton>
  </Paper>
);

const TradeBox = () => {

  const [openModal, setOpenModal] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: '#FFD6FF',
        p: 3,
        borderRadius: 5,
      }}
    >
      <Box sx={{ textAlign: 'center' }}>
        <Typography fontWeight="bold" variant="h6">
          Swap
        </Typography>
        <Typography>
          Trade tokens in an instant
        </Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ mb: 2 }}>
        <InputCoin onClickIcon={() => setOpenModal(true)} />
      </Box>
      <Box sx={{ mb: 2 }}>
        <InputCoin onClickIcon={() => setOpenModal(true)} />
      </Box>
      <Box>
        <Button variant="contained" fullWidth sx={{ backgroundColor: '#C8B6FF', borderRadius: 3 }}>Trade</Button>
      </Box>

      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Box>Select coin</Box>
      </Modal>
    </Box>
  );
};

export default TradeBox;
