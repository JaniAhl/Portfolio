import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../App.css'
import { faEnvelope, faFilePdf } from '@fortawesome/free-regular-svg-icons'

const Contact = () => {

    return (

        <div className='w-full text-left' id='contact'>

            {/* Contact */}

            <h1 className='text-2xl font-bold mt-4 text-seaGreen pl-1'>CONTACT</h1 >

            <section className='w-full bg-softCream p-4 text-seaGreen rounded-xl my-4 shadow-md border-2 border-seaGreen'>

                <div className='flex flex-col items-center space-y-4'>

                    <a href="https://www.linkedin.com/in/jani-ahlstedt-4490a82a5/" target='_blank' rel='noopener noreferrer'
                        className='rounded-xl border-seaGreen border-2 p-1 w-3/4 text-seaGreen hover:bg-seaGreen hover:text-softCream'>
                        <section className='flex flex-row items-center space-x-4'>
                            <FontAwesomeIcon icon={faLinkedin} className='mr-2 text-2xl' />
                            <p className='flex-grow text-center'>LinkedIn</p>
                        </section>
                    </a>

                    <a href='https://www.github.com/JaniAhl' target='_blank' rel='noopener noreferrer'
                        className='rounded-xl border-seaGreen border-2 p-1 w-3/4 text-seaGreen hover:bg-seaGreen hover:text-softCream'>
                        <section className='flex flex-row items-center space-x-4'>
                            <FontAwesomeIcon icon={faGithub} className='mr-2 text-2xl' />
                            <p className='flex-grow text-center'>GitHub</p>
                        </section>
                    </a>

                    <a href='mailto:jani.ahlstedt@outlook.com' className='rounded-xl border-seaGreen border-2 p-1 w-3/4 text-seaGreen hover:bg-seaGreen hover:text-softCream'>
                        <section className='flex flex-row items-center overflow-hidden'>
                            <FontAwesomeIcon icon={faEnvelope} className='mr-2 text-2xl' />
                            <p className='flex-grow text-center break-words'>
                                jani.ahlstedt@outlook.com
                            </p>
                        </section>
                    </a>

                    <a href='/public/CV_JaniAhlstedtPortfolio.pdf' target='_blank' className='rounded-xl border-seaGreen border-2 p-1 w-3/4 text-seaGreen hover:bg-seaGreen hover:text-softCream'>
                        <section className='flex flex-row items-center overflow-hidden'>
                            <FontAwesomeIcon icon={faFilePdf} className='mr-2 text-2xl' />
                            <p className='flex-grow text-center break-words'>
                                CV
                            </p>
                        </section>
                    </a>

                </div>
            </section>

        </div>
    )
}

export default Contact 