import { Button } from "@mui/material";
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/auth';
import { testarApi } from "../../api/api";
import ResponsiveAppBar from "../nav-bar";



export default function Home() {
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
        <ResponsiveAppBar />            
            </>)
}