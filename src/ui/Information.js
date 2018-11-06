import React, {Fragment} from 'react';
import './Information.css';
import Git from './assets/git.png';

const Information =() => {
    return (
        <Fragment>
            <section id="information">
                <h2>MAIS INFORMAÇÕES</h2>
                <p>Outras informações sobre mim.</p>
                <div className="container">
                    <div className="row">
                        <div id="col" className="col-xl-6 col-md-12 col-sm-12">
                            <h3>BIOGRAFIA</h3>  
                            <p>
                                No final do ano de 2012 terminei o ensino médio no Colégio Águia Master em Cornélio Procópio. 
                                No meio do ano de 2013 decidi ingressar no curso de Análise e Desenvolvimento de Sistema na UTFPR campus de Cornçelio Procópio,
                                por ser um curso que me atraiu e ser uma universidade renomada como a UTFPR.
                                No ano de 2014 comecei a trabalhar nas Lojas Salfer SA, onde permaneci até o meio do ano de 2015.
                                Iniciei meu estágio na prefeitura Municipal de Cornélio Procópio no ano de 2017, com a conclusão para o final de 2018.
                            </p>
                        </div>
                        <div id="col" className="col-xl-6 col-md-12 col-sm-12">
                            <h3>MEU CONTATO COM A PROFISSÃO</h3>
                            <p>
                                No início do curso não tive muito envolvimento com a área de programação por trabalhar em outra área,
                                mas, após iniciar o estágio , comecei a utilizar e reconhecer os conhecimentos obtidos na universidade.

                            </p>
                        </div>
                    </div>
                 </div>
                 <div id="git">
                    <a href="https://github.com/lothavio" target="_blank"><img  src={Git} width="64" height="64" /></a>
                    <h4>GITHUB</h4>
                    <p style={{textAlign:"center"}}>Veja alguns dos meus projetos no GitHub.</p>
                 </div>
            </section>
            
        </Fragment>
    );
}

export default Information;