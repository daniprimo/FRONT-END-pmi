import { createContext, useEffect, useState } from "react";
import { autenticacao, buscarUsuario } from "../api/api";
import { Navigate } from "react-router-dom";


export const AuthContext = createContext();


export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [primeiroAcesso, setPrimeiroAcesso] = useState();
    
    useEffect(() => {
        const loadingStoreData = async () => {
            const storageUser = localStorage.getItem("@Auth:user");
            const storageToken = localStorage.getItem("@Auth:token");
            if (storageToken && storageUser) {
                setUser(storageUser)
            }
        }
        loadingStoreData()
    }, [])

    const singOut = () => {
        localStorage.clear();
        setUser(null);
        return <Navigate to="/" />;
    };

    const SignIn = async (data) => {
        let errou = false;
        const response = await autenticacao.post("/autenticar/login", data).then((resp) => {return resp}).catch((err)=> {
            errou = true;
            return err;
        });
        if (errou) {
            alert(response.message)
        } else {
            setUser(response.data);
            autenticacao.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${response.data.token}`;
            localStorage.setItem("@Auth:token", response.data.token);
            localStorage.setItem("@Auth:refreshToken", response.data.refreshToken);
            const usuario = await buscarUsuario(data.login).then((resp) => {return resp.data})
                console.log(usuario.primeiroAcesso)
                setPrimeiroAcesso(usuario.primeiroAcesso)
            localStorage.setItem("@Auth:user", usuario.login);

        }
    }

    const RefrshIn = async (data) => {
        let errou = false;
        await autenticacao.post("/autenticar/refreshToken", data).then((resp) => {
            localStorage.setItem("@Auth:token", resp.data.token);
            autenticacao.defaults.headers.common[   
                "Authorization"
            ] = `Bearer ${resp.data.token}`;
            return resp
        }).catch((err)=> {

            errou = true;
            return err;
        });

        if (errou) {
            singOut()
        } 
    }

    return (
        <AuthContext.Provider value={{
            user, 
            signed: !!user,
            primeiroAcesso,
            setPrimeiroAcesso,
            singOut, 
            RefrshIn,
            SignIn,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

