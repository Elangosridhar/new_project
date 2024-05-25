import React, { useState } from 'react'
import Registerform from '../../Form/Registerform'

export default function Registration() {
    const [data, setData] = useState({
        // name: '',
        // email: '',
        // phone: '',
        // role: '',
        // password: ''
      });
    
      const handleChange = (e) => {
        e.preventDefault();
        setData({ ...data, [e.target.name]: e.target.value });
      };
    
      const register = async (data) => {
        console.log(data);
      };

  return (
    <div>
        <Registerform handleChange={handleChange} register={register}/>
    </div>
  )
}
