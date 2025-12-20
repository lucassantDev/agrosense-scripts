import { Navigate, useNavigate, useNavigation } from 'react-router-dom';
import './UserPage.css';

import Footer from '../../../assets/components/Footer';


import Logo from '../../../assets/image/agrosense-logo.png'
import Config from '../../../assets/icon/settings.svg';


import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

import Stepper from '../../../assets/components/Stepper';


function UserPage(){

    const navigate = useNavigate()

    function PageRequestsDone(){
        navigate('/Agricultor/RequestDone')
    }

    function InSettings(){
        navigate('/Configuracoes/Settings')
    }
    return (
        <>
            <header className='header-agrosense'>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <img src={Logo} alt="logo AgroSense" style={{
                        width: '30px'
                    }}/>
                    <h3 className='gradient-text secondary-font'>
                        AgroSense
                    </h3>
                </div>

                <img src={Config} alt="icone de configuração" className='gradient-text' onClick={InSettings}/>
            </header>

            <main>
                <section className='name-user'>
                    <div></div>
                    <div>
                        <h2>Olá, José Silva</h2>
                        <p className='secondary-font'>***.***.**0-50</p>
                    </div>
                </section>
                <section className='section-stepper'>
                    <div className='div-stepper'>
                        <Stepper/>
                    </div>
                </section>

                <section className='requests-user'>

                </section>

                <section className='message-page'>
                    <div className='message'>
                        <p>
                            Conectando produtores, distribuidores e tecnologia para que a jornada da semente seja mais simples, transparente e eficiente. 
                        </p>
                    </div>
                    <div></div>
                </section>
            </main>

            <Footer/>
        </>
    )
}

export default UserPage;