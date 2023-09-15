import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import AlertApi from '../../src/util/AlertApi';
import Navbar from '../components/Navbar';


function AllAlerts() {

  const [allalerts, setAllAlerts] = useState([]);

  useEffect(()=>{
    const fetcher = async () => {
      const data = await AlertApi.allAlerts();
      setAllAlerts(data.data)
  };
  fetcher();

  }, [])

  const alerts = [
    {
        sub:"12yr",
        tit:"Isha",
        pt:"Mumbai",
        img:"https://dummyimage.com/600x360"
    },
    {
        sub:"12yr",
        tit:"Saee",
        pt:"Mumbai",
        img:"https://dummyimage.com/600x360"
    },
    {
        sub:"12yr",
        tit:"Rishabh",
        pt:"Mumbai",
        img:"https://dummyimage.com/600x360"
    },
    {
        sub:"12yr",
        tit:"Jay",
        pt:"Mumbai",
        img:"https://dummyimage.com/600x360"
    },
    {
        sub:"12yr",
        tit:"Sanju",
        pt:"Mumbai",
        img:"https://dummyimage.com/600x360"
    },
    {
        sub:"12yr",
        tit:"Arya",
        pt:"Mumbai",
        img:"https://dummyimage.com/600x360"
    },
  ]
  return (
    <div><Navbar/>
      <section className="text-gray-400 bg-gray-900 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">All Alerts</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Check out the alerts in your area. Help us inform the guardians of the missing people.</p>
      </div>

      <div className="flex flex-wrap -m-4">
            {allalerts.map((item) => (
                <Card name={item.name} id={item.id} age={item.age} city={item.lcity} img={`http://localhost:8080/api/getimages/${item.imagename}`}/>
            ))}
      </div>
      </div>
  </section></div>
  )
}

export default AllAlerts