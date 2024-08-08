import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Garlapati Rakesh Reddy
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Final Year Student @IIIT Allhabad.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        My skills include proficiency in languages such as C, C++, Python, JavaScript, MySQL and HTML/CSS. 
        I am experienced in using developer tools like Linux, VS Code, and Sublime 
        Text. Additionally, I am well-versed in various technologies and frameworks, including GitHub, 
        React.js, Node.js, Express.js, MongoDB, Mongoose, Bootstrap, and Tailwind CSS. 
        I have a Codeforces rating of 1603 (Expert), a Leetcode rating of 1879 (Knight), and a Codechef rating of 1624 (3 star). 
          I have also achieved significant rankings in competitive programming contests, demonstrating my dedication and proficiency in coding.
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
