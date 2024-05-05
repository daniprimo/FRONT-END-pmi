import { useTheme } from '@emotion/react';
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function MenuSimples(props) {
    const navigate = useNavigate();

    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

  return (
    <>
         <ListItem key={0} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                onClick={() => navigate(props.path)}

              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {props.icone}
                </ListItemIcon>
                <ListItemText primary={props.nome} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
    </>
    )
}
