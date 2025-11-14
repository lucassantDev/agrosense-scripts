import { useState } from 'react'
import './Global.css'
import AgrosenseLogo from './assets/image/agrosense-logo.png'
import './App.css'

function App() {
  /*const [count, setCount] = useState(0)*/

  return (
    <>
      <section className='section-login'>
        <div className='logo-title'>
          <div className='image-logo'></div>
          <h1 className='title-agrosense'>AgroSense</h1>
        </div>
        <div className='button-choice'>
            <button className='button-login'>
                <b>Agricultor</b>
            </button>


            <button className='button-login'>
                <b>IPA | Cooperaativa</b>
            </button>
        </div>
      </section>
    </>
  )
}

export default App
