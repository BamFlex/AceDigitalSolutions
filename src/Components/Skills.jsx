import React from 'react'
import HTML from '../Assets/html.png';
import CSS from '../Assets/css.png';
import JavaScript from '../Assets/javascript.png';
import ReactImg from '../Assets/react.png';
import Node from '../Assets/node.png';
import Aws from '../Assets/aws.png';
import Github from '../Assets/github.png';
import Mongo from '../Assets/mongo.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full '>
            <div>
                <p className='text-gray-300 text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>//These are the technologies I've worked with</p>
            </div>

            <div className='w-full h-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML Icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="HTML Icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="HTML Icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="HTML Icon" />
                    <p className='my-4'>REACT</p>
                </div>
                {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="HTML Icon" />
                    <p className='my-4'>GITHUB</p>
                </div> */}
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="HTML Icon" />
                    <p className='my-4'>NODE</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="HTML Icon" />
                    <p className='my-4'>MONGO</p>
                </div>
                {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Aws} alt="HTML Icon" />
                    <p className='my-4'>HTML</p>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Skills