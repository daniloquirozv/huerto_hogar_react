import './App.css';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './router';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
