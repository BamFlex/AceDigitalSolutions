import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300 pt-8'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                    <div>

                    </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold '>
                        <p>Hi, I'm Bamidele, nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p className='mb-2'>I'm an independent Freelancer with years of experience in web development, UI/UX, Email Marketing and other digital services.
                        </p>
                        <p>I'm a succesfull freelancer on <a href="https://www.upwork.com/freelancers/~01342f29afc9e3ec9e" target='_blank' className='text-pink-300'>Upwork</a> with Job Success Score of 100% while I became a Level 1 Seller on <a href="https://fiverr.com/ace_mobweb" target='_blank' className='text-pink-300'>Fiver</a> within a very short time. I'm also avlable on freelancers.com and 3lancing platform while I'm always happy too the mails of prospective clients in acedigitalsolution.webmobile@gmail.com adelekebamidelefelix@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About