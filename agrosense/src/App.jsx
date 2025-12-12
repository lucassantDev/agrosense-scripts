import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/MainLogin/Login';

import Agricultor from './pages/Agricultor/Login/AgricultorLogin';
import UserAgricultor from '../src/pages/Agricultor/FirstPage/UserPage';

import Administrativo from './pages/Administrativo/LoginAdm/AdmLogin';
import RequestDone from './pages/Agricultor/RequestDone/RequestDone';
import Settings from './pages/Configuracoes/Settings';

import FirstPageAdm from './pages/Administrativo/FirstPageAdm/AdmPage';
import './Global.css';

function App() {
  /*const [count, setCount] = useState(0)*/

  return (
    <BrowserRouter>
      <>
      
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/Configuracoes/Settings' element={<Settings/>}/>
          <Route path='/Agricultor' element={<Agricultor/>} />
          <Route path='/Agricultor/FirstPage/UserPage' element={<UserAgricultor/>} />
          <Route path='/Agricultor/RequestDone' element={<RequestDone/>}/>
          <Route path='/Administrativo' element={<Administrativo/>} />
          <Route path='/Administrativo/FirstPageAdm/FirstPageAdm' element={<FirstPageAdm/>}/>
        </Routes>
      </>


    </BrowserRouter>
   
  )
}

export default App
