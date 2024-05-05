import { Card, CardActionArea, CardContent, Stack, Typography } from "@mui/material";
import AutoAwesomeMotionSharpIcon from '@mui/icons-material/AutoAwesomeMotionSharp';


export default function Resumo() {
    return (
        <>
            
    <Stack 
        spacing={2}
        direction="row"
        sx={{marginBottom: 2, marginTop: 2}}
        >

            <Card sx={{ 
                maxWidth: 49 + "%",
                height: 160,
                minWidth: 180,
                background: "rgb(40,34,70)",
                background: "linear-gradient(158deg, rgb(40,34,70, 1) 0%, rgb(30,47,141, 1) 100%)" }}>
            <CardActionArea>
                <CardContent>
                     <div>
                        <AutoAwesomeMotionSharpIcon sx={{color: "#ccd1d1"}} />
                    </div>
                <Typography gutterBottom variant="h5" component="div" sx={{color: "#ccd1d1"}}>               
                    6
                </Typography>
                <Typography
                    gutterBottom
                    variant="body2"
                    component={"div"}
                    sx={{color: "#ccd1d1"}}>
                    Total de OS.
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>

            <Card sx={{ 
                maxWidth: 49 + "%",
                height: 160,
                minWidth: 180,
                background: "rgb(53,138,148)",
                background: "linear-gradient(to bottom, #cc0066 0%, #ff9933 100%)" }}>
            <CardActionArea>
                <CardContent>
                     <div>
                        <AutoAwesomeMotionSharpIcon sx={{color: "#ccd1d1"}}/>
                    </div>
                <Typography gutterBottom variant="h5" component="div" sx={{color: "#ccd1d1"}}>               
                    30.2%
                </Typography>
                <Typography
                    gutterBottom
                    variant="body2"
                    component={"div"}
                    sx={{color: "#ccd1d1"}}>
                    OS em andamento.
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>


            <Card sx={{ 
                maxWidth: 49 + "%",
                height: 160,
                minWidth: 180,
                background: "rgb(53,138,148)",
                background: "linear-gradient(to bottom, #666633 0%, #66ff66 100%)" }}>
            <CardActionArea>
                <CardContent>
                     <div>
                        <AutoAwesomeMotionSharpIcon sx={{color: "#ccd1d1"}}/>
                    </div>
                <Typography gutterBottom variant="h5" component="div" sx={{color: "#ccd1d1"}}>               
                    19.8%
                </Typography>
                <Typography
                    gutterBottom
                    variant="body2"
                    component={"div"}
                    sx={{color: "#ccd1d1"}}>
                    OS não iniciado.
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>


            <Card sx={{ 
                maxWidth: 49 + "%",
                height: 160,
                minWidth: 180,
                background: "rgb(53,138,148)",
                background: "linear-gradient(to bottom, #660066 0%, #ff99ff 100%)" }}>
            <CardActionArea>
                <CardContent>
                     <div>
                        <AutoAwesomeMotionSharpIcon sx={{color: "#ccd1d1"}}/>
                    </div>
                <Typography gutterBottom variant="h5" component="div" sx={{color: "#ccd1d1"}}>               
                    50.0%
                </Typography>
                <Typography
                    gutterBottom
                    variant="body2"
                    component={"div"}
                    sx={{color: "#ccd1d1"}}>
                    OS concluida.
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>


            <Card sx={{ 
                maxWidth: 49 + "%",
                height: 160,
                minWidth: 180,
                background: "rgb(53,138,148)",
                background: "linear-gradient(to bottom, #ffcc99 0%, #660033 100%)" }}>
            <CardActionArea>
                <CardContent>
                     <div>
                        <AutoAwesomeMotionSharpIcon sx={{color: "#ccd1d1"}}/>
                    </div>
                <Typography gutterBottom variant="h5" component="div" sx={{color: "#ccd1d1"}}>               
                    1
                </Typography>
                <Typography
                    gutterBottom
                    variant="body2"
                    component={"div"}
                    sx={{color: "#ccd1d1"}}>
                    OS Liberadas para uat.
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>


            <Card sx={{ 
                maxWidth: 49 + "%",
                height: 160,
                minWidth: 180,
                background: "rgb(53,138,148)",
                background: "linear-gradient(to bottom, #003300 0%, #ffffff 100%)" }}>
            <CardActionArea>
                <CardContent>
                     <div>
                        <AutoAwesomeMotionSharpIcon sx={{color: "#ccd1d1"}}/>
                    </div>
                <Typography gutterBottom variant="h5" component="div" sx={{color: "#ccd1d1"}}>               
                    2
                </Typography>
                <Typography
                    gutterBottom
                    variant="body2"
                    component={"div"}
                    sx={{color: "#ccd1d1"}}>
                    OS Entregues.
                </Typography>
                </CardContent>
            </CardActionArea>
            </Card>

            </Stack>

        </>
    )
}