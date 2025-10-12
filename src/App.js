import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistroScreen from './pages/RegistroScreen';
import PrincipalPage from './pages/principalPage';
import Header from './components/layout/header';
import Footer from './components/layout/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PrincipalPage />} />
          <Route path="/registro" element={<RegistroScreen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
