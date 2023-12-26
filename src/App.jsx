import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from "./components/Footer"
import AboutSection from './components/AboutSection'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <Footer/>
    </>
  );
}

export default App;
