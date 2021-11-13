import React from "react";
import Profile from "../Content/img/profile.png";
import JoannaCard1 from "../Content/img/joanna1.png";
import Joanna1 from "../Content/img/joanna1.jpg";
import TattooSec1 from "../Content/img/tattoo001.jpg"
import TattooSec2 from "../Content/img/tattoo002.jpg"
import TattooSec3 from "../Content/img/tattoo003.jpg"



import Tattoo from "../Content/img/tattoo01.jpg"
import Tattoo2 from "../Content/img/tattoo02.jpg"
import Tattoo3 from "../Content/img/tattoo03.jpg"


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
                                          <h1 className="text-center name-title-header">Urban Style</h1>
                                          <p className="text-center">The Vinil Culture</p>
                                          <h5 className="text-center"></h5>

                                          <div  className="row">
        <div  className="col-xs-12 col-sm-12 col-md-6 col-lg-6 sobre">
          <img src={Joanna1} className="foto-sobre animate__animated animate__backInLeft img-thumbnail" alt=""/>
      </div>

      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 sobre">

        <p className="text-left name-title-header animate__animated animate__backInRight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et gravida eros. Nunc eleifend eros enim, lacinia malesuada sem porta quis. Aliquam scelerisque ac magna vitae ultricies. Sed ut erat faucibus urna ultricies fermentum. Nam tincidunt tortor ut est fringilla, eget sodales erat venenatis. Integer maximus ipsum ipsum, in vulputate dui lobortis at. Praesent luctus diam eget malesuada aliquet. Etiam scelerisque feugiat ultrices. Praesent vitae tempor lectus, in viverra ante. Integer aliquam, nisi quis auctor viverra, sem lectus eleifend velit, et cursus justo lorem tempor urna. Sed lobortis mi a nulla accumsan, et scelerisque metus efficitur. Sed blandit sed eros nec congue. Nam eget nisl lorem. Suspendisse potenti. Integer ut cursus felis, maximus mollis metus. </p>


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
              <img src={TattooSec1} class="card-img-top" alt=""/>
              <div className="card-body">
                <h5 className="card-title">Hip Hop Style</h5>
                <p className="card-text">Make your beats.</p>
                <a href="#" className="btn btn-primary">Saiba mais...</a>
              </div>
            </div>


            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">

            <div className="card">
              <img src={TattooSec2} class="card-img-top" alt=""/>
              <div className="card-body">
              <h5 className="card-title">Hip Hop Style</h5>
              <p className="card-text">Make your beats.</p>
                <a href="#" className="btn btn-primary">Saiba mais...</a>
              </div>
            </div>


            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">

            <div className="card">
            <img src={TattooSec3} class="card-img-top" alt=""/>
              <div className="card-body">
              <h5 className="card-title">Hip Hop Style</h5>
              <p className="card-text">Make your beats.</p>
                <a href="#" className="btn btn-primary">Saiba mais...</a>
              </div>
            </div>
            </div>

          </div>
        </div>
      </section>
      <br/>
      <section id="conteudo-fotos-2">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">

            <div className="card">
              <img src={Tattoo} class="card-img-top" alt=""/>
              <div className="card-body">
                <h5 className="card-title">Hip Hop Style</h5>
                <p className="card-text">Make your beats.</p>
                <a href="#" className="btn btn-primary">Saiba mais...</a>
              </div>
            </div>


            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">

            <div className="card">
              <img src={Tattoo2} class="card-img-top" alt=""/>
              <div className="card-body">
              <h5 className="card-title">Hip Hop Style</h5>
              <p className="card-text">Make your beats.</p>
                <a href="#" className="btn btn-primary">Saiba mais...</a>
              </div>
            </div>


            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">

            <div className="card">
            <img src={Tattoo3} class="card-img-top" alt=""/>
              <div className="card-body">
              <h5 className="card-title">Hip Hop Style</h5>
              <p className="card-text">Make your beats.</p>
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
