import React from 'react'
import {FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'

const Contact = () => {
  return (
    <div name="contact" className='w-full min-h-screen bg-[#111111] flex justify-center items-center p-14'>
        <form method='POST' action="https://getform.io/f/0440fbc2-e210-4d9d-92c9-f028bf732436" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-4'>
                <p className='text-4xl font-bold inline border-b-4 border-[#800080] text-gray-200'>Contact</p>
                <p className='text-xl my-4 text-gray-400 py-4'>If you want to get in touch about a project collaboration or just to say hi, please fill in the form below. </p>
            </div>
            <input className='bg-[#ebf3f7] p-2 rounded-input' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 rounded-input bg-[#ebf3f7]' type="email" placeholder='Email' name='email' />
            <textarea className=' p-2 bg-[#ebf3f7] rounded-input' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-[#800080] hover:border-[#800080] px-10 py-3 my-8 mx-auto flex items-center rounded-md'>Send</button>
            <div>
              <p className='text-2xl text-gray-200 pb-8'> Or let's get social: </p>
              <ul className='flex flex-col md:flex-row md:justify-center gap-4'>
                    <li className='w-[200px] h-[60px] flex justify-between items-center mb-[10px] hover:scale-105 duration-300 bg-[#0072b1]'>
                        <a className='flex justify-between items-center w-full text-gray-200' href="https://www.linkedin.com/in/maria-charalampidou23/" target="_blank">
                            LinkedIn <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[200px] h-[60px] flex justify-between items-center mb-[10px] hover:scale-105 duration-300 bg-[#4267B2]'>
                        <a className='flex justify-between items-center w-full text-gray-200' href="https://www.facebook.com/maria.xaralampidou.9" target="_blank">
                            Facebook<FaFacebook size={30} />
                        </a>
                    </li>
                    <li className='w-[200px] h-[60px] flex justify-between items-center mb-[10px] hover:scale-105 duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-200' href="https://github.com/mariachar" target="_blank">
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
              </ul>
            </div>
        </form>
    </div>
  )
}

export default Contact