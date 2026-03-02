import Logo from '../../../assets/image/agrosense-logo.png'
import Config from '../../../assets/icon/settings.svg';
import Footer from '../../../assets/components/Footer.jsx';

import Truck from '../../../assets/image/caminhao-icon.png';
import Box from '../../../assets/image/box-agrosense.png';
import './AdmPage.css';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function FirstPageAdm(){

    const navigate = useNavigate()

    function InSettings(){
        navigate('/Configuracoes/Settings')
    }

    const [ships] = useState([
        {
            id: 1,
            number: '201023',
            to: 'Vitória',
            message: 'Saiu do centro de distribuição',
            hour: '07:21 AM',
            image: Truck
        },
        {
            id: 2,
            number: '201023',
            to: 'Garanhuns',
            message: 'Em preparação',
            hour: '--:--',
            image: Truck
        },
        {
            id: 3,
            number: '201023',
            to: 'Garanhuns',
            message: 'Em preparação',
            hour: '--:--',
            image: Truck
        },
        {
            id: 4,
            number: '201023',
            to: 'Águas Belas',
            message: 'Aguardando confirmação',
            hour: '--:--',
            image: Truck
        },
    ])

    const [allotment] = useState([
        {
            id: 1,
            grain: 'Fejão',
            destination: 'Vitória',
            image: Box
        },
        {
            id: 2,
            grain: 'Arroz',
            destination: 'Garanhuns',
            image: Box
        },
        {
            id: 3,
            grain: 'Fejão',
            destination: 'Garanhuns',
            image: Box
        },
        {
            id: 4,
            grain: 'Pimentão Verde',
            destination: 'Águas Belas',
            image: Box
        }
    ])

    return (
        <>
            <header className='header-agrosense'>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <img src={Logo} alt="logo AgroSense" style={{
                        width: '30px'
                    }} />
                    <h3 className='gradient-text secondary-font'>
                        AgroSense
                    </h3>
                </div>

                <img src={Config} alt="icone de configuração" className='gradient-text' onClick={InSettings} />
            </header>
            <main>
                <section className='section-adm-actions xAndY'>
                    <div className="adm-actions"></div>
                    <div className="adm-actions"></div>
                </section>
                <section className='section-ship xAndY'>
                    {
                        ships.map(ship=>(
                            <div className='div-ship'>
                                <img src={ship.image} className='truck' alt="imagem 3d caminhão" />
                                <div className='ship-info'>
                                    <p className='number-map secondary-font'>#{ship.number} - {ship.to}</p>
                                    <p className='message-map secondary-font'>{ship.message}</p>
                                    <p className='hour-map secondary-font'>
                                        {ship.hour}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </section>
            </main>

            <Footer/>
        </>

    )
}

export default FirstPageAdm;