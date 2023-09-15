// SignUp.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
        username:"",
        fname:"",
        lname:"",
        email:"",
        city:"",
        state:"",
        pincode:"",
        password:"",
        phone:"",
      });
    
      const {username, fname, lname, email, state, city, pincode, password, phone} = user;
    
      const onInputChange = (e)=>{
        setUser({...user, [e.target.name]:e.target.value});
      }

    const onSubmit = async (event) =>{
        event.preventDefault();
        try{
            const response = await axios.post("http://localhost:8080/user", user);
            console.log(response.data);
            alert("User registered successfully");
            navigate("/login");
        }
        catch(error) {
            console.error('Signup failed:', error.response.data);
            alert("User registration failed");
        }
        
    }

    return(
    <div>
        <section className="text-gray-400 bg-gray-900 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Sign Up</h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <form onSubmit={(e)=>{onSubmit(e)}}>
                    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-full">
                        <div className="relative">
                            <label for="username" className="leading-7 text-sm text-gray-400">Username</label>
                            <input type="text" id="username" value={username} name="username" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e)=>onInputChange(e)}/>
                        </div>
                        </div>
                        <div className="p-2 w-1/2">
                        <div className="relative">
                            <label for="fname" className="leading-7 text-sm text-gray-400">First Name</label>
                            <input type="text" id="fname" value={fname} onChange={(e)=>onInputChange(e)} name="fname" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        </div>
                        <div className="p-2 w-1/2">
                        <div className="relative">
                            <label for="lname" className="leading-7 text-sm text-gray-400">Last Name</label>
                            <input type="text" id="lname" value={lname} onChange={(e)=>onInputChange(e)} name="lname" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                        </div>
                        </div>
                        <div className="p-2 w-full">
                        <div className="relative">
                            <label for="email" className="leading-7 text-sm text-gray-400">Email</label>
                            <input type="email" id="email" name="email" value={email} onChange={(e)=>onInputChange(e)} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                        </div>
                        </div>
                        <div className="p-2 w-full">
                        <div className="relative">
                            <label for="password" className="leading-7 text-sm text-gray-400">Password</label>
                            <input type="password" id="password" name="password" value={password} onChange={(e)=>onInputChange(e)} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                        </div>
                        </div>
                        <div className="p-2 w-full">
                        <div className="relative">
                            <label for="state" className="leading-7 text-sm text-gray-400">State</label>
                            <input type="text" id="state" value={state} name="state" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e)=>onInputChange(e)}/>
                        </div>
                        </div>
                        <div className="p-2 w-full">
                        <div className="relative">
                            <label for="city" className="leading-7 text-sm text-gray-400">City</label>
                            <input type="text" id="city" value={city} name="city" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e)=>onInputChange(e)}/>
                        </div>
                        </div>
                        <div className="p-2 w-full">
                        <div className="relative">
                            <label for="pincode" className="leading-7 text-sm text-gray-400">Pincode</label>
                            <input type="text" id="pincode" value={pincode} name="pincode" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e)=>onInputChange(e)}/>
                        </div>
                        </div>
                        <div className="p-2 w-full">
                        <div className="relative">
                            <label for="phone" className="leading-7 text-sm text-gray-400">Contact</label>
                            <input type="text" id="phone" value={phone} name="phone" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e)=>onInputChange(e)}/>
                        </div>
                        </div>
                        
                        </div>
                    </div>
                        <div className="p-2 w-full">
                        <button type="submit" className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Sign Up</button>
                        </div>
                        <div className="p-2 w-full">
                        <Link to={'/login'}><p className="mb-2 leading-relaxed tracking-widest text-md title-font font-bold text-green-400">Already have an account?</p></Link>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    </div>
    )
};

export default SignUp;
