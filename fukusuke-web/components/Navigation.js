import Link from "next/link";
import Login from './modal/Login';
import Register from './modal/Register';
import Cart from './Cart';
import { useRouter } from 'next/router'
import React, {useState, useEffect} from 'react'
import Router from "next/router";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSignOutAlt,faUsersCog,faStore,faBuilding} from '@fortawesome/free-solid-svg-icons' //FAS --> SOLIDO
//import {} from '@fortawesome/free-brands-svg-icons' //FAB --> MARCA

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
    toast.info("Hasta luego",{
      position:"top-center",
      autoClose: 2000,
      hideProgressBar: true
    });
    //Redireccionar a inicio
    console.log("redireccionar a inicio")
    Router.push('/');
  }

  return(
    <nav className="navbar navbar-expand-lg navbar-light bg-warning ">
      <div className="container-fluid">
        <Link href="/"><a className="navbar-brand">福助 Fukusuke</a></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNavAltMarkup">
          <div className="nav navbar-nav align-items-start">
            <Link href="/"><a className={"nav-link"+(router.asPath == "/" ?" active" : "")}>
              <FontAwesomeIcon  icon={faStore} style={{width: "1.2em",marginRight:'5px'}}/>
              Comprar</a>
            </Link>
            <Link href="/about"><a className={"nav-link"+(router.asPath == "/about" ?" active" : "")}>
              <FontAwesomeIcon  icon={faBuilding} style={{width: "1.2em",marginRight:'5px'}}/>
              Acerca de</a>
            </Link>
          </div>
          <div className="nav navbar-nav align-items-start">
            <Cart/>
            {isSession //si esta logeado...
              ? <>
                  <Link href="/account"><a className={"nav-link d-flex justify-content-center align-items-center"+(router.asPath == "/account" ?" active" : "")}>
                    <FontAwesomeIcon  icon={faUsersCog} style={{width: "1.2em",marginRight:'5px'}}/>
                    Cuenta</a>
                  </Link>

                  <a className="nav-link btn d-flex justify-content-center align-items-center" onClick={()=> logOut()}>
                    <FontAwesomeIcon  icon={faSignOutAlt} style={{width: "1.2em",marginRight:'5px'}}/>
                    Cerrar Sesión
                    </a>

                </>
              : <>
                  <Register />
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