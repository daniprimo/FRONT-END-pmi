import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../components/home";
import { PrivateRoute } from "./privateRoutes";
import TelaLogin from "../page/telaLogin/login";
import LoginDadosPessoaias from "../page/telaLogin/dadoPessoais";


export default function Rotas() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<TelaLogin />}/>
                    <Route path="/dadosPessoais" element={<PrivateRoute />}>
                      <Route path="/dadosPessoais" element={<LoginDadosPessoaias />}/>
                    </Route>
                    <Route path="/Home" element={<PrivateRoute />}>
                      <Route path="/Home" element={<Home />}/>
                    </Route>
                </Routes>
            </Router>
        </>
    )
}