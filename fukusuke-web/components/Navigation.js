import Link from "next/link";
import Login from './modal/Login';
import Register from './modal/Register';
import Cart from './Cart';
import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'

const Navigation = () => {
  const router = useRouter()
  const [isSession, setIsSession] = useState('');

  useEffect(() => { //si algo cambia en useState
    setIsSession(localStorage.getItem('session')) //refresca isSession con el valor de localstorage
  }, [])

  //cambiar el estado si el login es exitoso
  const onLogin = (param)=>{
    setIsSession(param)
    console.log(isSession);
  }
  //Cerrar sesion
  const logOut = ()=>{
    localStorage.setItem('session','');
    setIsSession('');
  }
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container-fluid">
        <Link href="/"><a className="navbar-brand">福助 Fukusuke</a></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
          <div className="nav navbar-nav align-items-start">
            <Link href="/"><a className={"nav-link "+(router.asPath == "/" ?" active" : "")}>Comprar</a></Link>
            <Link href="/about"><a className={"nav-link "+(router.asPath == "/about" ?" active" : "")}>Acerca de</a></Link>
          </div>
          <div className="nav navbar-nav align-items-start">
            <Cart/>
            {isSession //si esta logeado...
              ? <>
                  <a className="nav-link btn" onClick={()=> logOut()}>Cerrar Sesion</a>
                  <Link href="/account"><a className={"nav-link "+(router.asPath == "/account" ?" active" : "")}>Cuenta</a></Link>
                </>
              : <>
                  <Register/>
                  <Login onLogin={onLogin}/>
                </>
            }
          </div>
        </div>
      </div>
    </nav>
  )
};

export default Navigation;