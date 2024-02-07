import React from 'react'
import blog1 from '../asset/blog1.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full min-h-screen text-gray-200 bg-[#111111] p-12'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-200 border-[#800080]'>Projects</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
                <div style={{backgroundImage: `url(${blog1})`}} className='shadow-lg shadow-[#040c16] group container rounded-sm flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100'>
                    A blog made with Flask/Bootstrap/SQL
                        <span className='text-2xl font-bold text-white tracking-wider'></span>
                        <div className='pt-8 text-center'>
                            <a href="https://whoami-blog.onrender.com/" target="_blank">
                                <button className='text-center border-2 hover:border-[#42337d] rounded-lg px-4 py-3 m-2 bg-white text-[#800080] text-lg'>Visit</button>
                            </a>
                            <a href="https://github.com/mariachar/whoami-flask-blog" target="_blank">
                                <button className='text-center border-2 hover:border-[#42337d] rounded-lg px-4 py-3 m-2 bg-white text-[#5383d0] text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Projects