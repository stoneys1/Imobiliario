import React from 'react';
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
const Header = () => {
    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">

                <img src="./logo.png" alt="logo"  width={100} />

                <div className=" flexCenter h-menu">
                    <a href="">Residencias</a>
                    <a href="">Valores</a>
                    <a href="">Contatem-nos</a>
                    <a href="">Inicio</a>
                    <button className="button">
                    <a>Clique Aqui</a>
                    </button>
                </div>
            </div>
            <div className="menu-icon">
                <BiMenuAltRight size={30}/>
            </div>
        </section>
    );
};

export default Header;