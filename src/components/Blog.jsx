import React from 'react';
import easier from "../asset/easier.jpg";
import cyberpunk from "../asset/cyberpunk.jpg";

const BlogPost = ({ title, imageUrl, description, link }) => {
  return (
    <div className='shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center mx-auto content-div mb-8 relative' style={{padding: '0 15px', boxSizing: 'border-box'}}>
      <h3 className='text-xl font-bold '>{title}</h3>
      <div style={{ backgroundImage: `url(${imageUrl})`, height: '200px', backgroundSize: 'cover' }} className='mb-4 w-full' />
      <div className='opacity-0 group-hover:opacity-100 text-center font-bold bg-[#1a1a1a] p-4 rounded-md flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full'>
        <p className='text-lg mb-2  bg-[#FFFF00] text-white transition-all duration-300 hover:bg-opacity-80 px-4 rounded-t-md bg-opacity-70 backdrop-filter backdrop-blur-lg'>{title}</p>
        <p className='text-gray-400'>{description}</p>
        <div className='pt-8 text-center'>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className='text-center border-2 hover:border-[#42337d] rounded-lg px-4 py-2 m-2 bg-white text-[#382671] text-lg'>Read More</button>
          </a>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div name='blog' className='w-full min-h-screen text-gray-200 bg-[#111111] p-12'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full md:justify-center gap-6'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-200 border-[#800080]'>Blog</p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <BlogPost
            title='It Gets Easier'
            imageUrl={easier}
            description="Aristotle once wrote that every virtue is the outcome of a good practice. What he meant by that is that you may do something once or twice, but..."
            link='https://whoami-blog.onrender.com/post/3'
          />
          <BlogPost
            title='Cyberpunk Fun Facts'
            imageUrl={cyberpunk}
            description="There are SO MANY fun facts about Cyberpunk that it's hard to make a short list of them but here I will mention the ones that really caught my interest."
            link='https://whoami-blog.onrender.com/fun-facts-post/1'
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
