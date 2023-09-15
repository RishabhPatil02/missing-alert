import React from 'react';
import './aboutus.css';
import Navbar from '../components/Navbar';

function AboutUs() {
  return (
    <div><Navbar/><section className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <div className="text-center lg:w-2/3 w-full">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-large text-white">About Us</h1>
        <p className="leading-relaxed mb-8">Welcome to our website! We are a dedicated team of passionate individuals who have come together to create a powerful platform aimed at fostering strong connections within local communities. Our mission is to connect people living in the same area through emails and texts, allowing them to stay informed and alert about any crucial missing reports in their region.</p>
        <p className="leading-relaxed mb-8">At the heart of our project lies a deep commitment to making a positive impact in society. We recognized the need for a cost-effective and swift mechanism for notifying communities in cases of missing individuals, particularly vulnerable children. Our platform endeavors to bridge this gap by providing an efficient solution to alert all residents in the immediate vicinity where the missing child was last seen.</p>
        <p className="leading-relaxed mb-8">With a user-friendly interface, we make it effortless for community members to receive critical updates instantly. Our system leverages the power of email and text notifications to ensure that every individual in the region can swiftly respond and participate in the collective effort to locate the missing person.</p>
        <p className="leading-relaxed mb-8">Join us on this journey of compassion, empowerment, and vigilance. Together, we can create safer and more connected communities, where everyone plays an active role in looking out for one another.</p>
        <p className="leading-relaxed mb-8">Thank you for being a part of our vision.</p>
        <p className="leading-relaxed mb-8">Sincerely, The MARS Team</p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Join Us</button>
          <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">View Alerts</button>
        </div>
      </div>
    </div>
  </section>
  {/* <div className='Team'>
    <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
        <h1 className="text-2xl font-medium title-font mb-4 text-white">OUR TEAM</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
        </div>
        <div className="flex flex-wrap -m-4">
        <div className="p-3 lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201"/>
            <div className="w-full">
                <h2 className="title-font font-medium text-lg text-white">Holden Caulfield</h2>
                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-flex">
                <a className="text-gray-700" href='/'>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </a>
                <a className="ml-2 text-gray-700" href='/'>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                </a>
                <a className="ml-2 text-gray-700" href='/'> 
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                </a>
                </span>
            </div>
            </div>
        </div>
        <div className="p-3 lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/202x202"/>
            <div className="w-full">
                <h2 className="title-font font-medium text-lg text-white">Atticus Finch</h2>
                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-flex">
                <a className="text-gray-700" href='/'>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </a>
                <a className="ml-2 text-gray-700" href='/'>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                </a>
                <a className="ml-2 text-gray-700" href='/'>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                </a>
                </span>
            </div>
            </div>
        </div>
        <div className="p-3 lg:w-1/3 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
            <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/203x203"/>
            <div className="w-full"/>
                <h2 className="title-font font-medium text-lg text-white">Henry Letham</h2>
                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <span className="inline-flex">
                <a className="text-gray-700" href='/'>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </a>
                <a className="ml-2 text-gray-700" href='/'>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                </a>
                <a className="ml-2 text-gray-700" href='/'>
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                </a>
                </span>
            </div>
            </div>
        </div>
        </div>
    </section>
  </div> */}
  </div>
  )
}

export default AboutUs