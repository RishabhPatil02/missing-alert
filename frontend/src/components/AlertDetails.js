import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';

function AlertDetails() {
  const { id } = useParams();
  const [alert, setAlert] = useState({});

  useEffect(()=>{
    const fetcher = async () => {
      const data = await axios.get(`http://localhost:8080/alert/${id}`);
      setAlert(data.data);
  };
  fetcher();
  },[id])

  return (
    <div><Navbar/><section className="text-gray-400 bg-gray-900 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{alert.name}
        </h1>
        <p className="mb-2 leading-relaxed">Age: {alert.age}</p>
        <p className="mb-2 leading-relaxed">Last Seen in {alert.lcity}, {alert.lstate}</p>
        <p className="mb-5 leading-relaxed">Description: {alert.info}</p>
        <p className="mb-2 leading-relaxed tracking-widest text-md title-font font-bold text-green-400">Please reach out in case you have any leads</p>
        <p className="mb-2 leading-relaxed">Parent/Guardian: {alert.pname}</p>
        <p className="mb-2 leading-relaxed">Contact Number: {alert.pcontact}</p>
        <p className="mb-8 leading-relaxed">Email Address: {alert.pemail}</p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Contact</button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="hero" src={`http://localhost:8080/api/getimages/${alert.imagename}`}/>
      </div>
    </div>
  </section></div>
  )
}

export default AlertDetails