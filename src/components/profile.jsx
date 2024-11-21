import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import '../App.css'
import { faPhone, faSquareEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Profile = () => {

    return (
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
                <p>Jani Ahlstedt</p>
                <p>Student</p>
                <p>Espoo, Finland</p>
                <p className='sm:overflow-hidden'>jani.ahlstedt@outlook.com</p>

                {/* Icons */}
                <section className='space-x-4 mt-4 flex justify-center md:justify-start'>
                    <a href='https://www.github.com/JaniAhl' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faSquareGithub} className='text-3xl hover:text-softCream' />
                    </a>
                    <a href="https://www.linkedin.com/in/jani-ahlstedt-4490a82a5/" target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} className='text-3xl hover:text-softCream' />
                    </a>
                    <a>
                        <FontAwesomeIcon icon={faSquareEnvelope} className='text-3xl hover:text-softCream' />
                    </a>
                </section>
            </section>

        </div>
    )
}

export default Profile
