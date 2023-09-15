import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Navbar from '../components/Navbar';

function NewEdit() {
    const {id} = useParams();

    const responseData = localStorage.getItem('user_data');
    const userData = JSON.parse(responseData);
    const [file, setFile] = useState(null);
    const [customFilename, setCustomFilename] = useState('');

    const [formDetails, setFormDetails] = useState({
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
    });
    const [imgurl, setImgurl] = useState("");
    const [displayImgname, setDisplayImgname] = useState("");

    useEffect(()=>{
        axios.get(`http://localhost:8080/alert/${id}`)
        .then((response)=>{
            console.log("Helo",response.data);
            setFormDetails({...formDetails, ...response.data});
            setDisplayImgname(response.data.imagename);
        })
    },[]);

    useEffect(()=>{
        console.log(file)
    },[file]);

    const onSubmit= async(e)=>{
        e.preventDefault();
        const customFilename = formDetails.name.replaceAll(" ","_")
        const formData = new FormData();
        formData.append('image', file);
        formData.append('customFilename', customFilename);
        var newfilename = '';
        try {
        const response = await axios.post('http://localhost:8080/api/images', formData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        });
        newfilename = response.data;
        } catch (error) {
        console.error('Error uploading the image:', error);
        }
        await axios.put(`http://localhost:8080/alert/${id}`, {
            ...formDetails,imagename:newfilename
        });
    }

  return (
    <div><Navbar/>
        <div><section className="text-gray-400 bg-gray-900 body-font relative">
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
                <input type="text" id="name" value={formDetails.name} onChange={(e)=>{setFormDetails({...formDetails, [e.target.name]:e.target.value})}} name="name" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="age" className="leading-7 text-sm text-gray-400">Age</label>
                <input type="number" id="age" value={formDetails.age} name="age" onChange={(e)=>{setFormDetails({...formDetails, [e.target.name]:e.target.value})}} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="gender" className="leading-7 text-sm text-gray-400">Gender</label>
                <input type="text" id="gender" value={formDetails.gender} name="gender" onChange={(e)=>{setFormDetails({...formDetails, [e.target.name]:e.target.value})}} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
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
                <input type="text" id="lcity" value={formDetails.lcity} onChange={(e)=>{setFormDetails({...formDetails, [e.target.name]:e.target.value})}}  name="lcity" placeholder="City" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                <input type="text" id="lstate" value={formDetails.lstate} onChange={(e)=>{setFormDetails({...formDetails, [e.target.name]:e.target.value})}} name="lstate" placeholder="State" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                <input type="text" id="lpincode" value={formDetails.lpincode} onChange={(e)=>{setFormDetails({...formDetails, [e.target.name]:e.target.value})}}  name="lpincode" placeholder="Pincode" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="description" className="leading-7 text-sm text-gray-400">Description</label>
                <textarea id="description" value={formDetails.info} onChange={(e)=>{setFormDetails({...formDetails, [e.target.name]:e.target.value})}} name="info" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
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
                <input type="text" id="pname" name="pname" value={formDetails.pname} onChange={(e)=>{setFormDetails({...formDetails, [e.target.name]:e.target.value})}} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="pcontact" className="leading-7 text-sm text-gray-400">Contact</label>
                <input type="tel" id="pcontact" name="pcontact" onChange={(e)=>{setFormDetails({...formDetails, [e.target.name]:e.target.value})}} value={formDetails.pcontact} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label for="pemail" className="leading-7 text-sm text-gray-400">Email</label>
                <input type="email" id="pemail" name="pemail" onChange={(e)=>{setFormDetails({...formDetails, [e.target.name]:e.target.value})}} value={formDetails.pemail} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
              </div>
            </div>
            </div>
            <div className="p-2 w-full flex justify-center">
                <img src={`http://localhost:8080/api/getimages/${displayImgname}`} width="50%"/>
              </div>
            <div className="p-2 w-full">
                <div className="relative">
                  <label for="misspic" className="leading-7 text-sm text-gray-400">Image</label>
                  <input type="file" accept="image/*" id="misspic" name="misspic" onChange={(event)=>setFile(event.target.files[0])} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
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
    </div>
  )
}

export default NewEdit