import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
