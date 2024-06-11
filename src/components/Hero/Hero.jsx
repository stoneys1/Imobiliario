import React from 'react'
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup';

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                
                {/* lado 1 */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className="blue-circle">

                        </div>
                        <h1>Descubra<br/>
                        O Melhor Imóvel <br /> Para Você
                        </h1>
                    </div>
                

                    <div className="flexColStart hero-des">
                    <span className="secondaryText">Encontre uma variedade de propriedades que combinam com você com muita facilidade</span>
                    <span className="secondaryText">Esqueça todas as dificuldades em encontrar uma residência para você</span>
                    </div>

                    <div className="flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={25}/>
                        <input type="text" />
                        <button className="button">Procurar</button>
                    </div>

                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={9000} end={15000} duration={4}/>
                                <span>+</span>
                            </span>
                                <span className="secondaryText">Produtos Premium</span>
                        </div>

                    
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={1600} end={1950} duration={4}/>
                                <span>+</span>
                            </span>
                                <span className="secondaryText">Clientes Satisfeitos</span>
                        </div>
                   

                        <div className="flexColStart stat">
                            <span>
                                <CountUp  end={25}/>
                                <span>+</span>
                            </span>
                                <span className="secondaryText">Premios Imobiliários</span>
                        </div>
                    </div>


                </div>

                {/* lado 2 */}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;