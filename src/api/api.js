import axios from "axios";

const meuToken = localStorage.getItem("@Auth:token");


export const autenticacao = axios.create({
    baseURL: 'http://localhost:8080',
    headers: { authorization: `Bearer ${meuToken}`}

});

export const getAxios = (token) => {
    return axios.create({
        baseURL: "http://localhost:8080",
        headers: { authorization: `Bearer ${token}`}
    });
};

const getAutenticacao = (token) => {
    return axios.create({
        baseURL: "http://localhost:8080",
        headers: { authorization: `Bearer ${token}`}
    });
}


export function refreshTokenBB(){
    const cookies = localStorage.getItem("@Auth:token");
    const api = getAutenticacao(cookies);
    return api;  

}


export const buscarUsuario = (login) => {
    const url = `/usuario/buscarUsuario/${login}`;
    return refreshTokenBB().get(url);
};

export const testarApi = () => {
    const url = `/teste-api`;
    return refreshTokenBB().get(url);
};





    

    

    

    
