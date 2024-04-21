import { Box, Button } from "@mui/material";
import InputPadrao from "../../components/Input/inputPadrao";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscaEndereco } from "../../api/apiViaCeo";
import { salvarDadosUsuario } from "../../api/api";


export default function LoginDadosPessoaias() {
  const [mostra, setMostra] = useState(true)
  const login = localStorage.getItem("@Auth:user");

  const [cep, setCep] = useState("")
  const [rua, setRua] = useState("")
  const [numero, setNumero] = useState("")
  const [bairro, setBairro] = useState("")
  const [cidade, setCidade] = useState("")


    const [nome, setNome] = useState()
    const [cpf, setCpf] = useState()
    const [telefone, setTelefone] = useState()

    const navigate = useNavigate()



    const data = {
      dadosPessoais: {
        nome: nome,
        cpf: cpf,
        telefone: telefone
      },
      endereco: {
        cep: cep,
        logradouro: rua,
        numero: numero,
        bairro: bairro,
        cidade: cidade 
      }
    }



    useEffect(() => {
      buscaEndereco(cep)
        .then((data) => {
          console.log(data.data)
          setRua(data.data.logradouro)
          setBairro(data.data.bairro)
          setCidade(data.data.localidade+ " - "+data.data.uf)

        }).catch((err) => {
          console.log(err.message)
        })
    }, [cep])

    const handleSubmit = () => {
      setMostra(!mostra);
    }

    const handlerSalvar = async () => {
      await salvarDadosUsuario(data, login)
        .then((resp) => {
          console.log("adicionou")

          console.log(resp.data)
          navigate(0)
        }).catch((err) => {
          console.log("errou")
        })
    }


    return (
      <>
        {mostra ? 
          <Box
          component="form"
          sx={{
            maxWidth: '500px',
            margin: 'auto',
            padding: '20px',
            marginTop: '20%',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#d3d3d3',
          }}
        >
         
          <InputPadrao label={"Nome Completo"} setDado={setNome} dado={nome}/>
          <InputPadrao label={"CPF"} setDado={setCpf} dado={cpf}/>
          <InputPadrao label={"Telefone"} setDado={setTelefone} dado={telefone}/>
        
        
          
          
          <Button type="submit" variant="contained" color="primary"  sx={{ mt: 2 }} onClick={() => handleSubmit()}>
            Proximo
          </Button>
        
        
        </Box>
         :
         <Box
         component="form"
         sx={{
           maxWidth: '500px',
           margin: 'auto',
           padding: '20px',
           marginTop: '20%',
           borderRadius: '8px',
           boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
           backgroundColor: '#d3d3d3',
         }}
       >
        
         <InputPadrao label={"Cep"} setDado={setCep} />
         <InputPadrao label={"Rua"} setDado={setRua} dado={rua}/>
         <InputPadrao label={"Numero"} setDado={setNumero} dado={numero}/>
         <InputPadrao label={"Bairro"} setDado={setBairro} dado={bairro}/>
         <InputPadrao label={"Cidade"} setDado={setCidade} dado={cidade}/>
 
         
         <Button variant="contained" color="primary"  sx={{ mt: 2 }} onClick={handlerSalvar}>
           Salvar Informações
         </Button>
   
   
       </Box>
        }
      </>
      
    );
}