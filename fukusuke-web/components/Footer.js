import Link from "next/link";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons' //FAS --> SOLIDO
import {faGithub} from '@fortawesome/free-brands-svg-icons' //FAB --> MARCA


const Footer = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-4 hide-print">
    <div className="container-fluid">
      <div className="d-flex">
        <Link href="/"><a className="navbar-brand">福助 Fukusuke</a></Link>
      </div>
      <div className="d-flex">
        <a href="https://github.com/Giraalexis/Fukusuke">
          <FontAwesomeIcon  icon={faGithub} style={{width: "2em", color: 'white'}}/>
        </a>
        
      </div>
      
    </div>
  </nav>
);

export default Footer;