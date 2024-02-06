import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#111111] p-8'>
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#800080] text-lg'>Hi, my name is</p>
                <h1 className='text-4xl sm-text-7xl font-bold text-[#F9FDFD]'>Maria Charalampidou</h1>
                <h2 className='text-4xl sm-text-7xl font-bold text-[#979aaa]'>and I'm a Software Engineer. </h2>
                <p className='text-purple-100 py-4 max-w-[700px] text-xl'> Currently I am dedicated in developing high-performing and eye-catching web apps. Also, I'm extremely passionate about programming and thrilled 
                with all the things you can do with it. </p>
            <div>
            <button className='hidden lg:flex text-white group border-2 px-6 py-2 my-2 items-center ease-in-out fill-effect'>
              <Link to="projects" spy={true} smooth={true} duration={500}>
                Projects
                <span className='group-hover:rotate-360 duration-300'> 
                    <HiArrowNarrowRight className='ml-3' />
                </span>
                </Link>
            </button>
            </div>
        </div>

    </div>
  )
}



export default Home