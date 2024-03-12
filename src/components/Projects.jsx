import React from 'react'
import blog1 from '../asset/blog1.png'
import trooper from '../asset/trooper.jpg'
import nobel from '../asset/nobel.jpg'
import crm from '../asset/crm.png'
import permissions from '../asset/permissions.png'
import sql from '../asset/sql.png'
import risks from '../asset/risks.png'


const Projects = () => {
    return (
      <div name='projects' className='w-full min-h-screen text-gray-200 bg-[#111111] p-4 sm:p-12'>
          <div className='max-w-[1000px] mx-auto p-2 sm:p-4 flex flex-col justify-center w-full h-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 text-gray-200 border-[#800080]'>Projects</p>
              </div>
  
              {/* Web Development Projects */}
              <div className='pt-12'>
                  <p className='text-2xl font-bold text-gray-200 mb-4'>Web Development Projects</p>
                  <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4'>
                  <div style={{backgroundImage: `url(${blog1})`}} className='shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div'>
                           <div className='opacity-0 group-hover:opacity-100 font-semibold'>
                           A blog made with Flask/Bootstrap/SQL.
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
                     <div style={{backgroundImage: `url(${crm})`}} className='shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div'>
                         <div className='opacity-0 group-hover:opacity-100 pl-5 font-semibold'>
                         In progress...<br/>A CRM web application with Django, BootStrap and SQL.
                             <span className='text-2xl font-bold text-white tracking-wider'></span>
                             <div className='pt-8 text-center'>
                                 <a href="https://github.com/mariachar/Django_CRM" target="_blank">
                                    <button className='text-center border-2 hover:border-[#42337d] rounded-lg px-4 py-3 m-2 bg-white text-[#5383d0] text-lg'>Code</button>
                                 </a>
                            </div>
                         </div>
                   </div>
                  </div>
              </div>
  
              {/* Data Science Projects */}
              <div className='pt-12'>
                  <p className='text-2xl font-bold text-gray-200 mb-4'>Data Analysis Projects</p>
                  <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4'>
                     
                      <div style={{backgroundImage: `url(${nobel})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
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
                      
                      <div style={{backgroundImage: `url(${trooper})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
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
  
              {/* Cybersecurity Projects */}
              {/* Cybersecurity Projects */}
                <div className='pt-12'>
                    <p className='text-2xl font-bold text-gray-200 mb-4'>Cybersecurity Projects</p>
                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                        
                        <div style={{backgroundImage: `url(${permissions})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                            <div className='opacity-0 group-hover:opacity-100 pl-5 font-semibold'>
                                Checking and updating file permissions using Linux commands to keep the system secure.
                                    <div className='pt-8 text-center'>
                                        <a href="https://docs.google.com/document/d/1wMdZ1lNtivix5LE0qqQTZek9dE6K-x7DgI86Mk3vnZY/edit?usp=sharing&resourcekey=0-oA-RbniYkWkODZcNnKO_AQ" target="_blank">
                                            <button className='text-center  border-2 hover:border-[#42337d] rounded-lg w-32 h-10 bg-white text-[#800080] text-lg'>Visit</button>
                                        </a>
                                    </div>
                            </div>
                        </div>
                        
                        <div style={{backgroundImage: `url(${sql})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                            <div className='opacity-0 group-hover:opacity-100 pl-5 font-semibold'>
                                Using SQL filters to perform security-related tasks.
                                    <div className='pt-8 text-center'>
                                        <a href="https://docs.google.com/document/d/1OUEVlkQ3007zFCQTXSUsDwUAmrNIupROHcqsFrOzVi0/edit?usp=sharing&resourcekey=0-63aEa-de7JdaGGavQ7Dh5g" target="_blank">
                                            <button className='text-center  border-2 hover:border-[#42337d] rounded-lg w-32 h-10 bg-white text-[#800080] text-lg'>Visit</button>
                                        </a>
                                    </div>
                            </div>
                        </div>

                        <div style={{backgroundImage: `url(${risks})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                            <div className='opacity-0 group-hover:opacity-100 pl-5 font-semibold'>
                                Vulnerability assessment report to evaluate the risks based on a comprehensive analysis of the potential threats that could pose significant harm to the information system.
                                    <div className='pt-8 text-center'>
                                        <a href="https://docs.google.com/document/d/1CCaKkn3JWKQvVoJW37dcoZr98k4CEC00FOZL_JsSfE8/edit?usp=sharing" target="_blank">
                                            <button className='text-center  border-2 hover:border-[#42337d] rounded-lg w-32 h-10 bg-white text-[#800080] text-lg'>Visit</button>
                                        </a>
                                    </div>
                            </div>
                        </div>


                    </div>
                </div>

          </div>
      </div>
    )
  }
  
  export default Projects;
