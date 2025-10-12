import './App.css';
import Header from './components/layout/header';
import Footer from './components/layout/footer';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './router';
import ScrollToTop from './components/ui/scrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
