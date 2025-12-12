import { Navigate, useNavigate, useNavigation } from 'react-router-dom';
import './FirstPageAgricultor.css';


import Logo from '../../../assets/image/agrosense-logo.png'
import Config from '../../../assets/icon/settings.svg';


import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';


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

            <Footer/>
        </>
    )
}

export default UserPage;