import { useState } from 'react'
import { PrimeReactProvider } from 'primereact/api';

import './App.css'
import Login from './Form/Loginform/Login'
import Registration from './Component/Registration/Registration';


function App() {
  const [count, setCount] = useState(0)

  return (
    <PrimeReactProvider>
           

           <Registration></Registration>
      
    </PrimeReactProvider>
  )
}

export default App
