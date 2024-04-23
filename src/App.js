import './App.css';
import { Container } from '@mui/material';
import { AuthProvider } from './context/auth';
import Rotas from './rotas/rotas';
import ResponsiveAppBar from './components/nav-bar';


function App() {
  return (
    <>
        <AuthProvider>
            <header id='header'>
          <Container maxWidth={"100%"}>
            <Rotas />
          </Container>
            </header>
        </AuthProvider>
    </>
  );
}

export default App;
