import React from "react"
//import InstagramLogo from "../Footer/img/instagram.png"
import LogoWhatsApp from "../Content/img/whatsapp.png"
import ButtonWp from "../button";




const Footer = () => (
  <footer>
    <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <a className="" onClick={ButtonWp} alt="Logo para Whatsapp" title="Fale comigo">
                      <img src={LogoWhatsApp}/>
                    </a>
          <p className="text-center">Template Starter Gatsbyjs - Desenvolvido por Carlos Abreu - O Carioca Web - (21) 971025148 </p>


              <div id="box-footer-1">


              </div>
        </div>

    </div>
    </div>
  </footer>
)

export default Footer;
