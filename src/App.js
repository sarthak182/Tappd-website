import './App.css';
import Footer from './components/footer';
import NavbarComponent from './components/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Integrated from './pages/integrated';

function App() {
  return (
    <div className="App">
    <NavbarComponent/>
    <Router>
    <Routes>
      <Route path="/" element={<Integrated />} />
    </Routes>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
