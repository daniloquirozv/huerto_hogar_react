import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistroScreen from './pages/RegistroScreen';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/registro" element={<RegistroScreen />} />
          

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
