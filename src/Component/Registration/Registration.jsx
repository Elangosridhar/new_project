import React, { useState } from 'react'
import Registerform from '../../Form/Registerform'
import { apiregister } from '../../Service/authentication/apiregister';
import toast from 'react-hot-toast';

export default function Registration() {
    const [data, setData] = useState({
      
      });
    
      const handleChange =async (e) => {
        
        setData({ ...data,...{[e.target.name]: e.target.value }});
        
        
      };
    
      const register = async (e) => {
        e.preventDefault();
        console.log(data);
        const res = await apiregister(data)
        console.log(res)
        res.message=="successfully registered"?toast.success(res.message):toast.error("failed to registered")
      }
  return (
    <div>
        <Registerform handleChange={handleChange} register={register}/>
    </div>
  )
}
