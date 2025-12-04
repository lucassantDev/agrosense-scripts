import Logo from '../../../assets/image/agrosense-logo.png'
import Config from '../../../assets/icon/settings.svg';
import Footer from '../../../assets/components/Footer.jsx';

import './FirstPageAdm.css'

import RelatorioIcone from '../../../assets/icon/icone-relatorio.svg'
import SolicitacaoIcone from '../../../assets/icon/icone-solicitacao.svg'
import BoxImg from '../../../assets/image/box-agrosense.png';
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

            <section className="user-requests">
                    <div className='flex-img-user'>

                        <div className='img-user'>
                            {/* imagem de Bruno Vieira */}
                        </div>

                        <div className='name-user'>
                            <h2>Olá, Bruno Vieira</h2>
                            <p>***.***.*89-15</p>
                        </div>
                    </div>
            </section>

            <section className='actions'>
                <div className="actions-adm">
                    <img src={SolicitacaoIcone} alt="icone referente solicitações"  style={{
                        width: '200px'
                    }}/>
                    <button className='button-actions'>Solicitações</button>
                </div>
                <div className="actions-adm">
                    <img src={RelatorioIcone} alt="icone referente a relatório" style={{
                        width: '150px'
                    }}/>
                    <button className='button-actions'>Relatório</button>
                </div>
            </section>

            <section className='box-section'>
                    
                <div className='name-section'>
                    <div className="box">
                        Lotes
                    </div>
                </div>

                <div className='single-box'>
                    <div className="box-location">
                        <div className='box-place'>
                            <img src={BoxImg} alt="icone de caixa" style={{
                                width: '145px'
                            }} />
                            <p>Feijão</p>
                        </div>
                        <p className='description-box'><span>Destino:</span> Vitória</p>
                        <button className="see-description">
                                Conferir
                        </button>
                    </div>

                    <div className="box-location">
                        <div className='box-place'>
                            <img src={BoxImg} alt="icone de caixa" style={{
                                width: '145px'
                            }} />
                            <p>Feijão</p>                            
                        </div>
                        <p className='description-box'><span>Destino:</span> Vitória</p>
                        <button className="see-description">
                                Conferir
                        </button>

                    </div>

                    <div className="box-location">
                        <div className='box-place'>
                            <img src={BoxImg} alt="icone de caixa" style={{
                                width: '145px'
                            }} />
                            <p>Arroz</p>
                        </div>
                        <p className='description-box'><span>Destino:</span> Garanhuns</p>
                        <button className="see-description">
                                Conferir
                        </button>
                    </div>

                    <div className="box-location">
                        <div className='box-place'>
                            <img src={BoxImg} alt="icone de caixa" style={{
                                width: '145px'
                            }} />
                            <p>Pimentão Verde</p>
                        </div>
                        <p className='description-box'><span>Destino:</span> Garanhuns</p>
                        <button className="see-description">
                                Conferir
                        </button>
                    </div>
                </div>
            </section>

            <section>
                 <div className='name-section'>
                    <div className="box">
                        Acompanhamento
                    </div>
                </div>

                <div className='truck-place'>

                    <div className='send-truck'>
                        <div className='truck-img'>
                            {/* img aqui */}
                        </div>
                        <div>
                            <h3 className='secondary-font' >#251023 - Lote Vitória</h3>
                            <p className='secondary-font'>
                                Saiu do centro de <br /> distribuição
                            </p>
                            <p className='secondary-font'>
                                07:21 AM
                            </p>
                        </div>
                    </div>

                    <div className='send-truck'>
                        <div className='truck-img'>
                            {/* img aqui */}
                        </div>
                        <div>
                            <h3 className='secondary-font' >#251023 - Lote Vitória</h3>
                            <p className='secondary-font'>
                                Em preparação
                            </p>
                            <p className='secondary-font'>
                                --:--
                            </p>
                        </div>
                    </div>

                    <div className='send-truck'>
                        <div className='truck-img'>
                            {/* img aqui */}
                        </div>
                        <div>
                            <h3 className='secondary-font' >#251023 - Lote Vitória</h3>
                            <p className='secondary-font'>
                                Em preparação
                            </p>
                            <p className='secondary-font'>
                                --:--
                            </p>
                        </div>
                    </div>

                    <div className='send-truck'>
                        <div className='truck-img'>
                            {/* img aqui */}
                        </div>
                        <div>
                            <h3 className='secondary-font' >#251023 - Lote Vitória</h3>
                            <p className='secondary-font'>
                                Aguardando confirmação
                            </p>
                            <p className='secondary-font'>
                                --:--
                            </p>
                        </div>
                    </div>

                </div>



            </section>
            <section></section>
            <Footer/>
        </>

    )
}

export default FirstPageAdm;