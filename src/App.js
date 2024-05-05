import './App.css';
import { Box, CircularProgress, Container, Modal } from '@mui/material';
import { AuthProvider } from './context/auth';
import Rotas from './rotas/rotas';
import React, { useEffect } from 'react';
import { testarApi } from './api/api';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function App() {

  const [reload, setReload] = React.useState(true);

  const [open, setOpen] = React.useState(true);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const repet = () => {
    setReload(!reload)
  }
  
useEffect(() => {
    testarApi().then(() => {handleClose()}).catch(() => {
      handleOpen()
    })
}, [reload])
setTimeout(repet, 2000000)


  return (
    <>
        <AuthProvider>
            <header id='header'>
          <Container maxWidth={"100%"}>
            <Rotas />
          </Container>
            </header>
        </AuthProvider>


        <Modal
        open={open}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: '15%' }}>
            <CircularProgress /> CarregandoAPI....
        </Box>
      </Modal>
    </>
  );
}

export default App;
