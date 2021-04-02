import React, {useState, useEffect} from 'react'

const Register = ()=>{
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
  //Utilidad que nos permite manejar los valores por un estado
  const [values, setValues] = useState(initialStateValues);

  //cuando se escriba algo (onChange), guardar en el estado
  const handleInputChange = e=>{
    //captura el nombre y el valor 
    const {name, value} = e.target;
    //Definir valores del estado actual (Guarda lo escrito)
    //añadir a lo existente, con el nombre, el valor.
    setValues({...values, [name]: value})
  }

  //cuando se realiza el submit en el form, se envia los datos para ser verificados
  const handleSubmit = e =>{
    e.preventDefault();
    console.log(values);
  }

  return(
  <>
    <a className="nav-link btn" data-bs-toggle="modal" data-bs-target="#registerModal">Registrate</a>

    <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <form className="modal-content" onSubmit={handleSubmit}>
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
              <div className="col">
                <input name="fec_nac" value={values.fec_nac} onChange={handleInputChange} className="form-control mt-3" placeholder="Ingrese su fecha de nacimiento" type="date" required/>
              </div>
            </div>
            <input name="correo" value={values.correo} onChange={handleInputChange} className="form-control mt-3" placeholder="Ingrese su correo electronico" type="email" required/>
            <input name="password" value={values.password} onChange={handleInputChange} className="form-control mt-3" placeholder="Ingrese su contraseña" type="password" required/>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="submit" className="btn btn-primary">Registrar</button>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}
export default Register;