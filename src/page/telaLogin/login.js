import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import logo from '../../fotos/logo-pmi-removebg-preview.png'
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [login, setLogin] = useState()
  const [senha, setSenha] = useState()
  const {SignIn, signed} = useContext(AuthContext)

  const data = {
    login: login,
    password: senha
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    e.preventDefault()
    await SignIn(data);
  };

  if (signed) {
    return <Navigate to={"/Home"}/>
  }else {


  return (
    <Box
      component="form"
      onSubmit={(e) => handleSubmit(onSubmit(e))}
      sx={{
        maxWidth: '500px',
        margin: 'auto',
        padding: '20px',
        marginTop: '20%',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#404040',
      }}
    >
      <Typography variant="h5" component="div" sx={{ mb: 2, textAlign: 'center',  color: 'white' }}>
        <img alt='logo da pm' src={logo}/>
      </Typography>

   

      <TextField
        fullWidth
        label="Login"
        {...register('username', {
          required: 'Login errado',
          minLength: {
            value: 5,
            message: 'Login deve conter mais 5 digitos',
          },
        })}
        error={Boolean(errors.username)}
        onChange={(e) => setLogin(e.target.value)}
        helperText={errors.username?.message}
        style={{backgroundColor: 'white', fontSize: 20}}
      />
      
      <TextField
        fullWidth
        type="password"
        label="Senha"
        {...register('password', {
          required: 'Login ou senha incorreto.',
          minLength: {
            value: 6,
            message: 'Senha deve conter mais de 6 digitos'
          },
        })}
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
        onChange={(e) => setSenha(e.target.value)}
        margin="normal"
        sx={{ mt: 2 }}
        style={{backgroundColor: 'white'}}
      />
      
      
      <FormControlLabel
        control={<Checkbox {...register('rememberMe')} color="primary" />}
        label="Lembre-me"
        sx={{ mt: 1, textAlign: 'left' }}
        style={{color: 'white'}}
      />
      
      
      
      <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
        Login
      </Button>


      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Link href="#" variant="body2">
          Esqueceu a senha?
        </Link>
      </Box>
    </Box>
  );
};
}

export default Login;