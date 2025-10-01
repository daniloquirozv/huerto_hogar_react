import './App.css';
import Header from './components/header';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Container className="mt-4">
        <h1 className="text-center text-success mb-4">
          ¡Bienvenido a tu Huerto en Casa! 🌱
        </h1>
        <p className="text-center text-muted lead">
          Gestiona tus plantas de manera fácil y efectiva con nuestra aplicación.
        </p>
      </Container>
    </div>
  );
}

export default App;
