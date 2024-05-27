import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Main from '../Core/Main/Main' 
import Login from '../Form/Loginform/Login'

import Registration from '../Component/Registration/Registration'

export default function () {
  return (
     <BrowserRouter>
     <Routes>
        < Route element={<Main/>}>
              <Route path='/' element={<Registration/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
             
        </Route>
     </Routes>
     </BrowserRouter>
  )
}
