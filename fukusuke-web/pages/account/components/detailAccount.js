import axios from 'axios'
import fetch from "isomorphic-unfetch";
import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  validate, clean, format, getCheckDigit } from 'rut.js';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faSyncAlt} from '@fortawesome/free-solid-svg-icons' //FAS --> SOLIDO
//import {} from '@fortawesome/free-brands-svg-icons' //FAB --> MARCA

const DetailAccount = (props)=> {

  
  const [values, setValues] = useState('Error al Cargar');
  const [communes,setCommunes] = useState([]);

  useEffect(()=>{
    //Obtener Datos de Cliente
    const getAccount = async () =>{
      const id = JSON.parse(localStorage.getItem('session')).id
      let res = ''
      try{
        res = await axios.get('http://168.138.144.35:8000/api/client-detail/'+id)
      }catch(e){
        res = await axios.get('http://localhost:8000/api/client-detail/'+id)
      }
      //const res = await axios.get('http://localhost:8000/api/client-detail/'+id)
      setValues(res.data);
    }
    getAccount();
    
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
    getCommunes();
  },[])

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

  //actualizar datos de la cuenta
  const handleSubmit =  async e =>{
    e.preventDefault();
    if(!validate(values.rut)){
      toast.warning("Ingrese un rut valido",{
        position:"top-center",
        autoClose: 4000,
        hideProgressBar: true
      });
    }else{
      try{
        let res = ''
        try{
          res = await axios.put(`http://168.138.144.35:8000/api/client-update/${values.id}`,values)
        }catch(e){
          res = await axios.put(`http://localhost:8000/api/client-update/${values.id}`,values)
        }
        //const res = await axios.put(`http://localhost:8000/api/client-update/${values.id}`,values)
        console.log(res);
        if(res.status == 200){
          localStorage.setItem('session',JSON.stringify(values))
          toast.success("Se han actualizado los datos",{
            position:"top-center",
            autoClose: 4000,
            hideProgressBar: true
          });
        }else{
          toast.error("Error al actualizar datos",{
            position:"top-center",
            autoClose: 4000,
            hideProgressBar: true
          });
        }
      }catch(e){
        toast.error("Error al actualizar datos",{
          position:"top-center",
          autoClose: 4000,
          hideProgressBar: true
        });
      }
      
    }
    
  }

  return (
    <div className="row mt-4">
      <form onSubmit={handleSubmit} className="col-lg-10 col-md-10 col-sm-12 mx-auto p-0 card">
          <div className="card-header bg-secondary d-flex align-items-center">
            <FontAwesomeIcon  icon={faUser} style={{width: "1em",marginRight:'5px', color: 'white'}}/>
            <h5 className="card-title text-white m-0">Cuenta</h5>
          </div>
          <div className="card-body">
            <div className="row ">
                <div className="col-lg-5 col-md-5 col-sm-12">
                  <label className="col-form-label">Nombre</label>
                </div>
                <div className="col">
                  <input name="name" onChange={handleInputChange} className="form-control" type="text" value={values.name || 'Cargando...'}/>
                </div>
            </div>
            
            <div className="row mt-2">
                <div className="col-lg-5 col-md-5 col-sm-12">
                <label className="col-form-label">Rut</label>
                </div>
                <div className="col">
                <input name="rut" onChange={handleInputChange} className="form-control" type="text" value={values.rut || 'Cargando...'}/>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-lg-5 col-md-5 col-sm-12">
                <label className="col-form-label">Contraseña</label>
                </div>
                <div className="col">
                <input name="password" onChange={handleInputChange} className="form-control" type="password" value={values.password || 'Cargando...'}/>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-lg-5 col-md-5 col-sm-12">
                <label className="col-form-label">Fecha de nacimiento</label>
                </div>
                <div className="col">
                <input name="date_burn" onChange={handleInputChange} className="form-control" type="date" value={values.date_burn || ''}/>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-lg-5 col-md-5 col-sm-12">
                <label className="col-form-label">Teléfono</label>
                </div>
                <div className="col">
                <input name="telphone" onChange={handleInputChange} className="form-control" type="text" value={values.telphone || 'Cargando...'}/>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-lg-5 col-md-5 col-sm-12">
                <label className="col-form-label">Correo electrónico</label>
                </div>
                <div className="col">
                <input name="email" onChange={handleInputChange} className="form-control" type="text" value={values.email || 'Cargando...'}/>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-lg-5 col-md-5 col-sm-12">
                <label className="col-form-label">Sexo</label>
                </div>
                <div className="col">
                <select name="sex" onChange={handleInputChange}  className="form-select" type="text" value={values.sex} defaultValue={'default'}>
                    <option value="default"  disabled hidden>Cargando...</option>
                    <option value="1">Masculino</option>
                    <option value="2">Femenino</option>
                </select>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-lg-5 col-md-5 col-sm-12">
                <label className="col-form-label">Comuna</label>
                </div>
                <div className="col">
                <select name="commune" onChange={handleInputChange} selected="selected" className="form-select" type="text" value={values.commune} defaultValue={'default'}>
                    <option value="default" disabled hidden>Cargando...</option>
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

            <div className="row mt-2">
                <div className="col-lg-5 col-md-5 col-sm-12">
                <label className="col-form-label">Dirección</label>
                </div>
                <div className="col">
                <input name="adress" onChange={handleInputChange} className="form-control" type="text" value={values.adress || 'Cargando...'}/>
                </div>
            </div>

            <div className=" d-flex justify-content-end mt-3">
              <button type="submit" className="btn btn-secondary" >
                <FontAwesomeIcon  icon={faSyncAlt} style={{width: "1em",marginRight:'5px', color: 'white'}}/>
                Actualizar Datos
              </button>
            </div>
          </div>
      </form>
    </div>
  )
}


export default DetailAccount;