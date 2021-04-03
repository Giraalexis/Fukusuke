import Link from "next/link";
import Login from './modal/Login'
import Register from './modal/Register'

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container-fluid">
      <Link href="/"><a className="navbar-brand">福助 Fukusuke</a></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
        <div className="nav navbar-nav">
          <Link href="/"><a className="nav-link">Home</a></Link>
        </div>
        <div className="nav navbar-nav">
          <Login/>
          <Register/>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;