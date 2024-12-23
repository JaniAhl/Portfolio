import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import '../App.css'
import { faPhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Projects = () => {

    return (

        <div id='projects' className='w-full text-left'>

            {/* Projects */}
            <h1 className='text-2xl font-bold mt-4 text-seaGreen'> PROJECTS</h1 >

            <section className='w-full bg-softCream p-4 text-seaGreen rounded-xl my-4 shadow-md border-2 border-seaGreen'>

                <div className='w-full relative border-b border-seaGreen pb-4'>
                    <h2 className='text-1xl font-bold w-full text-left relative group'>
                        NHL FANTASY STATISTICS PAGE <p className='inline-block group-hover:animate-spin'>⏳</p>
                    </h2>
                    <section className='text-left'>
                        <p className='text-sm mt-2'>Website made for a fantasy league to view and compare statistics of NHL and fantasy league players and teams. Will be made using
                            <p className='inline font-bold'> React</p>,<p className='inline font-bold'> JS</p>, <p className='inline font-bold'> Vite</p> and<p className='inline font-bold'> TailwindCSS</p>.
                            <p className='inline'> The website will use <p className='inline font-bold'>AWS</p> backend, which is mostly done already.</p>
                            <p className='font-semibold font-xs'> NOTE: This project is only just starting!</p></p>
                    </section>
                </div>


                <div className='w-full relative border-b border-seaGreen pb-4 mt-4'>
                    <h2 className='text-1xl font-bold w-full text-left relative mt-4 group'>
                        PORTFOLIO WEBSITE <p className='inline-block group-hover:animate-spin'>⌛</p>
                        <a href='https://github.com/JaniAhl/Portfolio' target='_blank' rel='noopener noreferrer'
                            className='absolute right-0 ml-2 text-seaGreen text-sm hover:text-black'>
                            <FontAwesomeIcon icon={faGithub} className='text-base' />
                        </a>
                    </h2>
                    <section className='text-left'>
                        <p className='text-sm mt-2'>This portfolio, made using<p className='inline font-bold'> React</p>
                            ,<p className='inline font-bold'> JS</p>, <p className='inline font-bold'> Vite</p> and<p className='inline font-bold'> TailwindCSS</p>.</p>
                    </section>
                </div>

                <div className='w-full relative border-b border-seaGreen pb-4'>

                    <h2 className='text-1xl font-bold w-full text-left relative mt-4 group'>
                        SNAKE GAME <p className='inline-block group-hover:animate-tada'>✅</p>
                        <a href='https://github.com/JaniAhl/snakegame' target='_blank' rel='noopener noreferrer'
                            className='absolute right-0 ml-2 text-seaGreen text-sm hover:text-black'>
                            <FontAwesomeIcon icon={faGithub} className='text-base' />
                        </a>
                    </h2>
                    <section className='text-left'>
                        <p className='text-sm mt-2'>Traditional snake game made using <p className='inline font-bold'>HTML </p>
                            and <p className='inline font-bold'>JS</p>.</p>
                    </section>

                </div>

                <div className='w-full relative border-b border-seaGreen pb-4'>
                    <h2 className="text-1xl font-bold w-full text-left relative mt-4 group">
                        BMI CALCULATOR
                        <p id="checkmark" className="inline-block group-hover:animate-tada ml-2">✅</p>
                        <a href="https://github.com/JaniAhl/bmicalc" target="_blank" rel="noopener noreferrer"
                            className="absolute right-0 ml-2 text-seaGreen text-sm hover:text-black">
                            <FontAwesomeIcon icon={faGithub} className="text-base" />
                        </a>
                    </h2>

                    <section className='text-left'>
                        <p className='text-sm mt-2'>Body mass index calculator made using <p className='inline font-bold'>React</p>,
                            <p className='inline font-bold'> Vite</p> and
                            <p className='inline font-bold'> TS</p></p>
                    </section>

                </div>

                <div className='w-full relative border-b border-seaGreen pb-4'>

                    <h2 className='text-1xl font-bold w-full text-left relative mt-4 group'>
                        MÖLKKY <p className='inline-block group-hover:animate-tada'>✅</p>
                        <a href='https://github.com/JaniAhl/Molkky' target='_blank' rel='noopener noreferrer'
                            className='absolute right-0 ml-2 text-seaGreen text-sm hover:text-black'>
                            <FontAwesomeIcon icon={faGithub} className='text-base' />
                        </a>
                    </h2>
                    <section className='text-left'>
                        <p className='text-sm mt-2'>Scoring mobile app for traditional Finnish mölkky -game, made using <p className='inline font-bold'>React Native</p>
                            , <p className='inline font-bold'>TS</p> and <p className='inline font-bold'> Expo Go</p>.</p>
                    </section>

                </div>

            </section >

        </div >


    )
}

export default Projects