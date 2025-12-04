import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from '../src/pages/Login/Login';
import Agricultor from '../src/pages/Agricultor/AgricultorLogin';
import FirstPageAgricultor from '../src/pages/Agricultor/FirstPage/FirstPageAgricultor'
import Administrativo from '../src/pages/Administrativo/AdministrativoLogin';
import RequestDone from './pages/Agricultor/RequestDone/RequestDone';
import Settings from './pages/Configuracoes/Settings';

import FirstPageAdm from './pages/Administrativo/FirstPageAdm/FirstPageAdm';
import './Global.css'

function App() {
  /*const [count, setCount] = useState(0)*/

  return (
    <BrowserRouter>
      <>
      
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/Configuracoes/Settings' element={<Settings/>}/>
          <Route path='/Agricultor' element={<Agricultor/>} />
          <Route path='/Agricultor/FirstPage/FirstPageAgricultor' element={<FirstPageAgricultor/>} />
          <Route path='/Agricultor/RequestDone' element={<RequestDone/>}/>
          <Route path='/Administrativo' element={<Administrativo/>} />
          <Route path='/Administrativo/FirstPageAdm/FirstPageAdm' element={<FirstPageAdm/>}/>
        </Routes>
      </>


    </BrowserRouter>
   
  )
}

export default App
