import { autenticacao } from "./api";



export const registrar = (data) => {
    const url = `/register`;
    return autenticacao.post(url, data);
}

export const logar = (data) => {
    const url = `/login`;
    return autenticacao.post(url, data);
}