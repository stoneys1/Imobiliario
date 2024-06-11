import React from "react";
import './Footer.css';
const Footer = () => {
    return (
        <section className="f-wrapper">
            <div className="paddings innerWidth flexCenter f-container">

                <div className="flexColStart f-left">
                    <img src="./logo2.png" alt="" width={120} />

                    <span className="secondaryText">
                        Nossa visão é transformar a vida de todas as pessoas <br />
                        Começando pelo Lar.
                    </span>
                </div>

                <div className="flexColStart f-right">
                    <span className="blueText">Nosso Endereço</span>
                    <span className="secondaryText">Alameda Jundiaí 247, Alphaville, SP </span>

                    <div className="flexCenter f-menu">
                        <span>Residências</span>
                        <span>Valores</span>
                        <span>Contatem-nos</span>
                        <span>Sobre Nós</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer;