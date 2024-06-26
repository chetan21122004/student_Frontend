


import { useState, useEffect } from 'react';
import sbuplogo from "../../assets/sbuplog.png";
import { useNavigate, useLocation } from 'react-router-dom';
import {  Button } from "@material-tailwind/react";

export default function Login({ onLogin }) {
const [log, setlog] = useState()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (event) => {
    // setlog(true)
    event.preventDefault();

    try {
      const response = await fetch('https://stu-backend.vercel.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        onLogin();
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('user', JSON.stringify(data));
        navigate('/dashboard');
      } else {
        console.error('Login failed:', response.statusText);
        alert('Login failed. Please check your email and password and try again.');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
      alert('An error occurred during login. Please try again later.');
    }
  };

  useEffect(() => {
    const message = location.state && location.state.message;
    if (message) {
      console.log(message);
    }
  }, [location.state]);

  return (
    <div className="h-screen w-screen bg-gray-200">
      <div className="flex min-h-full bg-white  border-2 border-black  flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-24"
            src={sbuplogo}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input 
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0  p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={handleChange}
                  className="block w-full rounded-md border-0  p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className='flex flex-col items-center justify-evenly'>
              <Button type='submit' 
                  className="flex w-3/4  text- justify-center rounded-md bg-blue-500 px-3 py-1.5 text-base font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  loading={log} 
                  >

                
                log in

              </Button>
           <p className=' top-1.5 mb-2 border-b border-blue-gray-600  text-base text-gray-700 relative'>or</p>
              <button
              onClick={()=>navigate('/createAccount')}
                type="submit"
                className="flex  mt-1  justify-center rounded-md p-2 py-1.5 text-base  rounded-b-none font-semibold text-blue-gray-700 border-b-2 border-blue-gray-400  leading-shadow-sm hover:bg-blue-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
