import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from "./components/Footer"
import AboutSection from './components/AboutSection'
import AboutPage from './components/AboutPage'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <>
    
        <Navbar />
        <Routes>
              <Route index  element={<Home />} />
              <Route path="/about"  element={<AboutPage />} />
        </Routes>
        <Footer/>
    </>
  );
}

export default App;
