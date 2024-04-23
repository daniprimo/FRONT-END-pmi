import { useContext } from "react"
import { AuthContext } from "../context/auth"
import Home from "../components/home";
import { Navigate } from "react-router-dom";
import LoginDadosPessoaias from "../page/telaLogin/dadoPessoais";
import PersistentDrawerLeft from "../components/nav-bar/lateral";


export const PrivateRoute = () => {
    const {signed, primeiroAcesso} = useContext(AuthContext);
    if (primeiroAcesso) {
        return signed ? <LoginDadosPessoaias /> : <Navigate to={"/"}/>
    }else {
        return signed ? <Home /> : <Navigate to={"/"}/>
    }

}