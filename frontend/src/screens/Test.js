import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from "axios";

function Test() {
    const [file, setFile] = useState();
    const [uploadedFile, setUploadedFile] = useState();
    const [error, setError] = useState();
    const [imagePath, setImagePath] = useState('');

    function handleFileChange(event) {
        setFile(event.target.files[0])
    }

    useEffect(()=>{
        console.log(file);
      }, [file])

    const handlesubmit = async (event)=> {
        event.preventDefault();
        const formData = new FormData();
        formData.append('image', file);
        formData.append('customFilename', "isha"); // Send the custom filename as a form field
        console.log(formData);
        try {
        const response = await axios.post('http://localhost:8080/api/images', formData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        });

        setImagePath(response.data);
        console.log('Image uploaded successfully! Image Path:', response.data);
        } catch (error) {
        console.error('Error uploading the image:', error);
        }
            console.log(file.name)
        
        }

  return (
    <div>
        <form onSubmit={handlesubmit}>
            <div className="p-2 w-full">
            <div className="relative">
                <label for="misspic" className="leading-7 text-sm text-gray-400">Image</label>
                <input type="file" accept="image/*" id="misspic" name="misspic"  onChange={handleFileChange} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
            </div>
            </div>
            <div className="p-2 w-full">
                <div className="relative">
                <button type="submit" className="flex mx-auto text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Upload</button>
            </div>
            </div>
        </form>
  </div>
  )
}

export default Test