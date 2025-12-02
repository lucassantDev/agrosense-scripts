import { useNavigate } from "react-router-dom";
import Footer from "../../../assets/components/Footer";

import Stepper04 from '../../../assets/components/Stepper04'
import Stepper from '../../../assets/components/Stepper'

import Logo from '../../../assets/image/agrosense-logo.png'
import Config from '../../../assets/icon/settings.svg';


function RequestDone(){

    const navigate = useNavigate()

    function ReturnPage(){
        navigate(-1)
    }

    function InSettings(){
        navigate()
    }

    return(
        <>
            <header className='header-agrosense'>
                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <img src={Logo} alt="logo AgroSense" style={{
                        width: '30px'
                    }} />
                    <h3 className='gradient-text'>
                        AgroSense
                    </h3>
                </div>

                <img src={Config} alt="icone de configuração" className='gradient-text' />
            </header>

            <div style={{
                width: '100%',
                height: '100px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <button className="see-requests" onClick={ReturnPage}>
                    Retornar
                </button>
            </div>

            <section style={{
                width: '100%',
                paddingBlock: '30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                gap: '20px',
                flexDirection: 'column'
            }}>
                <div className="last-request">
                    <div className='info-request'>
                        <h2>LOTE  #251030</h2>
                        <p>Feijão • Vitória</p>
                    </div>
                    <Stepper/>
                </div>
                <div className="last-request">
                    <div className='info-request'>
                        <h2>LOTE  #251002</h2>
                        <p>Pimentão • Vitória</p>
                    </div>
                    <Stepper04/>
                </div>
                <div className="last-request">
                    <div className='info-request'>
                        <h2>LOTE  #251002</h2>
                        <p>Milho • Vitória</p>
                    </div>
                    <Stepper04/>
                </div>
                <div className="last-request">
                    <div className='info-request'>
                        <h2>LOTE  #251002</h2>
                        <p>Alface • Vitória</p>
                    </div>
                    <Stepper04/>
                </div>
            </section>

            <Footer/>
        </>
    )
}

export default RequestDone;