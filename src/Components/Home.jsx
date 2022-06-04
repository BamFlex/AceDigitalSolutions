import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-full bg-[#0a192f] pb-8'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600 mt-12 md:mt-20'>Hi! My name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Adeleke Bamidele</h1>
        <h2 className='text-4xl sm:text-7xl text-bold text-[#8892b0]'>I'm a FullStack Developer</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>I develop websites and landing pages with HTML5, CSS3 and JavaScript. Others are REACT, NODE JS and MONGO DB. I've developed, designed and redesigned websites across different Content Management System (CMS) platforms such as WordPress, Wix, SquareSpace, Duda, weebly etc as well as E-Commerce platforms like Shopify and Woo-Commerce.</p>
        <p className='text-[#8892b0] max-w-[700px]'> I'm pleased to state that all the websites that I've doveloped have different functionalities and various forms of integrations that are essential for the effective performance of their business functions.</p>
        <div>
          <button className='text-white group border-2 px-6 py3 flex items-center hover:bg-pink-600 hover:border-pink-600'>View Work
            <span className='group-hover:rotate-90 duration-500'>
              <HiArrowNarrowRight className='ml-3' />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home