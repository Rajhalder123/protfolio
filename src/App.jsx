
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import EmailSender from './components/EmailSender';
import Projects from './components/Projects';
import Footer from './components/Footer';




const App =()=> {
  return (
 <>
 <Navbar/>
 <Home/>

  <Skills/>
 <Experience/>

 <Projects/>
 
<EmailSender/>
<Contact/>
<Footer/>



 </>
  );
}

export default App;
