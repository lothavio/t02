import React from 'react';
import './Geral.css';


const Menu = () => {
    return (
        <header>
        <div className="container">
            <div id="navbar-nav">
                <nav id="menu" className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <ul id="menu-ul" className="navbar-nav" >
                        <li className="nav-item active">
                            <a id="teste" className="nav-link" href="#">HOME</a>
                        </li>
                        <li className="nav-item active">
                            <a id="teste" className="nav-link" href="#perfil">PERFIL</a>
                        </li>
                        <li className="nav-item active">
                            <a id="teste" className="nav-link" href="#skills">HABILIDADES</a>
                        </li>
                        <li className="nav-item active">
                            <a id="teste" className="nav-link" href="#blog">BLOG</a>
                        </li>
                        <li className="nav-item active">
                            <a id="teste" className="nav-link" href="#portifolio">PORTFÓLIO</a>
                        </li>
                        <li className="nav-item active">
                            <a id="teste" className="nav-link" href="#information">INFORMAÇÕES</a>
                        </li>
                        <li className="nav-item active">
                            <a id="teste" className="nav-link" href="#contact">CONTATO</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        </header>
    );
};

export default Menu;