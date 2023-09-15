import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

function MyProfile() {

    const responseData = localStorage.getItem('user_data');
    const userData = JSON.parse(responseData);
    const [myalerts, setMyalerts] = useState([]);
    const navigate = useNavigate();
    
    useEffect(()=>{
        loadalerts();
    },[])

    function loadalerts(){
        axios.get(`http://localhost:8080/myalerts?username=${userData.username}`)
        .then((response) => {
            console.log('Response:', response.data);
            setMyalerts(response.data);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    }
    // const edit = (id)=>{
    //     navigate(`/editalert/${id}`);
    // }


    const delalert = async (id)=>{
        await axios.delete(`http://localhost:8080/alert/${id}`);
        loadalerts();
    }

  return (
    <div><Navbar/>
        <section className="text-gray-400 bg-gray-900 body-font">
        
        <div className='flex mx-5 px-5 py-24'>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10 ml-24">
                <img width="70%" class="object-cover object-center rounded" alt="hero" src={`http://localhost:8080/api/getimages/aboutme.jpeg`}/>
            </div>
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <div className=" md:w-2/3 lg:pl-18 md:pl-8 flex flex-col md:items-start md:text-left items-center text-center">
        
        <div className="lg:w-1/2 lg:mb-0">
            <h2 className="sm:text-2xl text-2xl font-medium title-font mb-2 text-white">Hi {userData.fname} !!</h2>
            <div className="h-1 w-20 bg-green-500 rounded"></div>
        </div>
            
            <p className="mb-8 mt-8 leading-relaxed">Username: {userData.username}</p>
            <p className="mb-8 leading-relaxed">Contact: {userData.phone}</p>
            <p className="mb-8 leading-relaxed">Email: {userData.email}</p>
            
            
        </div>
        </div></div>
        </section>

        <section class="text-gray-400 bg-gray-900 body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
            <h1 class="text-2xl font-medium title-font mb-4 text-white tracking-widest">My Alerts</h1>
            </div>
            <div class="flex flex-wrap -m-4">
                {myalerts.map((item) => (
                    <div class="p-4 w-full">
                    <div class="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
                    <img alt="team" class="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={`http://localhost:8080/api/getimages/${item.imagename}`}/>
                    <div class="flex-grow sm:pl-8">
                        <h2 class="title-font font-medium text-lg text-white">{item.name}</h2>
                        <h3 class="text-gray-500 mb-3">{item.age}</h3>
                        <p class="mb-4">{item.lcity}</p>
                        <span class="inline-flex">
                        <button onClick={()=>{delalert(item.id)}} className='inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'>Delete</button>
                        <Link to={`/editalert/${item.id}`}><button className='inline-flex text-gray-400 bg-gray-800 border-0 mx-4 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg'>Edit</button></Link>
                        </span>
                    </div>
                    </div>
                </div>
                ))}
            
            </div>
        </div>
</section>
    </div>
  )
}

export default MyProfile