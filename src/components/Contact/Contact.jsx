import React from "react";
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'
import {HiChatBubbleBottomCenter} from  'react-icons/hi2'
const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                <div className="flexColStart c-left">
                    <span className="blueText">Nosso Contato</span>
                    <span className="primaryText">Entre em contato e compre agora</span>
                    <span className="secondaryText">Contate-nos facilmente! Oferecemos diversos canais de comunicação para atender às suas necessidades. Estamos aqui para ajudar, seja por telefone, email ou redes sociais</span>
                
                    <div className="flexColStart contactModes">
                        <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="blueText">Ligar</span>
                                        <span className="secondaryText">011 9 6332 8131</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Ligar Agora</div>
                            </div>


                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="blueText">Chat</span>
                                        <span className="secondaryText">Bot Duvidas</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Aqui</div>
                            </div>


                         
                        </div>
                    </div>



                    <div className="flexStart row">
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="blueText">video call</span>
                                        <span className="secondaryText">Via Teams</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Video Chamada Agora</div>
                            </div>


                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25}/>
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className="blueText">Mensagem</span>
                                        <span className="secondaryText">013 9 42235781</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">Chat Aqui (Litoral)</div>
                            </div>
                    
                    </div>


                </div>

                <div className="c-right">
                    <div className="image-container">
                        <img src="/aa.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;