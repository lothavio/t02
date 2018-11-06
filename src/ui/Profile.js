import React from 'react';
import foto from './assets/foto.jpg';
import curriculo from './Curriculum.pdf';
import './Intro.css';


const Profile = (props) => {
    return (
        <section id="perfil">
            <div id="presentation">
                <div className="container" >
                    <div className="row">
                        <div >
                            <img id="foto" src={foto} width="300" height="400" />
                            <p style={{ paddingTop: 50 }}>Oi, eu sou o Luis Othavio de Souza, estudante de Análise e Desenvolvimento de Sistemas
                            na Universidade Tecnológica Federal do Paraná Campus Cornélio Procópio.</p>
                            <a href={curriculo} target="_blank" download="Curriculum.pdf"><button>CURRÍCULO</button></a>
                        </div>
                    </div>
                </div>
            </div>

            <section id="perfil">
                <div>
                    <h1 id="name">{props.name.toUpperCase()}</h1>
                    <h2 >DETALHES</h2>
                    <div className="interesses">
                        <h3>Interesses</h3>
                        <ul>
                            <li>Desenvolvimento mobile</li>
                            <li>Redes de computação</li>
                            <li>Games</li>
                            <li>Novas Tecnologias</li>
                            <li>Hardwares em gerais</li>
                        </ul>
                    </div>
                    <div className="idiomas">
                        <h3>Idiomas</h3>
                        <ul>

                            <li>Português</li>
                            <li>Espanhol - Básico</li>
                            <li>Inglês - Intermediário</li>
                            
                        </ul>
                    </div>
                    <div className="formation">
                        <h3>Formação</h3>
                        <ul>
                            <li>2012 - Ensino Médio - Colégio Águia Master</li>
                            <li>2019 - Tecnologia em Análise e Desenvolvimento de Sistemas - Universidade Tecnológica Federal do Paraná</li>                            
                        </ul>
                    </div>
                    <div className="idiomas">
                        <h3>Atividades</h3>
                        <ul>
                            <li>Estagiário na Prefeitura Municipal de Cornélio Procópio</li>
                            <li>Aluno da Univeridade Tecnológica Federal do Paraná</li>
                        </ul>
                    </div>
                </div>



            </section>
        </section>
    );
}

export default Profile;