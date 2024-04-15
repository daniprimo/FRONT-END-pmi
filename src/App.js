import './App.css';
import { Container } from '@mui/material';
import { AuthProvider } from './context/auth';
import Rotas from './rotas/rotas';

function App() {
  return (
    <AuthProvider>
        <header id='header'>
    <Container>
        <Rotas />
      </Container>
        </header>
    </AuthProvider>
  );
}

export default App;
