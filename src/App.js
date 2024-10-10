import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Upload from './pages/Upload/Upload';
import DocumentEditor from './pages/DocumentEditor/DocumentEditor'; // Import the new component
import Navbar from './global/components/Navbar/Navbar';
import Footer from './global/components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/editor" element={<DocumentEditor />} /> {/* Add the new route */}
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
