import { Navigate, useNavigate, useNavigation } from 'react-router-dom';
import './FirstPageAgricultor.css';
import Agricultor from "../../../assets/image/agricultor.jpg";

import Logo from '../../../assets/image/agrosense-logo.png'
import Config from '../../../assets/image/settings.svg';
import Footer from '../../../assets/components/Footer.jsx';
import Stepper from '../../../assets/components/Stepper'


import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


function FirstPageAgricultor(){

    const navigate = useNavigate()

    function PageRequestsDone(){
        navigate('/Agricultor/RequestDone')
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
                    <h3 className='gradient-text'>
                        AgroSense
                    </h3>
                </div>

                <img src={Config} alt="icone de configuração" className='gradient-text' />
            </header>

            <main>
                <section className="user-requests">
                    <div className='flex-img-user'>
                        <img src="" alt="imagem do agricultor" />
                        <div className='name-user'>
                            <h2>Olá, José Silva</h2>
                            <p>***.***.*87-00</p>
                        </div>
                    </div>
                </section>

                <section className='request-historic'>
                    <div className='last-request'>
                        <div className='info-request'>
                            <h2>LOTE  #251030</h2>
                            <p>Feijão • Vitória</p>
                        </div>
                        <Stepper/>
                    </div>
                    <button className='see-requests' onClick={PageRequestsDone}>
                        conferir histórico
                    </button>
                </section>

                <section className='seed-grain-request'>
                    
                </section>
                
                <section className='message-section'>
                    <div className='message'>
                        <p>
                            Conectando produtores, distribuidores e tecnologia para que a jornada da semente seja mais simples, transparente e eficiente.
                            <br /> <br />

                            <span>Juntos, cultivamos resultados!</span>

                        </p>

                        <div className='logotype'>
                            <img src={Logo} className='logo-message' alt="imagem da logotipo" />
                            <p className='gradient-text'>AgroSense</p>
                        </div>
                    </div>

                    <div style={{ 
                        height: '200px', 
                        backgroundColor: 'var(--color01)', 
                        width: '5px',
                        margin: '-575px -120px 0 0 '
                        }}>
                        {/* div de linha verde */}
                    </div>

                    {/* imagem do agricultor */}
                    <img src={Agricultor} className='image-agricultor' alt="imagem agricultor" />
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default FirstPageAgricultor;