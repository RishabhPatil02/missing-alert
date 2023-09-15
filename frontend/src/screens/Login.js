// Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [logdata, setLogdata] = useState({
    username:"",
    password:"",
  });

  const {username, password } = logdata;

  const onInputChange = (e)=>{
    setLogdata({...logdata, [e.target.name]:e.target.value});
  }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send login request to the backend
      const response = await axios.post('http://localhost:8080/login', logdata);
      console.log('Login successful!', response.data);
      const responseData = JSON.stringify(response.data);
      localStorage.setItem('user_data', responseData);
      navigate("/");
    } catch (error) {
      console.error('Login failed:', error.response.data);
      alert("Login Failed");
    }
  };

  return (
    <div>
      <section className="text-gray-400 bg-gray-900 body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Login</h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <form onSubmit={(e)=>{handleLogin(e)}}>
                    <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-full">
                        <div className="relative">
                            <label for="username" className="leading-7 text-sm text-gray-400">Username</label>
                            <input type="text" id="username" value={username} name="username" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e)=>onInputChange(e)}/>
                        </div>
                        </div>
                        
                        <div className="p-2 w-full">
                        <div className="relative">
                            <label for="password" className="leading-7 text-sm text-gray-400">Password</label>
                            <input type="password" id="password" name="password" value={password} onChange={(e)=>{onInputChange(e)}} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-green-500 focus:bg-gray-900 focus:ring-2 focus:ring-green-900 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"/>
                        </div>
                        </div>
                    </div>
                    </div>
                        <div className="p-2 w-full">
                        <button type="submit" className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg">Login</button>
                        </div>
                        <div className="p-2 w-full">
                        <Link to={'/signup'}><p className="mb-2 leading-relaxed tracking-widest text-md title-font font-bold text-green-400">Don't have an account? Register Now</p></Link>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Login;
