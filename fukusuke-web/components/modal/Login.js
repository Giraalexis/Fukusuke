import Register from './Register'
import React, {useState, useEffect} from 'react'

const Login = ()=>{
  //Valores de los input inicialmente (estado inicial)
  const initialStateValues = {
    correo: '',
    password: '',
  }

  //Manejo de estados de valores
  const [values, setValues] = useState(initialStateValues);

  //Guardar el estado de lo escrito en input
  const handleInputChange = e=>{
    //Captura el nombre y el valor 
    const {name, value} = e.target;
    //Definir valores del estado actual (Guarda lo escrito)
    //Añadir a lo existente, con el nombre, el valor.
    setValues({...values, [name]: value})
  }
  //cuando se realiza el submit en el form, se envia los datos para ser verificados
  const handleSubmit = e =>{
    e.preventDefault();
    console.log(values);
  }
  return(
    <div>
      <a className="nav-link btn" data-bs-toggle="modal" data-bs-target="#loginModal">Iniciar Sesion</a>

      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
              <button type="submit" className="btn btn-primary">Continuar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    
  )
}
export default Login;