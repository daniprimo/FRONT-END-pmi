import React from 'react'
import Box from '@mui/material/Box';
import MenuLateral from '../nav-bar/lateral';

export default function Projeto() {
  return (
    <>
        <Box sx={{ display: 'flex' }}>
            <MenuLateral />
            <div style={{marginTop: '30px'}}>
                <h1>criar projeto</h1>
            </div>

        </Box>     
    
    </>
  )
}
