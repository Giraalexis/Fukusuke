import React, {useState, useEffect} from 'react'

const Register = (props)=>{
  //Valores de los input inicialmente (estado inicial)
  const initialStateValues = {
    rut: '',
    nombre: '',
    direccion: '',
    region: '',
    provincia: '',
    comuna: '',
    fec_nac: '',
    sexo: '',
    correo: '',
    password: ''
  }
  //estado de valores
  const [values, setValues] = useState(initialStateValues);
  const [show, setShow] = useState(false); //show or hiden modal

  //cuando se escriba algo (onChange), guardar en el estado
  const handleInputChange = e=>{
    const {name, value} = e.target; //captura el nombre y el valor
    if(name =="nombre" || name == "direccion"){//aplicar trim en campos necesarios
      setValues({...values, [name]: value}) //añadir a lo existente, con el nombre, el valor.
    }else{
      let cleanTrim = value.trim();
      setValues({...values, [name]: cleanTrim})
    }
  }

  //cuando se realiza el submit en el form, se envia los datos para ser verificados
  const handleSubmit = e =>{
    e.preventDefault();
    
    handleClose() //cerrar modal
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
                <input name="nombre" value={values.nombre} onChange={handleInputChange} className="form-control" placeholder="Ingrese nombre completo" type="text" required/>  
              </div>
            </div>
            <input name="direccion" value={values.direccion} onChange={handleInputChange} className="form-control mt-3" placeholder="Ingrese su direccion" type="text" required/>
            <div className="row">
              <div className="col-4">
                <input name="region" value={values.region} onChange={handleInputChange} className="form-control mt-3" placeholder="Region" type="text" required/>
              </div>
              <div className="col-4">
                <input name="provincia" value={values.provincia} onChange={handleInputChange} className="form-control mt-3" placeholder="Provincia" type="text" required/>
              </div>
              <div className="col">
                <input name="comuna" value={values.comuna} onChange={handleInputChange} className="form-control mt-3" placeholder="Comuna" type="text" required/>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <select name="sexo" value={values.sexo} onChange={handleInputChange} className="form-select mt-3" required>
                  <option defaultValue >Ingrese su sexo</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                </select>
              </div>
              <div className="col-6">
                <input name="fec_nac" value={values.fec_nac} onChange={handleInputChange} className="form-control mt-3" placeholder="Ingrese su fecha de nacimiento" type="date" required/>
              </div>
            </div>
            <input name="correo" value={values.correo} onChange={handleInputChange} className="form-control mt-3" placeholder="Ingrese su correo electronico" type="email" required/>
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