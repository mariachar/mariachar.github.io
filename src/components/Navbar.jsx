import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi';
import result from '../asset/result.gif';
import {Link} from 'react-scroll';


export const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#111111] text-gray-200 z-50'>
            <div style={{marginLeft: '20px'}}>
                <img src={result} alt="Welcome" style={{ width: '250px', marginTop: '40px' }} />
            </div>

            {/* MENU */}

            <div className='hidden md:flex'>
                <ul className='hidden md:flex text-lg'>
                    <li className='hover:text-[#800080]'>
                    <Link to="home" smooth={true} offset={-50} duration={500} >
                        Home
                    </Link></li>
                    <li className='hover:text-[#800080]'>
                    <Link to="about" smooth={true} offset={-75} duration={500} >
                        About
                    </Link></li>
                    <li className='hover:text-[#800080]'>
                    <Link to="projects" smooth={true} offset={-50} duration={500} >
                        Projects
                    </Link></li>
                    <li className='hover:text-[#800080]'>
                    <Link to="blog" smooth={true} offset={-50} duration={500} >
                        Blog
                    </Link></li>
                    <li className='hover:text-[#800080]'>
                    <Link to="contact" smooth={true} offset={-50} duration={500} >
                        Contact
                    </Link></li>
                </ul>
            </div>

            {/* HAMBURGER */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* MOBILE MENU */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#111111] flex flex-col justify-center items-center' }>
                <li className='py-4 text-2xl hover:text-[#800080]'>
                <Link onClick={handleClick} to="home" smooth={true} offset={-50} duration={500} >
                    Home
                </Link></li>
                <li className='py-4 text-2xl hover:text-[#800080]'>
                <Link onClick={handleClick} to="about" smooth={true} offset={-75} duration={500} >
                    About
                </Link></li>
                <li className='py-4 text-2xl hover:text-[#800080]'>
                <Link onClick={handleClick} to="projects" smooth={true} offset={-50} duration={500} >
                    Projects
                </Link></li>
                <li className='py-4 text-2xl hover:text-[#800080]'>
                <Link onClick={handleClick} to="blog" smooth={true} offset={-50} duration={500} >
                    Blog
                </Link></li>
                <li className='py-4 text-2xl hover:text-[#800080]'>
                <Link onClick={handleClick} to="contact" smooth={true} offset={-50} duration={500} >
                    Contact
                </Link></li>
            </ul>


            {/* SOCIAL ICONS */}
            <div className='hidden lg:flex fixed flex-col top-[40%] left-0'>
                <ul>
                    <li className=' social-icon w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-70px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-200' href="https://github.com/mariachar" target="_blank">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='social-icon w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-70px] duration-300 bg-[#0072b1]'>
                        <a className='flex justify-between items-center w-full text-gray-200' href="https://www.linkedin.com/in/maria-charalampidou23/" target="_blank">
                            Linkd <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='social-icon w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-70px] duration-300 bg-purple'>
                        <a className='flex justify-between items-center w-full text-gray-200' href="mailto:mariachar57@gmail.com" target="_blank">
                            Mail <HiOutlineMail size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}





export default Navbar