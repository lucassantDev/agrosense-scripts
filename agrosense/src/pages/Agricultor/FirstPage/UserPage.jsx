import { Navigate, useNavigate, useNavigation } from 'react-router-dom';
import './UserPage.css';

import Footer from '../../../assets/components/Footer';

import JoseSilva from '../../../assets/image/jose-silva.jpg'
import Agricultor from '../../../assets/image/agricultor.jpg'
import Logo from '../../../assets/image/agrosense-logo.png'
import Config from '../../../assets/icon/settings.svg';

import AlfaceImg from '../../../assets/image/alface.jpg'
import MilhoImg from '../../../assets/image/milho.jpg'
import CenouraImg from '../../../assets/image/cenoura.jpg'
import FeijaoImg from '../../../assets/image/feijao.jpg'
import TomateImg from '../../../assets/image/tomate.jpg'
import PimentaoImg from '../../../assets/image/pimentao.jpg'


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
                    <img src={JoseSilva} alt="" className='image-agricultor' />
                    <div className='name-agricultor'>
                        <h2>Olá, José Silva</h2>
                        <p className='secondary-font'>***.***.**0-50</p>
                    </div>
                </section> 

                <section className='section-stepper'>
                    <div className='div-stepper'>
                        <Stepper/>
                    </div>

                    <div className='button-requests'>
                        <button onClick={PageRequestsDone}> Conferir Histórico</button>
                    </div>

                </section>

                <section className='requests-user'>
                    <div className='requests-user-message'>
                        <h2>
                            Visualize as sementes e grãos e solicite a desejada!
                        </h2>
                    </div>
                    <div className='seeds-grains'>
                        {/* futuramente aqui poderia ser um map */}
                        <div className="image-seed-grain">
                            <img src={MilhoImg} alt="imagem alface"/>
                            <h2>
                                Milho
                            </h2>
                            <button>solicitar</button>
                        </div>
                        <div className="image-seed-grain">
                            <img src={AlfaceImg} alt="imagem alface"/>
                            <h2>
                                Alface
                            </h2>
                            <button>solicitar</button>
                        </div>
                        <div className="image-seed-grain">
                            <img src={CenouraImg} alt="imagem alface"/>
                            <h2>
                                Cenoura
                            </h2>
                            <button>solicitar</button>
                        </div>
                        <div className="image-seed-grain">
                            <img src={FeijaoImg} alt="imagem alface"/>
                            <h2>
                                Feijão
                            </h2>
                            <button>solicitar</button>
                        </div>
                        <div className="image-seed-grain">
                            <img src={TomateImg} alt="imagem alface"/>
                            <h2>
                                Tomate
                            </h2>
                            <button>solicitar</button>
                        </div>
                        <div className="image-seed-grain">
                            <img src={PimentaoImg} alt="imagem alface"/>
                            <h2>
                                Pimentão
                            </h2>
                            <button>solicitar</button>
                        </div>
                    </div>
                </section>

                <section className='message-page'>
                    <div className='message'>
                        <p>
                            Conectando produtores, distribuidores e tecnologia para que a jornada da semente seja mais simples, transparente e eficiente. 
                        </p>
                    </div>
                    <div className='div-img-agricultor'>
                        
                    </div>
                </section>
            </main>

            <Footer/>
        </>
    )
}

export default UserPage;