import './App.css';
import About from './components/About/about';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Intro from './components/Intro/intro';
import Navbar from './components/Navbar/navbar';
import Project from './components/Project/project';

import Services from './components/Services/services';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <Navbar/>
        <Intro/>
        <About/>
        <Services/>
        <Project/>
        <Contact/>
        <Footer/>
        
        

      </div>
    </>
  )
}

export default App
