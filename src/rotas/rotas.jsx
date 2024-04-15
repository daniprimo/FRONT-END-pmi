import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../components/home";
import { PrivateRoute } from "./privateRoutes";
import TelaLogin from "../page/telaLogin/login";


export default function Rotas() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<TelaLogin />}/>
                    <Route path="/Home" element={<PrivateRoute />}>
                      <Route path="/Home" element={<Home />}/>
                    </Route>
                </Routes>
            </Router>
        </>
    )
}