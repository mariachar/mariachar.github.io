import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#111111] p-4 sm:p-12'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#800080] text-lg'>Hi, my name is</p>
                <h1 className='text-4xl sm-text-7xl font-bold text-[#F9FDFD]'>Maria Charalampidou</h1>
                <h2 className='text-4xl sm-text-7xl font-bold text-[#979aaa]'>and I'm a Security Analyst. </h2>
                <p className='text-purple-100 py-4 max-w-[700px] text-xl'> Currently I am working at Accenture Greece 
                and I am dedicated in monitoring systems to identify threats. </p>
            <div>
            <button className='hidden lg:flex text-white group border-2 px-8 py-2 my-2 items-center ease-in-out fill-effect'>
              <Link to="projects" spy={true} offset={-50} smooth={true} duration={500}>
                Projects ➟
              </Link>
            </button>
            </div>
        </div>

    </div>
  )
}



export default Home