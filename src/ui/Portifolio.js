import React, { Fragment } from 'react';
import './Portifolio.css';

const Portifolio = () => {
    return (
        <section id='portifolio'>
            <h2>PORTIFÓLIO</h2>
            <p>Alguns dos meus trabalhos desenvolvidos</p>

            <div class="column column-portifolio">
                <div class="column-float">
                    <article class="post">
                        <div>
                            <h4>Sistema de gerenciamento de Ordem de Serviço.</h4>
                            <div>
                                <a href="https://github.com/lothavio/SGOS" target="_blank" ><button>GITHUB</button></a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            <div class="column column-portifolio">
                <div class="column-float">
                    <article class="post">
                        <div>
                            <h4>Página para o Portifólio pessoal</h4>
                            <div>
                                <a href="https://github.com/lothavio/t02" target="_blank"><button>GITHUB</button></a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

            <div class="column column-portifolio">
                <div class="column-float">
                    <article class="post">
                        <div>
                            <h4>Bolão de Campeonato de League of Legends</h4>
                            <div>
                                <a href="https://github.com/lothavio/BolaoDoLolzim" target="_blank"><button>GITHUB</button></a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>

        </section>

    );
}

export default Portifolio;