import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegistroScreen from './pages/RegistroScreen';
import Header from './components/layout/header';



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
