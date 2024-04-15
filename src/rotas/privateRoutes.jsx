import { useContext } from "react"
import { AuthContext } from "../context/auth"
import Home from "../components/home";
import { Navigate } from "react-router-dom";


export const PrivateRoute = () => {
    const {signed} = useContext(AuthContext);

    return signed ? <Home /> : <Navigate to={"/"}/>
}