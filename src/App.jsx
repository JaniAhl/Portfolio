import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css'
import { faPhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { BrowserRouter } from 'react-router-dom'
import { Link } from 'react-scroll'
import Profile from './components/profile'
import Navbar from './components/navbar'
import About from './components/about'
import Contact from './components/contact'
import Projects from './components/projects'

const App = () => {
  return (
    <div className='flex h-screen font-sans overflow-auto'  >

      {/* Vasemman puolen navigointi ja ikonit */}
      < div className='flex flex-col w-3/5 items-start h-full space-y-8 bg-seaGreen' >
        <Profile />
      </div >

      {/* Oikean puolen sisältö */}
      < div className='flex flex-col w-2/5 items-center h-full p-3 overflow-y-auto pb-6 scroll-smooth bg-softCream' >

        <Navbar />
        <About />
        <Projects />
        <Contact />

      </div >

    </div >
  );
};

export default App;
