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

                <div className='flex flex-col w-full h-full'>

                    <h2 className='text-1xl font-bold mb-2 mt-4'>SKILLS</h2>

                    <div className='w-full'>
                        <section className='p-2 mb-2 border-b border-seaGreen'>
                            <h3 className='mb-2 font-semibold'>Languages</h3>
                            <div className='flex flex-row flex-wrap text-softCream '>
                                <p className='hover:animate-bounce text-xs font-bold mr-2 border-2 border-seaGreen rounded-full p-1 bg-green-600 shadow-md'>JavaScript</p>
                                <p className='hover:animate-bounce text-xs font-bold mr-2 border-2 border-seaGreen rounded-full p-1 bg-green-600 shadow-md'>HTML</p>
                                <p className='hover:animate-bounce text-xs font-bold mr-2 border-2 border-seaGreen rounded-full p-1 bg-yellow-500 shadow-md'>TypeScript</p>
                                <p className='hover:animate-bounce text-xs font-bold mr-2 border-2 border-seaGreen rounded-full p-1 bg-yellow-500 shadow-md'>Python</p>
                                <p className='hover:animate-bounce text-xs font-bold mr-2 border-2 border-seaGreen rounded-full p-1 bg-orange-500 shadow-md'>Java</p>
                            </div>
                        </section>

                        <section className='p-2 mb-2 w-full border-b border-seaGreen'>
                            <h3 className='mb-2 font-semibold'>Technologies</h3>
                            <div className='flex flex-row flex-wrap text-softCream'>
                                <p className='hover:animate-bounce text-xs font-bold mr-2 border-2 border-seaGreen rounded-full p-1 bg-green-600 shadow-md'>React</p>
                                <p className='hover:animate-bounce text-xs font-bold mr-2 border-2 border-seaGreen rounded-full p-1 bg-green-600 shadow-md'>React Native</p>
                                <p className='hover:animate-bounce text-xs font-bold mr-2 border-2 border-seaGreen rounded-full p-1 bg-green-600 shadow-md'>Vite</p>
                                <p className='hover:animate-bounce text-xs font-bold mr-2 border-2 border-seaGreen rounded-full p-1 bg-green-600 shadow-md'>TailwindCSS</p>
                                <p className='hover:animate-bounce text-xs font-bold mr-2 border-2 border-seaGreen rounded-full p-1 bg-yellow-500 shadow-md'>Expo GO</p>
                            </div>
                        </section>

                        <section className='p-2 mb-2 w-full border-b border-seaGreen'>
                            <h3 className='mb-2 font-semibold'>Tools</h3>
                            <div className='flex flex-row flex-wrap text-softCream'>
                                <p className='hover:animate-bounce text-xs font-bold mr-2 border-2 border-seaGreen rounded-full p-1 bg-green-600 shadow-md'>VS Code</p>
                                <p className='hover:animate-bounce text-xs font-bold mr-2 border-2 border-seaGreen rounded-full p-1 bg-green-600 shadow-md'>Git</p>
                                <p className='hover:animate-bounce text-xs font-bold mr-2 border-2 border-seaGreen rounded-full p-1 bg-green-600 shadow-md'>GitHub</p>
                            </div>
                        </section>


                    </div>

                </div>
            </section >

        </div >
    )
}

export default About