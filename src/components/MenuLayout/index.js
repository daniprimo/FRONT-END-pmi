import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/auth';
import { testarApi } from "../../api/api";
import Box from '@mui/material/Box';
import MenuLateral from '../nav-bar/lateral';



export default function Layout({children}) {
    const [reload, setReload] = useState(true);
    const {singOut, RefrshIn} = useContext(AuthContext)
    const refreshToken = localStorage.getItem("@Auth:refreshToken");

    const repet = () => {
        setReload(!reload)
      }

    const handlerLogout = () => {
        singOut();
    }

    const data = {
        regreshToken: refreshToken
    }

    useEffect(() => {
        testarApi().then(() => {}).catch(() => {
            RefrshIn(data)
        })
    }, [reload])
    setTimeout(repet, 2000)
    return (<>
        <Box sx={{ display: 'flex' }}>
            <MenuLateral />
            <div style={{marginTop: '5vh'}}>
                <h2>dsdsd</h2>
                {children}
            </div>
        </Box>                
    </>)
}