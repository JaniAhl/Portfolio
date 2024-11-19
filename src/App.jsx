import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css'
import { faPhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const App = () => {
  return (
    <div className='flex h-screen font-sans overflow-hidden'>

      {/* Vasemman puolen navigointi ja ikonit */}
      <div className='flex flex-col w-3/5 items-start p-4 space-y-8 mt-8'>

        {/* Profile picture*/}
        <div className='flex flex-row'>

          <section className=''>
            <img src='https://media.licdn.com/dms/image/v2/D4D03AQFKA9fxrr6SQQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702479394656?e=1737590400&v=beta&t=zmybI2C3iX13KSxLDVe3e_THt3Z2D66Pmbxekdh_gPY'
              alt='LinkedIn pfp'
              className='rounded-full  w-48 h-48 object-cover border-seaGreen w-32 h-32 object-cover border-2 border-softCream'
            />
          </section>

          {/* Info */}

          <section className='text-left ml-4 mt-4 font-semibold'>
            <p className='text-softCream inline'>Jani Ahlstedt</p>
            <p className='text-softCream'>Espoo, Suomi</p>
            <p className='text-softCream'>jani.ahlstedt@outlook.com</p>

            {/* Icons */}

            <section className='space-x-4 mt-4 flex-end'>
              <a href='https://www.github.com/JaniAhl' target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faSquareGithub} className='text-softCream text-3xl hover:text-softCream' />
              </a>
              <a href="https://www.linkedin.com/in/jani-ahlstedt-4490a82a5/" target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faLinkedin} className='text-softCream text-3xl hover:text-softCream' />
              </a>
              <a>
                <FontAwesomeIcon icon={faSquareEnvelope} className='text-softCream text-3xl hover:text-softCream' />
              </a>
            </section>

          </section>

        </div>

      </div>

      {/* Oikean puolen sisältö */}
      <div className='flex flex-col w-2/5 items-center mt-2 p-4 overflow-y-scroll mt-8'>

        {/* Navbar */}
        <section className='space-x-4 flex flex-row'>
          <button className='w-full border-2 rounded-xl p-2 bg-softCream border-seaGreen text-seaGreen hover:bg-seaGreen hover:text-softCream'>About</button>
          <button className='w-full border-2 rounded-xl p-2 bg-softCream border-seaGreen text-seaGreen hover:bg-seaGreen hover:text-softCream'>Projects</button>
          <button className='w-full border-2 rounded-xl p-2 bg-softCream border-seaGreen text-seaGreen hover:bg-seaGreen hover:text-softCream'>Contact</button>
        </section>

        {/* About */}
        <section className='w-full bg-softCream p-4 text-seaGreen rounded-xl my-4 shadow-md border-2 border-seaGreen'>
          <h1 className='text-2xl font-semibold'>About</h1>
          <h2 className='mt-5'>Work experience</h2>
        </section>

        {/* Projects */}
        <section className='w-full bg-softCream p-4 text-seaGreen rounded-xl my-4 shadow-md border-2 border-seaGreen'>
          <h1 className='text-2xl font-semibold mb-4'>Projects</h1>

          <h2 className='text-1xl font-semibold'>Snake Game</h2>
          <p className='text-sm'>Simple traditional snake game made using <p className='inline font-bold'>HTML </p>
            and <p className='inline font-bold'>JS</p>.</p>

          <h2 className='text-1xl font-semibold mt-4'>Mölkky</h2>
          <p className='text-sm'>Scoring mobile app for traditional Finnish mölkky -game, made using <p className='inline font-bold'>React Native </p>
            and <p className='inline font-bold'>TS</p>.</p>
        </section>

        {/* Contact */}
        <section className='w-full bg-softCream p-4 text-seaGreen rounded-xl my-4 shadow-md border-2 border-seaGreen'>
          <h1 className='text-2xl font-semibold mb-2'>Contact</h1>

          <div className='flex flex-col items-center space-y-4'>

            <button className='rounded-xl border-seaGreen border p-1 w-3/4 text-seaGreen hover:bg-seaGreen hover:text-softCream'>
              <section className='flex flex-row items-center'>
                <FontAwesomeIcon icon={faEnvelope} className='mr-2 text-2xl' />
                <p className='flex-grow text-center'>jani.ahlstedt@outlook.com</p>
              </section>
            </button>

            <button className='rounded-xl border-seaGreen border p-1 w-3/4 text-seaGreen hover:bg-seaGreen hover:text-softCream'>
              <section className='flex flex-row items-center'>
                <FontAwesomeIcon icon={faPhone} className='mr-2 text-2xl' />
                <p className='flex-grow text-center'>0400 253448</p>
              </section>
            </button>

            <button className='rounded-xl border-seaGreen border p-1 w-3/4 text-seaGreen hover:bg-seaGreen hover:text-softCream'>
              <section className='flex flex-row items-center space-x-4'>
                <FontAwesomeIcon icon={faLinkedin} className='mr-2 text-2xl' />
                <p className='flex-grow text-center'>LinkedIn</p>
              </section>
            </button>

            <button className='rounded-xl border-seaGreen border p-1 w-3/4 text-seaGreen hover:bg-seaGreen hover:text-softCream'>
              <section className='flex flex-row items-center space-x-4'>
                <FontAwesomeIcon icon={faGithub} className='mr-2 text-2xl' />
                <p className='flex-grow text-center'>GitHub</p>
              </section>
            </button>

          </div>
        </section>

      </div>

    </div >
  );
};

export default App;
