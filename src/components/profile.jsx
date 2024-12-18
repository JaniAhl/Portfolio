import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import '../App.css'
import { faFilePdf, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'

const Profile = () => {

    return (
        <div>
            <div className='flex flex-col items-center md:flex-row fixed pt-5 pl-5 flex-wrap'>
                {/* Profile picture */}
                <section className='mb-4 md:mb-0'>
                    <img
                        src='https://media.licdn.com/dms/image/v2/D4D03AQFKA9fxrr6SQQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1702479394656?e=1737590400&v=beta&t=zmybI2C3iX13KSxLDVe3e_THt3Z2D66Pmbxekdh_gPY'
                        alt='LinkedIn pfp'
                        className='rounded-full w-32 h-32 object-cover border-seaGreen border-2 border-softCream md:w-48 md:h-48'
                    />
                </section>

                {/* Info */}
                <section className='text-left ml-4 mt-4 font-semibold text-softCream'>
                    {/* Animations might be deleted later */}
                    <p className='opacity-0 animate-fadeinup'>Jani Ahlstedt</p>
                    <p className='opacity-0 animate-fadeinright'>Student</p>
                    <p className='opacity-0 animate-fadeinleft'>Espoo, Finland</p>
                    <p className='opacity-0 animate-fadeinup sm:overflow-hidden'>jani.ahlstedt@outlook.com</p>

                    {/* Icons */}
                    <section className='space-x-4 mt-4 flex justify-center md:justify-start'>
                        <a href='https://www.github.com/JaniAhl' target='_blank' rel='noopener noreferrer' className='group relative'>
                            <FontAwesomeIcon icon={faSquareGithub} className='text-3xl' />
                            <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 text-xs text-softCream mt-1'>
                                GitHub
                            </span>
                        </a>

                        <a href='https://www.linkedin.com/in/jani-ahlstedt-4490a82a5/' target='_blank' rel='noopener noreferrer' className='group relative'>
                            <FontAwesomeIcon icon={faLinkedin} className='text-3xl' />
                            <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 text-xs text-softCream mt-1'>
                                LinkedIn
                            </span>
                        </a>

                        <a href='mailto:jani.ahlstedt@outlook.com' className='group relative'>
                            <FontAwesomeIcon icon={faSquareEnvelope} className='text-3xl' />
                            <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 text-xs text-softCream mt-1'>
                                Email
                            </span>
                        </a>

                        <a href='/public/CV_JaniAhlstedtPortfolio.pdf' target='_blank' className='group relative flex items-center'>
                            <FontAwesomeIcon icon={faFilePdf} className='text-2xl' />
                            <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 text-xs text-softCream mt-1'>
                                CV
                            </span>
                        </a>
                    </section>
                </section>
            </div>
        </div>
    )
}

export default Profile
