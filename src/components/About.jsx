import React from 'react';
import python from '../asset/python.png';
import javascript from '../asset/javascript.png';
import react from '../asset/react.png';
import html from '../asset/html.png';
import css from '../asset/css.png';
import tailwind from '../asset/tailwind.png';
import postgresql from '../asset/postgresql.png';
import git from '../asset/git.png';
import moi from '../asset/moi.jpg'

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen bg-[#111111] text-gray-200'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full x-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#800080]'>About</p>
                </div>
                <div></div>
                </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <img src={moi} alt="My Photo" className="sm:float-right float-left w-150 mt-12" style={{ width: '250px'}} />    
            <div className='sm:text-right text-4xl font-bold'>
                    
                <h4>Hello, I'm Maria. <br /> Nice to meet you!</h4>
            </div>
            <div>
                <h4 className='text-2xl text-[#979aaa]'>Please let me introduce myself.</h4>
                <br />
                <p className='text-xl'> I live in Thessaloniki, GR. I am a Philosophy graduate with an MA in Philosophy and Ethics from Aristotle 
                University of Thessaloniki and a self-taught developer. My expertise lies in utilizing Python frameworks such as Flask and Django for robust backend development, ensuring scalable 
                and efficient server-side solutions. On the frontend, I bring ideas to life mainly by using the trifecta of JavaScript (and its fascinating frameworks), HTML, and CSS, 
                creating intuitive and visually appealing user interfaces. Also, I am excited about embracing the latest technologies 
                to push the boundaries of what's possible in web development.</p>
            </div>
            <br />
            <div className='bg-[#111111]'>
                <h3 className='text-2xl text-[#979aaa] mx-auto'> Current languages and tools:</h3>
                <div className='flex items-center justify-around py-4'>
                <img src={python} alt="Python Icon" style={{ width: '50px', marginTop: '30px' }}  />
                <img src={javascript} alt="Javascript Icon" style={{ width: '50px', marginTop: '30px' }}  />
                <img src={html} alt="HTML Icon" style={{ width: '50px', marginTop: '30px' }}  />
                <img src={css} alt="CSS Icon" style={{ width: '50px', marginTop: '30px' }}  />
                <img src={react} alt="React Icon" style={{ width: '50px', marginTop: '30px'}}  />
                <img src={tailwind} alt="Tailwind Icon" style={{ width: '50px', marginTop: '30px' }}  />
                <img src={postgresql} alt="PostgreSQL Icon" style={{ width: '50px', marginTop: '30px' }}  />
                <img src={git} alt="Git Icon" style={{ width: '50px', marginTop: '30px' }}  />
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About