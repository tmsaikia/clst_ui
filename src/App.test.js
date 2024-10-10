import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Upload from './pages/Upload/Upload';
import Navbar from './global/components/Navbar/Navbar'
import Footer from './global/components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>

        <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/upload" element={<Upload />} />
            </Routes>

        <Footer />

    </BrowserRouter>
  );
}

export default App;
