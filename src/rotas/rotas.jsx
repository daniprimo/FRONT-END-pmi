import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../components/home";
import { PrivateRoute } from "./privateRoutes";
import TelaLogin from "../page/telaLogin/login";
import LoginDadosPessoaias from "../page/telaLogin/dadoPessoais";
import Projeto from "../components/CriarProjeto";
import PaginaHome from "../page/Home";


export default function Rotas() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<TelaLogin />}/>
                    <Route path="/dadosPessoais" element={<LoginDadosPessoaias />}>
                      <Route path="/dadosPessoais" element={<LoginDadosPessoaias />}/>
                    </Route>
                    <Route path="/Home" element={<Home />}>
                      <Route path="/Home" element={<Home />}/>
                    </Route>
                    <Route path="/Manual" element={<PaginaHome />}>
                      <Route path="/Manual" element={<PaginaHome />}/>
                    </Route>
                </Routes>
            </Router>
        </>
    )
}