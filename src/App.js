import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductoPage from './pages/ProductoPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/producto' element={<ProductoPage />} />
      </Routes>
     
    </div>
  );
}

export default App;
