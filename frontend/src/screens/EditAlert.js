import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AlertApi from '../util/AlertApi';
import axios from "axios";
import Navbar from '../components/Navbar';


function EditAlert() {
  const navigate = useNavigate();
  const responseData = localStorage.getItem('user_data');
  const userData = JSON.parse(responseData);
  

  const {id} = useParams();

  // const [imagePath, setImagePath] = useState("");
  const [file, setFile] = useState();
  const [customFilename, setCustomFilename] = useState('');

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  // const loadAlert = async ()=>{
  //   const result = await axios.get(`http://localhost:8080/alert/${id}`)
  //   setAlert(result.data);
  // }

  

  const [alert, setAlert] = useState({
    name:"",
    age:0,
    gender:"",
    lcity:"",
    lstate:"",
    lpincode:"",
    info:"",
    pname:"",
    pcontact:0,
    pemail:"",
    imagename:"",
    username: userData.username
  });

  const {name,age,gender,lcity,lstate,lpincode,info,pname,pcontact,pemail, imagename} = alert;

  const onInputChange = (e)=>{
    setAlert({...alert, [e.target.name]:e.target.value});
    setCustomFilename(name.replace(" ", "_"));
  }
  

  useEffect(()=>{
    axios.get(`http://localhost:8080/alert/${id}`)
    .then(()=>{
      // setAlert(response.data);
    })
      
  },[])

  useEffect(()=>{
    console.log(alert)
  },[alert])


  // useEffect( ()=>{
  //   if(alert.imagename!=""){
  //      axios.put(`http://localhost:8080/alert/${id}`, alert);
  //      navigate("/allalerts");
  //   }
  // },[alert])

  

  const onSubmit = async (e)=>{
  //   e.preventDefault();

  //   const formData = new FormData();
  //   formData.append('image', file);
  //   formData.append('customFilename', customFilename); // Send the custom filename as a form field
  //   // console.log(formData);
  //   try {
  //     const response = await axios.post('http://localhost:8080/api/images', formData, {
  //         headers: {
  //         'Content-Type': 'multipart/form-data',
  //         },
  //     });
  //     // setAlert({...alert, imagename:response.data});
  //     } catch (error) {
  //     console.error('Error uploading the image:', error);
  //     }
  }


  return (
    <div><Navbar/><section className="text-gray-400 bg-gray-900 body-font relative">
    <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">New Alert</h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
        <form onSubmit={(e)=>{onSubmit(e)}}>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
        <div className="p-2 w-full">
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Details of the missing person</p>
        </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-gray-400">Name</label>
                <input type="text" id="name" value={name} name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e)=>onInputChange(e)}/>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="age" className="leading-7 text-sm text-gray-400">Age</label>
                <input type="number" id="age" value={age} onChange={(e)=>onInputChange(e)} name="age" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="gender" className="leading-7 text-sm text-gray-400">Gender</label>
                <input type="text" id="gender" value={gender} onChange={(e)=>onInputChange(e)} name="gender" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="ldate" className="leading-7 text-sm text-gray-400">Last Seen On</label>
                <input type="date" id="ldate" name="ldate" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="lcity" className="leading-7 text-sm text-gray-400">Last Seen (Location)</label>
                <input type="text" id="lcity" value={lcity} onChange={(e)=>onInputChange(e)} name="lcity" placeholder="City" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                <input type="text" id="lstate" value={lstate} onChange={(e)=>onInputChange(e)} name="lstate" placeholder="State" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                <input type="text" id="lpincode" value={lpincode} onChange={(e)=>onInputChange(e)} name="lpincode" placeholder="Pincode" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="description" className="leading-7 text-sm text-gray-400">Description</label>
                <textarea id="description" value={info} onChange={(e)=>onInputChange(e)} name="info" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
              </div>
            </div>
              
            </div>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
        <div className="p-2 w-full">
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Details of the person to be contacted</p>
        </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="pname" className="leading-7 text-sm text-gray-400">Name</label>
                <input type="text" id="pname" name="pname" value={pname} onChange={(e)=>onInputChange(e)} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="pcontact" className="leading-7 text-sm text-gray-400">Contact</label>
                <input type="tel" id="pcontact" name="pcontact" value={pcontact} onChange={(e)=>onInputChange(e)} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="pemail" className="leading-7 text-sm text-gray-400">Email</label>
                <input type="email" id="pemail" name="pemail" value={pemail} onChange={(e)=>onInputChange(e)} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            </div>
            <div className="p-2 w-full">
                <div className="relative">
                  <label for="misspic" className="leading-7 text-sm text-gray-400">Image</label>
                  <input type="file" accept="image/*" id="misspic" name="misspic" onChange={handleFileChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                </div>
              </div>
            <div className="p-2 w-full">
              {/* <div className="relative">
                <button onClick={handleUpload} className="flex mx-auto text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Upload</button>
              </div> */}
            </div>
          </div>


            <div className="p-2 w-full">
              <button type="submit" className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Send Alerts</button>
            </div>

            </form>
        </div>
      
    </div>
  </section></div>
  )
}

export default EditAlert