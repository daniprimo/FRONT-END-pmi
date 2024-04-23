import { TextField } from "@mui/material";
import { purple } from "@mui/material/colors";


export default function InputPadrao({label, setDado, dado}) {
   
    return (
        <>
                  <TextField
                     fullWidth
                     value={dado}
                     label={label}
                     variant="standard"
                     style={{backgroundColor: 'transparent', font: "white"}}
                     sx={{ mt: 2 }}
                     margin="normal"
                     color="primary"
                     onChange={(e) => setDado(e.target.value)}
                  />
        </>
    )
}