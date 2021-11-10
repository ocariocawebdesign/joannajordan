import React from "react";
import Profile from "../Content/img/profile.png";
import JoannaCard1 from "../Content/img/joanna1.png";
import Joanna1 from "../Content/img/joanna1.jpg";


import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'
import { DiscussionEmbed } from 'disqus-react';
//https://www.npmjs.com/package/react-modal-video


const Content = () => (
  
  <div className="container">
    <main>

    <section id="conteudo">
      <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

            
              <section id="conteudo-1">
                  <div className="row">
                      <div id="block-1" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <div className="box-1 box-content_primary_1 ">
                                    <div className="img-profile-center">
                                          <img
                                            className="img-profile animate__animated animate__zoomIn"
                                            src={Profile}
                                            alt="Foto perfil"
                                          />
                                      </div>
                                          <h1 className="text-center name-title-header">Joanna Jordan</h1>
                                          <p className="text-center">🏆 Bicampeã Wellness</p>
                                          <h5 className="text-center"></h5>

                                          <div  className="row">
        <div  className="col-xs-12 col-sm-12 col-md-6 col-lg-6 sobre">
          <img src={Joanna1} className="foto-sobre animate__animated animate__backInLeft" alt=""/>
      </div>

      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 sobre">

        <p className="text-left name-title-header animate__animated animate__backInRight">Joanna Jordan, hoje trabalha como personal trainner em várias academias do Rio de Janeiro e tem como principal desafio levar saúde as pessoas.<br/>
        Sua paixão pelo esporte nasceu cedo quando ainda era adolescente. Participou de diversos campeonatos sempre se destacando.<br/> <cite>O esporte salvou minha vida!</cite></p><brr/>
        

      </div>
      </div>
      <br/>
      <br/> 
                              <p className="name-title-header">Me siga no instagram</p>
                                          <div id="container-instagram-feed">
                                          <InstagramFeed className="col-xs-12 col-sm-12 instagram-imgs" token={'IGQVJVb3BQanBHMGlxT3V0b2xhNzFSNVFKQThEa2JUSU15TzhKYzJ0Yy1oTlZARM2VyM0NyelY2UFBnbU9mSlhMeVNkYk1NVlJBTUJHTWE2MUFCMmt1NGZAFS2l4bEFOZAW15UU1yU1ZAJU25tNFNUX0psbgZDZD'}  counter="12"/>
                                          <br/>
                                         
                            
                                          </div>
                                          

                          </div>

                      </div>
                  </div>
              </section>
                 
          </div>
      </div>

      


    </section>
      <section id="conteudo-fotos">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
            
            <div className="card">
              <img src={JoannaCard1} class="card-img-top" alt=""/>
              <div className="card-body">
                <h5 className="card-title">Treinos</h5>
                <p className="card-text">Ganhe massa magra em pouco tempo de teino. Faço e acompnhaho seus treinos.</p>
                <a href="#" className="btn btn-primary">Saiba mais...</a>
              </div>
            </div>
        
            
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">

            <div className="card">
              <img src={JoannaCard1} class="card-img-top" alt=""/>
              <div className="card-body">
                <h5 className="card-title">Nutrição</h5>
                <p className="card-text">Coma sem engorgar com minha dicas e receitas fitness</p>
                <a href="#" className="btn btn-primary">Saiba mais...</a>
              </div>
            </div>


            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">

            <div className="card">
            <img src={JoannaCard1} class="card-img-top" alt=""/>
              <div className="card-body">
                <h5 className="card-title">Físico e mental</h5>
                <p className="card-text">O equilíbrio e o mais importante para um corpo e mente saudável.</p>
                <a href="#" className="btn btn-primary">Saiba mais...</a>
              </div>
            </div>
            </div>

          </div>
        </div>
      </section>

      
      <section>
      <div className="row">
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

        


      <DiscussionEmbed 
        shortname='ocariocaweb'
        config={
          {
              url: 'http://localhost:8000/',
              identifier: 0,
              title: 'comentarios com react',
              language: 'pt_BR' //e.g. for Traditional Chinese (Taiwan)	
          }
      }
  />
  </div>
  </div>
      </section>
    </main>
  </div>
);

export default Content;
