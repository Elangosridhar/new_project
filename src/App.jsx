import { useState } from 'react'
import { PrimeReactProvider } from 'primereact/api';

import './App.css'
import Login from './Component/Loginform/Login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <PrimeReactProvider>
           <Login></Login>
      
    </PrimeReactProvider>
  )
}

export default App
