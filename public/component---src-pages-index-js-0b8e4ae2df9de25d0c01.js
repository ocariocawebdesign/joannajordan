"use strict";(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[678],{814:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var r=a(7294),c=(a.p,a.p,a.p,function(){return r.createElement("header",null,r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-xs-12 col-sm-12 col-md-6 col-lg-6"}),r.createElement("div",{id:"box-header-2",className:"col-xs-12 col-sm-12 col-md-6 col-lg-6 "}),r.createElement("div",null))))}),n=a.p+"static/profile-c470b452bc742342a7edf8690d187347.png";function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}var o="_2R-kh",s="_wPDyp",m="_vzTHL",i="_3xnQP",d="_3lhLL",E=function(e){var t,a;function c(t){var a;return(a=e.call(this,t)||this).state={feeds:[],isError:"",isLoaded:!1},a}a=e,(t=c).prototype=Object.create(a.prototype),t.prototype.constructor=t,l(t,a);var n=c.prototype;return n.componentDidMount=function(){var e=this,t="https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url&&access_token="+this.props.token;fetch(t).then((function(e){return e.json()})).then((function(t){t.hasOwnProperty("error")?e.setState({isLoaded:!0,isError:!0}):e.setState({isLoaded:!0,feeds:t.data,isError:!1})})).catch((function(t){console.error("Error:",t),e.setState({isLoaded:!0,isError:!0,error:t})}))},n.render=function(){var e=this.state,t=e.isError,a=e.isLoaded,c=e.feeds;return t?r.createElement("div",{className:d},r.createElement("p",null," the access token is not valid")):a?(console.log(c),r.createElement("div",{className:o},c.slice(0,this.props.counter).map((function(e,t){return r.createElement("div",{key:t,className:s},r.createElement("a",{key:t,href:e.permalink,className:"ig-instagram-link",target:"_blank",rel:"noreferrer"},"IMAGE"===e.media_type||"CAROUSEL_ALBUM"===e.media_type?r.createElement("img",{className:m,key:t,src:e.media_url,alt:"description"}):r.createElement("video",{className:m,key:t,src:e.media_url,type:"video/mp4"}),r.createElement("div",{className:i},r.createElement("div",{className:"instagram-count-item"},r.createElement("span",{className:"icon"},r.createElement("svg",{height:"18",viewBox:"0 0 512 512",width:"18"},r.createElement("path",{fill:"currentColor",d:"m256 386c-71.683 0-130-58.317-130-130 7.14-172.463 252.886-172.413 260 .001 0 71.682-58.317 129.999-130 129.999zm0-220c-49.626 0-90 40.374-90 90 4.944 119.397 175.074 119.362 180-.001 0-49.625-40.374-89.999-90-89.999zm236 346h-472c-11.046 0-20-8.954-20-20v-472c0-11.046 8.954-20 20-20h472c11.046 0 20 8.954 20 20v472c0 11.046-8.954 20-20 20zm-452-40h432v-432h-432zm372-392c-11.046 0-20 8.954-20 20 0 11.046 8.954 20 20 20 11.046 0 20-8.954 20-20 0-11.046-8.954-20-20-20z"})))))))})))):r.createElement("div",null," Loading... ")},c}(r.Component),u=function(){return r.createElement("div",{className:"container"},r.createElement("main",null,r.createElement("section",{id:"conteudo"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},r.createElement("section",{id:"conteudo-1"},r.createElement("div",{className:"row"},r.createElement("div",{id:"block-1",className:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},r.createElement("div",{className:"box-1 box-content_primary_1 "},r.createElement("div",{className:"img-profile-center"},r.createElement("img",{className:"img-profile",src:n,alt:"Foto perfil"})),r.createElement("h1",{className:"text-center"},"O Carioca Web Design"),r.createElement("p",{className:"text-center"},"Desenvolvedor de Web sites Front-End | HTML5 / CSS3 / Bootstrap / Javascript / Wordpress. "),r.createElement("div",{id:"container-instagram-feed"},r.createElement(E,{className:"col-xs-12 col-sm-12 instagram-imgs",token:"IGQVJVb3BQanBHMGlxT3V0b2xhNzFSNVFKQThEa2JUSU15TzhKYzJ0Yy1oTlZARM2VyM0NyelY2UFBnbU9mSlhMeVNkYk1NVlJBTUJHTWE2MUFCMmt1NGZAFS2l4bEFOZAW15UU1yU1ZAJU25tNFNUX0psbgZDZD",counter:"12"}),r.createElement("br",null),r.createElement("strong",null,"(21) 971025148 "))))))))),r.createElement("section",{id:"conteudo-fotos"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"})))))},p=function(){return r.createElement("footer",null,r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-12"},r.createElement("p",{className:"text-center"},"Template Starter Gatsbyjs - Desenvolvido por Carlos Abreu - O Carioca Web - (21) 971025148 "),r.createElement("div",{id:"box-footer-1"})))))},v=function(){return r.createElement(r.Fragment,null,r.createElement(c,null),r.createElement(u,null),r.createElement(p,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-0b8e4ae2df9de25d0c01.js.map