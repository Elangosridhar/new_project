import { useState } from 'react'
import { PrimeReactProvider } from 'primereact/api';

import './App.css'
import Login from './Form/Loginform/Login'
import Registration from './Component/Registration/Registration';
import Approuter from './Router/Approuter';
import { Toaster } from 'react-hot-toast';


function App() {
  const [count, setCount] = useState(0)

  return (
    <PrimeReactProvider>
           
           <Approuter></Approuter>
           <Toaster position='top-right'/>
           
      
    </PrimeReactProvider>
  )
}

export default App
