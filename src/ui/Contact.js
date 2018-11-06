import React, { Fragment } from 'react';
import './Contact.css';
import Facebook from './assets/facebook.png';
import Linkedin from './assets/linkedin.png';
import instagram from './assets/instagram.png';


const Contact = () => {
    return (
        <Fragment>
            <section id="contact">
                <h2>CONTATO</h2>
                <p>Entre em contato comigo pelo formulário abaixo ou pelo e-mail tatopasquetto@gmail.com.</p>
                <div className="container">
                    <form action="https://formspree.io/tatopasquetto@gmail.com" method="POST" >
                        <div className="wpcf7-form">
                            <p>
                                <span class="wpcf7-form your-name">
                                    <input type="text" name="your-name" placeholder="Nome" />
                                </span>
                            </p>
                        </div>
                        <div className="wpcf7-form">
                            <p>
                                <span>
                                    <input type="email" name="Email" placeholder="Email" />
                                </span>
                            </p>
                        </div>
                        <div className="wpcf7-form">
                            <p>
                                <span>
                                    <input type="text"  name="Subject" placeholder="Assunto" />
                                </span>
                            </p>
                        </div>
                        <div className="wpcf7-form">
                            <p>
                                <span>
                                    <textarea name="your-message" cols="40" rows="10" placeholder="Mensagem"></textarea>

                                </span>
                            </p>
                        </div>
                        <button type="submit" value="send">ENVIAR</button>
                    </form>
                </div>
                <div className="contact-div">

                    <h2>Redes Socias</h2>
                    <span >
                        <a  href="https://www.facebook.com/luisothavio.desouza" target="_blank"><img src={Facebook} /></a>
                        <a  href="https://www.instagram.com/l_othavio/" target="_blank"><img src={instagram} /></a>
                        <a  href="https://www.linkedin.com/in/luis-othavio-de-souza-a802a7120/" target="_blank"><img src={Linkedin} /></a>
                    </span>


                </div>
            </section>

        </Fragment>
    );
}

export default Contact;