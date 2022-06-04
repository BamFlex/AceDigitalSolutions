import React from "react";
import Wordpress from "../Assets/WordPress.png";
import Wix from "../Assets/wix.jpg";
import Square from "../Assets/square.png";
import Woo from "../Assets/woo.png";
import Shopify from "../Assets/shopify.jpg";
import Duda from "../Assets/duda.png";

const cms = () => {
  return (
    <div name="cms" className="bg-[#0a192f] w-full h-full p-4 ">
      <div className="max-w-[1000px] h-full mx-auto">
        <div className="py-6">
          <p className="text-white text-4xl font-bold inline border-b-4 border-pink-600">
            CMS
          </p>
          <p className="text-gray-300 py-3">
            //Content Management Systems I've worked with
          </p>
        </div>

        <div className="max-w-[1000px] h-full mx-auto grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div className="w-full h-full p-4 hover:scale-110 duration-700 shadow-sm shadow-[#040c16] flex flex-col justify-center items-center text-center">
            <img
              src={Wordpress}
              alt="wordpress"
              className="w-[300px] bg-white px-2 rounded-lg m-4"
            />
            <p className="text-gray-300 text-2xl w-full my-2">WordPress</p>
          </div>
          <div className="w-full h-full p-4 hover:scale-110 duration-700 shadow-sm shadow-[#040c16] flex flex-col justify-center items-center text-center">
            <img src={Wix} alt="wordpress" className="w-[300px] rounded-lg m-4" />
            <p className="text-gray-300 text-2xl w-full my-2">Wix</p>
          </div>
          <div className="w-full h-full p-4 hover:scale-110 duration-700 shadow-sm shadow-[#040c16] flex flex-col justify-center items-center text-center">
            <img src={Square} alt="square" className="w-[300px] rounded-lg m-4" />
            <p className="text-gray-300 text-2xl w-full my-2">SquareSpace</p>
          </div>
          <div className="w-full h-full p-4 hover:scale-110 duration-700 shadow-sm shadow-[#040c16] flex flex-col justify-center items-center text-center">
            <img
              src={Woo}
              alt="woocommerce"
              className="w-[300px] rounded-lg m-4"
            />
            <p className="text-gray-300 text-2xl w-full my-2">WooCommerce</p>
          </div>
          <div className="w-full h-full p-4 hover:scale-110 duration-700 shadow-sm shadow-[#040c16] flex flex-col justify-center items-center text-center">
            <img
              src={Shopify}
              alt="shopify"
              className="w-[300px] rounded-lg m-4"
            />
            <p className="text-gray-300 text-2xl w-full my-2">Shopify</p>
          </div>
          <div className="w-full h-full p-4 hover:scale-110 duration-700 shadow-sm shadow-[#040c16] flex flex-col justify-center items-center text-center">
            <img src={Duda} alt="duda" className="w-[300px] rounded-lg m-4" />
            <p className="text-gray-300 text-2xl w-full my-2">Duda</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default cms;
