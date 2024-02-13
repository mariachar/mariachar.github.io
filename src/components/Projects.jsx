import React from 'react'
import blog1 from '../asset/blog1.png'
import trooper from '../asset/trooper.jpg'
import nobel from '../asset/nobel.jpg'

const Projects = () => {
  return (
    <div name='projects' className='w-full min-h-screen text-gray-200 bg-[#111111] p-12'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-200 border-[#800080]'>Projects</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 '>
                <div style={{backgroundImage: `url(${blog1})`}} className='shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 font-semibold'>
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
                <div style={{backgroundImage: `url(${nobel})`}} className='shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 pl-5 font-semibold'>
                    This project aims to do a data analysis on the Nobel Prize Winners over the years, with Pandas/Matplotlib/NumPy. 
                        <span className='text-2xl font-bold text-white tracking-wider'></span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/mariachar/data_analysis_projects/blob/main/Nobel_Prize_Analysis.ipynb" target="_blank">
                                <button className='text-center  border-2 hover:border-[#42337d] rounded-lg w-32 h-10 bg-white text-[#800080] text-lg'>Visit</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${trooper})`}} className='shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 pl-5 font-semibold'>
                    This project aims to do a data analysis on Lego dataset, providing insights into the number of sets, themes, and parts per set, with Pandas/Matplotlib/NumPy. 
                        <span className='text-2xl font-bold text-white tracking-wider'></span>
                        <div className='pt-8 text-center'>
                            <a href="https://github.com/mariachar/data_analysis_projects/blob/main/Lego_Analysis.ipynb" target="_blank">
                                <button className='text-center  border-2 hover:border-[#42337d] rounded-lg w-32 h-10 bg-white text-[#800080] text-lg'>Visit</button>
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