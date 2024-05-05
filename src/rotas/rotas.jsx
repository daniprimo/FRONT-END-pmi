import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import TelaLogin from "../page/telaLogin/login";
import LoginDadosPessoaias from "../page/telaLogin/dadoPessoais";
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
                    <Route path="/Home" element={<PaginaHome />}>
                      <Route path="/Home" element={<PaginaHome />}/>
                    </Route>
                    <Route path="/Manual" element={<PaginaHome />}>
                      <Route path="/Manual" element={<PaginaHome />}/>
                    </Route>
                </Routes>
            </Router>
        </>
    )
}