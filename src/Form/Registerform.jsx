import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Registerform (props) {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [type, setType] = useState("password");
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
    setType( passwordVisible ? "password" : "text");
  };
 
  const {handleChange,register}=props
 

  return (
    <div className="min-h-screen bg-cover bg-center bg-[#495057]">
      <div className="flex items-center justify-center min-h-screen bg-opacity-50">
        <div className="w-full max-w-md p-8 space-y-8 rounded-lg bg-[#adb5bd] shadow-2xl">
          <div className="flex justify-center">
            <h2 className="mt-6 py-3 text-3xl w-16 h-16 bg-[#495057] rounded-full text-[#adb5bd] text-center font-extrabold shadow-2xl">
              AT
            </h2>
            <h1 className="mt-6 py-3 text-3xl w-16 h-16 text-[#495057] text-center font-extrabold">
              Pro
            </h1>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <div className="space-y-4">
              <div className="relative">
                <label htmlFor="name" className="sr-only">Name</label>
                <input  name="name" type="text" autoComplete="name" onChange={handleChange} required
                  className="relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 rounded-t-md sm:text-sm hover:border-[#495057]"
                  placeholder="Name"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="fi fi-rr-user"></i>
                </div>
              </div>
              <div className="relative">
                <label htmlFor="email" className="sr-only">Email address</label>
                <input  name="email" type="email"  onChange={handleChange} required
                  className="relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 sm:text-sm hover:border-[#495057]"
                  placeholder="Email address"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="fi fi-rr-envelope"></i>
                </div>
              </div>
              <div className="relative">
                <label htmlFor="phone" className="sr-only">Phone number</label>
                <input  name="phone" type="tel"  onChange={handleChange} required
                  className="relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 sm:text-sm hover:border-[#495057]"
                  placeholder="Phone number"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="fi fi-rr-phone-call"></i>
                </div>
              </div>
              <div className="relative">
                <label htmlFor="role" className="sr-only">Role</label>
                <input  name="role" type="text"  onChange={handleChange} required
                  className="relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 sm:text-sm hover:border-[#495057]"
                  placeholder="Role"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="fi fi-rr-briefcase"></i>
                </div>
              </div>
              <div className="relative">
                <label htmlFor="password" className="sr-only">Password</label>
                <input  name="password" type={type} autoComplete="current-password" onChange={handleChange} required
                  className="relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 rounded-b-md sm:text-sm hover:border-[#495057]"
                  placeholder="Password"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <i className="fi fi-rr-key"></i>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer" onClick={togglePasswordVisibility}>
                  <i className={`fi ${passwordVisible ? 'fi-rr-eye' : 'fi-rr-eye-crossed'} text-gray-400`}> </i>
                </div>
              </div>
            </div>
            <div>
              <button type='button' onClick={ register} className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-[#495057] border border-transparent rounded-md group hover:bg-[#878a8d]">
                Sign up
              </button>
            </div>
            <div className="text-sm text-center">
            <Link to={'/login'} className="font-medium text-[#495057]">
                Already have an account?  Log in</Link>
             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
