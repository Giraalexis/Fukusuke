import React, {useState, useEffect} from 'react'
import axios from 'axios';
const Register = (props)=>{
  //Valores de los input inicialmente (estado inicial)
  const initialStateValues = {
    name: '',
    adress: '',
    rut: '',
    date_burn: '',
    telphone: '',
    email: '',
    password: '',
    state: false,
    sex: '',
    commune: ''
  }
  //estado de valores
  const [values, setValues] = useState(initialStateValues);
  const [show, setShow] = useState(false); //show or hiden modal

  //cuando se escriba algo (onChange), guardar en el estado
  const handleInputChange = e=>{
    const {name, value} = e.target; //captura el nombre y el valor
    if(name =="name" || name == "adress"){//aplicar trim en campos necesarios
      setValues({...values, [name]: value}) //añadir a lo existente, con el nombre, el valor.
    }else{
      let cleanTrim = value.trim();
      setValues({...values, [name]: cleanTrim})
    }
  }

  //cuando se realiza el submit en el form, se envia los datos para ser verificados
  const handleSubmit = e =>{
    e.preventDefault();
    console.log(values);
    //let res = axios.post(`http://localhost:8000/api/client-create`,values)
    //console.log(res.data);
    //handleClose() //cerrar modal
  }

  //cerrar modal
  const handleClose = () => { //bootstrap no me cierra automatico el modal :c
    let modal = document.querySelector("#close-modal-register")
    modal.setAttribute("data-bs-dismiss","modal")
    modal.click();
    setShow(false)
  }
  //abrir modal
  const handleShow = () => { 
    let modal = document.querySelector("#close-modal-register")
    modal.setAttribute("data-bs-dismiss","")
    setShow(true)
   };

  return(
  <>
    <a onClick={handleShow} className="nav-link btn" data-bs-toggle="modal" data-bs-target="#registerModal">Registrate</a>

    <div className={"modal fade "+(show? 'show': '')} id="registerModal" tabIndex="-1" aria-labelledby="registerModal" aria-hidden="true">
      <div className="modal-dialog">
        <form onSubmit={handleSubmit} className="modal-content" >
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Registrate</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-6">
                <input name="rut" value={values.rut} onChange={handleInputChange} className="form-control col-6" placeholder="Ingrese rut" type="text" required/>
              </div>
              <div className="col">
                <input name="name" value={values.name} onChange={handleInputChange} className="form-control" placeholder="Ingrese nombre completo" type="text" required/>  
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <input name="adress" value={values.adress} onChange={handleInputChange} className="form-control mt-3" placeholder="Ingrese su direccion" type="text" required/>
              </div>
              <div className="col-6">
                <input name="commune" value={values.commune} onChange={handleInputChange} className="form-control mt-3" placeholder="Comuna" type="text" required/>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <input name="telphone" value={values.telphone} onChange={handleInputChange} className="form-control mt-3" placeholder="Telefono" type="text" required/>
              </div>
              <div className="col">
                <input name="email" value={values.email} onChange={handleInputChange} className="form-control mt-3" placeholder="Correo electronico" type="email" required/>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <select name="sex" value={values.sex} onChange={handleInputChange} className="form-select mt-3" required>
                  <option defaultValue >Ingrese su sexo</option>
                  <option value="1">Masculino</option>
                  <option value="2">Femenino</option>
                </select>
              </div>
              <div className="col-6">
                <input name="date_burn" value={values.date_burn} onChange={handleInputChange} className="form-control mt-3" placeholder="Ingrese su fecha de nacimiento" type="date" required/>
              </div>
            </div>
            <input name="password" value={values.password} onChange={handleInputChange} className="form-control mt-3" placeholder="Ingrese su contraseña" type="password" required/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="submit" id="close-modal-register" className="btn btn-primary"  >Registrar</button>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}
export default Register;