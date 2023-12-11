import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Rakesh Reddy, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am currently pursuing 3rd Year in Electronics and Communication Engineering at the Indian Institute of 
                Information Technology, Allahabad.  My skills include proficiency in C, C++, Python, JavaScript, 
                and HTML/CSS, and I am experienced in using developer tools like Linux, Visual Studio Code (VS Code), 
                and Sublime Text. I specialize in building exceptional digital experiences through full-stack web 
                applications, showcased in my projects and coding profiles. My dedication and passion 
                drive me to excel both academically and professionally.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;