import Register from './Register'
import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Login = (props)=>{
  //Valores de los input inicialmente (estado inicial)
  const initialStateValues = {
    correo: '',
    password: '',
  };
    
  //Manejo de estados de valores
  const [values, setValues] = useState(initialStateValues);
  const [show, setShow] = useState(false); //show or hiden modal

  //Guardar el estado de lo escrito en input
  const handleInputChange = e=>{
    const {name, value} = e.target;//Captura el nombre y el valor 
    let cleanTrim = value.trim(); //limpia espaciados
    setValues({...values, [name]: cleanTrim}) //Añadir a lo existente, con el nombre, el valor.
  }

  //cuando se realiza el submit en el form
  const handleSubmit = async e =>{
    e.preventDefault(); //prevenir recarga pagina
    try{
      const res = await axios.get('http://localhost:8000/api/client-search-email/'+values.correo) //enviar datos a api y verificar si existe, devolvera datos del usuario
      const client = res.data;
      console.log(client.email);
      if(client.email == values.correo && client.password == values.password){
        if(!client.state){ //para probar, lo dejo falso ,SE DEBE CAMBIAR
          console.log('login exitoso')
          localStorage.setItem('session',JSON.stringify(client))//guarda sesion con los datos del cliente
          handleClose(); //cerrar modal
          props.onLogin(values);//enviar datos al 'navigation' para que cambie estados
        }else{
          console.log('debe validar correo')
        }
      }else{
        console.log('error de login')
      }
    }catch(e){
      console.log(e);
      console.log('Cuenta no existe')
    }
  }

  //cerrar modal
  const handleClose = () => { //bootstrap no me cierra automatico el modal :c
    let modal = document.querySelector("#close-modal-login")
    modal.setAttribute("data-bs-dismiss","modal")
    modal.click();
    setShow(false)
  }
  //abrir modal
  const handleShow = () => { 
    let modal = document.querySelector("#close-modal-login")
    modal.setAttribute("data-bs-dismiss","")
    setShow(true)
   };

  return(
    <div>
      <a onClick={handleShow} className="nav-link btn" data-bs-toggle="modal" data-bs-target="#loginModal">Iniciar Sesion</a>

      <div className={"modal fade "+(show? 'show': '')}  id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <form onSubmit={handleSubmit} className="modal-content" >
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Iniciar Sesion</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <input name="correo" value={values.correo} onChange={handleInputChange} className="form-control " placeholder="Ingrese su correo" type="email" required/>
              <input name="password" value={values.password} onChange={handleInputChange} className="form-control mt-3" placeholder="Ingrese su contraseña" type="password" required/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="submit" id="close-modal-login" className="btn btn-primary" >Continuar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  )
}
export default Login;