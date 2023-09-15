import React from 'react';
import './aboutus.css';

function Cases() {
  const imageStyles = {
    filter: 'grayscale(1) contrast(1.2) opacity(0.16)'
  };
  return (
    <div className='mapdiv'><section className="text-gray-400 bg-gray-900 body-font relative">
    <div className="absolute inset-0 bg-gray-900">
      <iframe title="map" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" style={imageStyles}></iframe>
    </div>
    <div className="container px-5 py-24 mx-auto flex">
      <div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
        <h2 className="text-white text-lg mb-1 font-medium title-font">Cases Near You</h2>
        <p className="leading-relaxed mb-5">Enter your city to check the number of active missing cases in your area</p>
        <div className="relative mb-4">
          {/* <label for="email" className="leading-7 text-sm text-gray-400">City</label> */}
          <input type="email" id="email" name="email" placeholder="City" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-green-500 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <button className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Search</button>
        </div>
    </div>
  </section></div>
  )
}

export default Cases