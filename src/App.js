import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Body/Home';
import About from './Components/Body/About';
import Work from './Components/Body/Work';
import Contact from './Components/Body/Contact';
import Footer from './Components/Body/Footer';
import Darkmode from './Components/Body/Darkmode';

function App() {
  const contentStyle={
    marginLeft: '7rem'
  };
  return (
    <>
    
    <Navbar/>
    <Darkmode/>
    
    
    <div style={contentStyle}>
      <div>
      <Home/>
      </div>
      <div>
      <About/>
      </div>
      <div>
      <Work/>
      </div>
      <div>
      <Contact/>
      </div>
      <footer>
      <Footer/>
      </footer>
    </div>

    
    </>
  );
}

export default App;
