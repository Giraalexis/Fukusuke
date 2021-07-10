import Link from "next/link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope,faPhoneAlt} from '@fortawesome/free-solid-svg-icons' //FAS --> SOLIDO
import {faGithub,faFacebook,faTwitter} from '@fortawesome/free-brands-svg-icons' //FAB --> MARCA


const Footer = () => (
  <nav style={{marginTop:'100px'}} className="navbar navbar-expand-lg navbar-dark bg-dark  pt-4 hide-print">
    <div className="container-fluid row align-items-start justify-content-around  m-4 mt-2 text-center">
      <div className="col-lg-4 col-md-6 col-sm-12">
        <h5 className="text-white ">Contacto</h5>
        <div className="d-flex align-items-center justify-content-center mt-2">
          <FontAwesomeIcon  icon={faEnvelope} style={{width: "1.5em", color: 'white',marginRight:'10px'}}/>
          <p className="text-white mb-1">gameduoc123@gmail.com</p>
        </div>
        <div className="d-flex align-items-center justify-content-center mt-2">
          <FontAwesomeIcon  icon={faPhoneAlt} style={{width: "1.5em", color: 'white',marginRight:'10px'}}/>
          <p className="text-white mb-0">+56993916828</p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <h5 className="text-white ">Tienda Online</h5>
        <p className="text-white">Compra desde tu celular, computadora o cualquier dispositivo sin salir de tu casa</p>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <h5 className="text-white">Redes Sociales</h5>
        <div className="">
          <a href="https://github.com/Giraalexis/Fukusuke" target="_blank" style={{paddingRight:'10px'}}>
            <FontAwesomeIcon  icon={faGithub} style={{width: "2em", color: 'white'}}/>
          </a>
          <a href="https://facebook.com" target="_blank" style={{paddingRight:'10px'}}>
            <FontAwesomeIcon  icon={faFacebook} style={{width: "2em", color: 'white'}}/>
          </a>
          <a href="https://twitter.com" target="_blank" style={{paddingRight:'10px'}}>
            <FontAwesomeIcon  icon={faTwitter} style={{width: "2em", color: 'white'}}/>
          </a>
        </div>
        
      </div>
      
    </div>
  </nav>
);

export default Footer;