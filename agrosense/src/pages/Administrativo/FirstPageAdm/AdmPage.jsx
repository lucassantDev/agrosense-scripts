import Logo from '../../../assets/image/agrosense-logo.png'
import Config from '../../../assets/icon/settings.svg';
import Footer from '../../../assets/components/Footer.jsx';

import Truck from '../../../assets/image/caminhao-icon.png'

import './AdmPage.css'

import { useNavigate } from 'react-router-dom';

function FirstPageAdm(){

    const navigate = useNavigate()

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
                    <div className="auto">
                        <img src={Truck} alt="imagem 3d de um caminhão" />
                    </div>
                    <div className="auto">
                        <img src={Truck} alt="imagem 3d de um caminhão" />
                    </div>
                    <div className="auto">
                        <img src={Truck} alt="imagem 3d de um caminhão" />
                    </div>
                    <div className="auto">
                        <img src={Truck} alt="imagem 3d de um caminhão" />
                    </div>
                </section>
            </main>

            <Footer/>
        </>

    )
}

export default FirstPageAdm;