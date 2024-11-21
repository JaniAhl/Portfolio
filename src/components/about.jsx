import '../App.css'


const About = () => {
    return (

        <div id='about' className='w-full text-left'>

            {/* About */}

            <h1 className='text-2xl font-bold mt-4 text-seaGreen'>ABOUT</h1 >

            <section className='w-full bg-softCream p-4 text-seaGreen rounded-xl my-4 shadow-md border-2 border-seaGreen'>
                <div className='border-b border-seaGreen pb-4'>
                    <h2 className='text-1xl font-bold mb-2'>EDUCATION</h2>
                    <p className='text-sm font-bold'>2021 - Present</p>
                    <p className='text-xs'>Degree Programme in Business Information Technology, BBA
                        <p className='font-bold'>Haaga-Helia University of Applied Sciences</p> </p>
                </div>

                <div>
                    <h2 className='text-1xl font-bold mb-2 mt-4'>PROGRAMMING LANGUAGES</h2>
                </div>
            </section>

        </div>
    )
}

export default About