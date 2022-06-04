import React from "react";
import Moola from "../Assets/Moola.png";
import Buildings from "../Assets/buildings.png";
import SchoolHouse from '../Assets/SchoolMentoring.png'
import DoctorGabe from '../Assets/DoctorGabeImg.png'
import Dynasty from '../Assets/DynastyImg.png'
import PPMP from '../Assets/ppmp.png'
import CareCenter from '../Assets/CareCenter.png'

const Work = () => {
  return (
    <div name="work" className="bg-[#0a192f] w-full md:h-full text-gray-300 pt-16">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent works</p>
        </div>
        
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

            {/* Grid Items */}
            <div style={{ backgroundImage: `url(${Moola})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div">
                
                {/* Hover effects */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-center text-white tracking-wider">
                        This is a financial investment project
                    </span>
                    <div className="pt-8 text-center">
                        <a href="https://moola.vercel.app/" target="_blank">
                        <button className="text-center rounded-lg px-4 py-3 mx-2 bg-white text-gray-700 font-bold text-lg">
                            Visit the website
                        </button>
                        </a>
                        {/* <a href="https://moola.vercel.app/">
                        <button className="text-center rounded-lg px-4 py-3 mx-2 bg-white text-gray-700 font-bold text-lg">
                            Code
                        </button>
                        </a> */}
                    </div>
                </div>
          </div>
          <div style={{ backgroundImage: `url(${Buildings})` }} className="shadow-lg shadow-[#040c16] group container rounded-md text-center flex justify-center items-center mx-auto  content-div">
                {/* Hover effects */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider">
                    This is a Real Estate project
                    </span>
                    <div className="pt-8 text-center">
                        <a href="https://buildingsreimagined.com/" target="_blank">
                        <button className="text-center rounded-lg px-4 py-3 mx-2 bg-white text-gray-700 font-bold text-lg">
                            Visit the website
                        </button>
                        </a>
                        {/* <a href="https://buildingsreimagined.com/">
                        <button className="text-center rounded-lg px-4 py-3 mx-2 bg-white text-gray-700 font-bold text-lg">
                            Code
                        </button>
                        </a> */}
                    </div>
                </div>
          </div>
          <div style={{ backgroundImage: `url(${CareCenter})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center text-center mx-auto  content-div">
                {/* Hover effects */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider">
                    This is a mental Health  service project
                    </span>
                    <div className="pt-8 text-center">
                        <a href="https://anxietycarecentre.ca/" target="_blank">
                        <button className="text-center rounded-lg px-4 py-3 mx-2 bg-white text-gray-700 font-bold text-lg">
                            Visit the website
                        </button>
                        </a>
                        {/* <a href="https://anxietycarecentre.ca/">
                        <button className="text-center rounded-lg px-4 py-3 mx-2 bg-white text-gray-700 font-bold text-lg">
                            Code
                        </button>
                        </a> */}
                    </div>
                </div>
          </div>
          <div style={{ backgroundImage: `url(${DoctorGabe})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div">
                {/* Hover effects */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider">
                    This is a Health related project
                    </span>
                    <div className="pt-8 text-center">
                        <a href="https://doctorgabe.com.au/" target="_blank">
                        <button className="text-center rounded-lg px-4 py-3 mx-2 bg-white text-gray-700 font-bold text-lg">
                            Visit the website
                        </button>
                        </a>
                        {/* <a href="https://doctorgabe.com.au/">
                        <button className="text-center rounded-lg px-4 py-3 mx-2 bg-white text-gray-700 font-bold text-lg">
                            Code
                        </button>
                        </a> */}
                    </div>
                </div>
          </div>
          <div style={{ backgroundImage: `url(${Dynasty})` }} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto text-center content-div">
                {/* Hover effects */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider">
                    This is a Real Estate project
                    </span>
                    <div className="pt-8 text-center">
                        <a href="http://dynastyreinetwork.com/" target="_blank">
                        <button className="text-center rounded-lg px-4 py-3 mx-2 bg-white text-gray-700 font-bold text-lg">
                            Visit the website
                        </button>
                        </a>
                        {/* <a href="http://dynastyreinetwork.com/">
                        <button className="text-center rounded-lg px-4 py-3 mx-2 bg-white text-gray-700 font-bold text-lg">
                            Code
                        </button>
                        </a> */}
                    </div>
                </div>
          </div>
          <div style={{ backgroundImage: `url(${PPMP})` }} className="shadow-lg shadow-[#040c16] group container rounded-md text-center flex justify-center items-center mx-auto text-center content-div">
                {/* Hover effects */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider">
                    This is Investment related project
                    </span>
                    <div className="pt-8 text-center">
                        <a href="https://www.prairiepracticemanagementprofessionals.com/" target="_blank">
                        <button className="text-center rounded-lg px-4 py-3 mx-2 bg-white text-gray-700 font-bold text-lg">
                            Visit the website
                        </button>
                        </a>
                        {/* <a href="https://www.prairiepracticemanagementprofessionals.com/">
                        <button className="text-center rounded-lg px-4 py-3 mx-2 bg-white text-gray-700 font-bold text-lg">
                            Code
                        </button>
                        </a> */}
                    </div>
                </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Work;
