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
    correo: ''
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
    <a className="nav-link " data-bs-toggle="modal" data-bs-target="#registerModal">Registrate</a>

    <div className="modal fade" id="registerModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Registrate</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <input name="rut" value={values.rut} onChange={handleInputChange} className="form-control" placeholder="Ingrese rut" type="text"/>
            <input name="nombre" value={values.nombre} onChange={handleInputChange} className="form-control mt-3" placeholder="Ingrese su nombre completo" type="text"/>
            <input name="direccion" value={values.direccion} onChange={handleInputChange} className="form-control mt-3" placeholder="Ingrese su direccion" type="text"/>
            <input name="region" value={values.region} onChange={handleInputChange} className="form-control mt-3" placeholder="Ingrese su region" type="text"/>
            <input name="provincia" value={values.provincia} onChange={handleInputChange} className="form-control mt-3" placeholder="Ingrese su provincia" type="text"/>
            <input name="comuna" value={values.comuna} onChange={handleInputChange} className="form-control mt-3" placeholder="Ingrese su comuna" type="text"/>
            <input name="fec_nac" value={values.fec_nac} onChange={handleInputChange} className="form-control mt-3" placeholder="Ingrese su fecha de nacimiento" type="date"/>
            <input name="sexo" value={values.sexo} onChange={handleInputChange} className="form-control mt-3" placeholder="Ingrese su sexo" type="text"/>
            <input name="correo" value={values.correo} onChange={handleInputChange} className="form-control mt-3" placeholder="Ingrese su correo electronico" type="email"/>
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