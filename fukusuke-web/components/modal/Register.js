import React, {useState, useEffect} from 'react'
import axios from 'axios';
import fetch from "isomorphic-unfetch";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  validate, clean, format, getCheckDigit } from 'rut.js';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUserPlus,faTimes} from '@fortawesome/free-solid-svg-icons' //FAS --> SOLIDO
//import {} from '@fortawesome/free-brands-svg-icons' //FAB --> MARCA

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
    password2: '',
    state: false,
    sex: '',
    commune: ''
  }

  //estado de valores
  const [values, setValues] = useState(initialStateValues);
  const [show, setShow] = useState(false); //show or hiden modal
  const [communes,setCommunes] = useState([]);


  //obtener las comunas
  const getCommunes = async () => { 
    let res = ''
    try{
      res = await fetch('http://168.138.144.35:8000/api/commune-list');
    }catch(e){
      res = await fetch('http://localhost:8000/api/commune-list');
    }
    //const res = await fetch('http://localhost:8000/api/commune-list');
    const communesJSON = await res.json();
    setCommunes(communesJSON);
  };

  //cuando se escriba algo (onChange), guardar en el estado
  const handleInputChange = e=>{
    const {name, value} = e.target; //captura el nombre y el valor
    if(name =="name" || name == "adress"){//aplicar trim en campos necesarios
      setValues({...values, [name]: value}) //añadir a lo existente, con el nombre, el valor.
    }
    else if (name=="rut"){
      setValues({...values, [name]: format(value)})
    }
    else{
      let cleanTrim = value.trim();
      setValues({...values, [name]: cleanTrim})
    }
  }

  //cuando se realiza el submit en el form, se envia los datos para ser verificados
  const handleSubmit =  async e =>{
    e.preventDefault();
    if(!validate(values.rut)){
      toast.warning("Ingrese un rut valido",{
        position:"top-center",
        autoClose: 4000,
        hideProgressBar: true
      });
    }else{
      if(values.password == values.password2){
        let res = ''
        try{
          res = await axios.post(`http://168.138.144.35:8000/api/client-create`,values)
        }catch(e){
          res = await axios.post(`http://localhost:8000/api/client-create`,values)
        }
        //const res = await axios.post(`http://localhost:8000/api/client-create`,values)
        if(res.status == 200){
          toast.success("Cuenta creada, le enviamos un correo para validar cuenta",{
            position:"top-center",
            autoClose: 5000,
            hideProgressBar: true
          });
          handleClose() //cerrar modal
        }else{
          toast.error("Error al registrar cuenta",{
            position:"top-center",
            autoClose: 2000,
            hideProgressBar: true
          });
        }
      }else{
        toast.warning("Las contraseñas no son iguales",{
          position:"top-center",
          autoClose: 2000,
          hideProgressBar: true
        });
      }
    }
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
    <a onClick={handleShow,getCommunes} className="nav-link btn d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#registerModal">
      <FontAwesomeIcon  icon={faUserPlus} style={{width: "1.2em",marginRight:'5px'}}/>
      Regístrate
    </a>

    <div className={"modal fade "+(show? 'show': '')} id="registerModal" tabIndex="-1" aria-labelledby="registerModal" aria-hidden="true">
      <div className="modal-dialog" style={{marginTop: '15vh'}}>
        <form onSubmit={handleSubmit} className="modal-content" >
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Regístrate</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-6">
                <input name="rut" value={values.rut} onChange={handleInputChange} className="form-control col-6" placeholder="Ingrese su Rut" type="text" required/>
              </div>
              <div className="col">
                <input name="name" value={values.name} onChange={handleInputChange} className="form-control" placeholder="Ingrese nombre completo" type="text" required/>  
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <input name="adress" value={values.adress} onChange={handleInputChange} className="form-control mt-3" placeholder="Ingrese su dirección" type="text" required/>
              </div>
              <div className="col-6">
                <select name="commune" value={values.commune} onChange={handleInputChange} className="form-select mt-3" placeholder="Comuna" required>
                <option defaultValue >Ingrese su Comuna</option>
                  { 
                    communes.map(commune =>{                 
                      return(
                        <option key={commune.id} value={commune.id}>{commune.name}</option>
                      )
                    })
                  }
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <input name="telphone" value={values.telphone} onChange={handleInputChange} className="form-control mt-3" placeholder="Teléfono" type="text" required/>
              </div>
              <div className="col">
                <input name="email" value={values.email} onChange={handleInputChange} className="form-control mt-3" placeholder="Correo electrónico" type="email" required/>
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
            <div className="row">
              <div className="col-6">
                <input name="password" value={values.password} onChange={handleInputChange} className="form-control mt-3" placeholder="Ingrese su contraseña" type="password" required/>
              </div>
              <div className="col">
                <input name="password2" id="password2" value={values.password2} onChange={handleInputChange} className="form-control mt-3" placeholder="Repetir contraseña" type="password" required/>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary d-flex justify-content-center align-items-center" data-bs-dismiss="modal">
              <FontAwesomeIcon  icon={faTimes} style={{width: "1.0em",height:'1em',marginRight:'5px'}}/>
              Cerrar
            </button>
            <button type="submit" id="close-modal-register" className="btn btn-success d-flex justify-content-center align-items-center"  >
              <FontAwesomeIcon  icon={faUserPlus} style={{width: "1.0em",marginRight:'5px'}}/>
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  </>
  )
}
export default Register;