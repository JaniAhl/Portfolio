import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import '../App.css'
import { faPhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Projects = () => {

    return (

        <div id='projects'>

            {/* Projects */}
            <h1 className='text-2xl font-bold mt-4 text-seaGreen'> Projects</h1 >

            <section className='w-full bg-softCream p-4 text-seaGreen rounded-xl my-4 shadow-md border-2 border-seaGreen'>

                <div>
                    <h2 className='text-1xl font-bold'>Snake Game
                        <a href='https://github.com/JaniAhl/snakegame' target='_blank' rel='noopener noreferrer'
                            className='border-seaGreen text-seaGreen ml-2'>
                            <FontAwesomeIcon icon={faGithub} className='text-2xl' />
                        </a>
                    </h2>
                    <p className='text-sm mt-2'>Traditional snake game made using <p className='inline font-bold'>HTML </p>
                        and <p className='inline font-bold'>JS</p>.</p>
                </div>

                <div>
                    <h2 className='text-1xl font-bold mt-4'>BMI Calculator
                        <a href='https://github.com/JaniAhl/bmicalc' target='_blank' rel='noopener noreferrer'
                            className='border-seaGreen text-seaGreen ml-2'>
                            <FontAwesomeIcon icon={faGithub} className='text-2xl' />
                        </a>
                    </h2>
                    <p className='text-sm mt-2'>Body mass index calculator made using <p className='inline font-bold'>React</p>,
                        <p className='inline font-bold'> Vite</p> and
                        <p className='inline font-bold'> TS</p></p>
                </div>

                <h2 className='text-1xl font-bold mt-4'>Mölkky
                    <a href='https://github.com/JaniAhl/Molkky' target='_blank' rel='noopener noreferrer'
                        className='border-seaGreen text-seaGreen ml-2'>
                        <FontAwesomeIcon icon={faGithub} className='text-2xl' />
                    </a>
                </h2>
                <div>
                    <p className='text-sm mt-2'>Scoring mobile app for traditional Finnish mölkky -game, made using <p className='inline font-bold'>React Native </p>
                        and <p className='inline font-bold'>TS</p>.</p>
                </div>

            </section>

        </div >


    )
}

export default Projects