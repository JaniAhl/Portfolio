import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import './App.css'
import { faPhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const App = () => {
  return (
    <div className='flex items-center flex-col h-screen font-sans'>

      <section className='flex flex-row w-1/4 space-x-8 p-4 text-seaGreen rounded-xl shadow-md'>
        <button className='border rounded-xl p-1 bg-black border-seaGreen hover:text-white'>About</button>
        <button className='border rounded-xl p-1 bg-black border-seaGreen hover:text-white'>Projects</button>
        <button className='border rounded-xl p-1 bg-black border-seaGreen hover:text-white'>Contact</button>
      </section>

      <section className='w-3/6 space-x-2 text-white rounded-xl my-1'>

        <a href='https://www.github.com/JaniAhl' target='_blank' rel='noopener noreferrer'>
          <button className=''>
            <FontAwesomeIcon icon={faSquareGithub} className='hover:text-white rounded-xl shadow-md text-seaGreen text-3xl' />
          </button>
        </a>

        <a href="https://www.linkedin.com/in/jani-ahlstedt-4490a82a5/" target='_blank' rel='noopener noreferrer'>
          <button className=''>
            <FontAwesomeIcon icon={faLinkedin} className='hover:text-white text-seaGreen shadow-md text-3xl' />
          </button>
        </a>

        <a>
          <button className=''>
            <FontAwesomeIcon icon={faSquareEnvelope} className='hover:text-white text-seaGreen text-3xl' />
          </button>
        </a>

      </section>

      <section className='w-3/6 bg-black p-4 text-seaGreen rounded-xl my-5 shadow-md border border-seaGreen'>
        <h1 className='text-2xl font-semibold'>About</h1>
        <h2 className='mt-5'>Work experience</h2>
      </section>

      <section className='w-3/6 bg-black p-4 text-seaGreen rounded-xl my-5 shadow-md border-2 border-seaGreen'>
        <h1 className='text-2xl font-semibold'>Projects</h1>
        <p className='mt-5'>Projekteja ja kuvia</p>
      </section>

      <section className='w-3/6 bg-black p-4 text-seaGreen rounded-xl my-5 shadow-md border-2 border-seaGreen'>
        <h1 className='text-2xl font-semibold mb-2'>Contact</h1>

        <div className='flex flex-col items-center space-y-4 '>

          <button className='rounded-xl border-seaGreen border p-1 w-3/4 text-seaGreen hover:text-white'>
            <section className='flex flex-row items-center'>
              <FontAwesomeIcon icon={faEnvelope} className='mr-2 text-2xl' />
              <p className='flex-grow text-center'>jani.ahlstedt@outlook.com</p>
            </section>
          </button>

          <button className='rounded-xl border-seaGreen border p-1 w-3/4 text-seaGreen hover:text-white'>
            <section className='flex flex-row items-center'>
              <FontAwesomeIcon icon={faPhone} className='mr-2 text-2xl' />
              <p className='flex-grow text-center'>0400 253448</p>
            </section>
          </button>

          <button className='rounded-xl border-seaGreen border p-1 w-3/4 text-seaGreen hover:text-white'>
            <section className='flex flex-row items-center space-x-4'>
              <FontAwesomeIcon icon={faLinkedin} className='mr-2 text-2xl' />
              <p className='flex-grow text-center'>LinkedIn</p>
            </section>
          </button>

          <button className='rounded-xl border-seaGreen border p-1 w-3/4 text-seaGreen hover:text-white'>
            <section className='flex flex-row items-center space-x-4'>
              <FontAwesomeIcon icon={faGithub} className='mr-2 text-2xl' />
              <p className='flex-grow text-center'>GitHub</p>
            </section>
          </button>

        </div>
      </section>


    </div >

  )
}

export default App