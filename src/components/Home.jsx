import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Rakesh Reddy
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a 3rd Year Student @IIIT Allhabad.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        My skills include proficiency in languages such as C, C++, Python, JavaScript, and HTML/CSS. 
        I am experienced in using developer tools like Linux, VS Code, and Sublime 
        Text. Additionally, I am well-versed in various technologies and frameworks, including GitHub, 
        React.js, Node.js, Express.js, MongoDB, Mongoose, EJS, Bootstrap, and Tailwind CSS. 
        My capabilities extend to solving over 430+ problems on Leetcode, 190+ on Coding Ninjas, 
        100+ on InterviewBit, and 280+ on GeeksForGeeks.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
