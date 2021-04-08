import Register from './Register'
import React, {useState, useEffect} from 'react'

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
  const handleSubmit = e =>{
    e.preventDefault(); //prevenir recarga pagina
    //enviar datos a api y verificar si existe (FALTA IMPLEMENTARLO AUN)
    localStorage.setItem('session',JSON.stringify(values))//crear session en localstorage
    handleClose(); //cerrar modal
    props.onLogin(values);//enviar datos al 'navigation' para que cambie estados
  }

  //cerrar modal
  const handleClose = () => {
    let backdrop = document.getElementsByClassName('modal-backdrop');
    let modal = document.getElementById('loginModal');
    modal.style = '';
    backdrop[0].remove()
    setShow(false)
  }
  //abrir modal
  const handleShow = () => setShow(true);

  return(
    <div>
      <a className="nav-link btn" data-bs-toggle="modal" data-bs-target="#loginModal" onClick={handleShow}>Iniciar Sesion</a>

      <div className={"modal fade "+(show? 'show': '')}  id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <form className="modal-content" onSubmit={handleSubmit}>
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
              <button type="submit" className="btn btn-primary" >Continuar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  )
}
export default Login;