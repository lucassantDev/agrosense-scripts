import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from '../src/pages/Login/Login';
import Agricultor from '../src/pages/Agricultor/AgricultorLogin';
import FirstPageAgricultor from '../src/pages/Agricultor/FirstPage/FirstPageAgricultor'
import Administrativo from '../src/pages/Administrativo/AdministrativoLogin';
import './Global.css'

function App() {
  /*const [count, setCount] = useState(0)*/

  return (
    <BrowserRouter>
      <>
      
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/Agricultor' element={<Agricultor/>} />
          <Route path='/Agricultor/FirstPage/FirstPageAgricultor' element={<FirstPageAgricultor/>} />
          <Route path='/Administrativo' element={<Administrativo/>} />
        </Routes>
      </>


    </BrowserRouter>
   
  )
}

export default App
