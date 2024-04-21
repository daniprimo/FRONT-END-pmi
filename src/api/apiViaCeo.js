import axios from "axios";

export const endereco = axios.create({
    baseURL: 'https://viacep.com.br/ws'
});

export const buscaEndereco = (cep) => {
    const url = `/${cep}/json/`;
    return endereco.get(url);
};