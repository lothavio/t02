import React, { Component } from "react";
import Menu from './ui/Menu';
import Perfil from './ui/Profile';
import Skills from './ui/Skills';
import Blog from './ui/Blog';
import Portifolio from './ui/Portifolio';
import Footer from './ui/Footer';
import Information from './ui/Information';
import Contact from './ui/Contact';


class App extends Component{
  render(){
    return (
      <div>
        <Menu />
        <Perfil name="Luis Othavio de Souza" />
        <Skills />
        <Blog />
        <Portifolio />
        <Information />
        <Contact />
        <Footer name="Luis Othavio de Souza " curso="Tecnologia em Análise e Desenvolvimento de Sistema" email="tatopasquetto" provedor="@gmail.com" tel="(043)98423-9311"/>
        
      </div>
    );
  }
} 

export default App;
