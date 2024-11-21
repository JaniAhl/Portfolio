import '../App.css';

const Navbar = () => {
    return (
        <div>
            {/* Navbar */}
            <section className='space-y-4 font-bold md:space-y-0 md:space-x-8 flex flex-col md:flex-row items-center justify-center'>
                <a
                    className='w-full md:w-auto box-border border-2 rounded-xl p-2 bg-softCream border-seaGreen text-seaGreen hover:bg-seaGreen hover:text-softCream text-center'
                    href='#about'>
                    ABOUT
                </a>

                <a
                    className='w-full md:w-auto box-border border-2 rounded-xl p-2 bg-softCream border-seaGreen text-seaGreen hover:bg-seaGreen hover:text-softCream text-center'
                    href='#projects'>
                    PROJECTS
                </a>

                <a
                    className='w-full md:w-auto box-border border-2 rounded-xl p-2 bg-softCream border-seaGreen text-seaGreen hover:bg-seaGreen hover:text-softCream text-center'
                    href='#contact'>
                    CONTACT
                </a>
            </section>
        </div >
    );
};

export default Navbar;
