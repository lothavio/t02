import React, { Fragment } from 'react';
import './Style.css';
import './Blog.css';


const Blog = () => {
    return (
        <Fragment>
            <section id="blog">
                <h2>BLOG</h2>
                <p>Veja abaixo alguns posts sobre Tecnologia.</p>
               
                    <div class="column">
                        <div class="column-float">
                            <article class="post">
                                <div>
                                    <h4>Perfis do Facebook Hackeados têm mensagens privadas colocadas à venda.</h4>
                                    <div>
                                        <a href="https://g1.globo.com/economia/tecnologia/noticia/2018/11/02/perfis-do-facebook-sao-hackeados-e-tem-mensagens-privadas-colocadas-a-venda.ghtml" target="_blank" ><button>NOTÍCIA</button></a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div class="column">
                        <div class="column-float">
                            <article class="post">
                                <div>
                                    <h4>Bitcoin completa seus primeiros 10 anos.</h4>
                                    <div>
                                        <a href="https://g1.globo.com/economia/tecnologia/noticia/2018/10/31/bitcoin-a-maior-das-criptomoedas-completa-dez-anos.ghtml" target="_blank"><button>NOTÍCIA</button></a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div class="column">
                        <div class="column-float">
                            <article class="post">
                                <div>
                                    <h4>Apple anuncia preço dos novos iPonhe.</h4>
                                    <div>
                                        <a href="https://g1.globo.com/economia/tecnologia/noticia/2018/10/30/apple-anuncia-precos-dos-novos-iphone-xs-xs-max-e-xr-no-brasil.ghtml" target="_blank"><button>NOTÍCIA</button></a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                

            </section>
        </Fragment>
    );
}

export default Blog;