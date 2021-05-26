import axios from 'axios'
import fetch from "isomorphic-unfetch";
import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  validate, clean, format, getCheckDigit } from 'rut.js';

const DetailAccount = (props)=> {
  const initialStateValues = {
    name: '',
    adress: '',
    rut: '',
    date_burn: '',
    telphone: '',
    email: '',
    password: '',
    password2: '',
    state: true,
    sex: '',
    commune: ''
  }
  const [values, setValues] = useState(initialStateValues);
  const [communes,setCommunes] = useState([]);

  useEffect(()=>{
    //Obtener Datos de Cliente
    const getAccount = async () =>{
      const id = JSON.parse(localStorage.getItem('session')).id
      const res = await axios.get('http://localhost:8000/api/client-detail/'+id)
      setValues(res.data);
    }
    getAccount();
    
    //obtener las comunas
    const getCommunes = async () => { 
      const res = await fetch('http://localhost:8000/api/commune-list');
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
        const res = await axios.put(`http://localhost:8000/api/client-update/${values.id}`,values)
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
          <div className="card-header">
            <h5>Cuenta</h5>
            </div>
            <div className="card-body">
            <div className="row ">
                <div className="col-lg-5 col-md-5 col-sm-12">
                <label className="col-form-label">Nombre</label>
                </div>
                <div className="col">
                <input name="name" onChange={handleInputChange} className="form-control" type="text" value={values.name || ''}/>
                </div>
            </div>
            
            <div className="row mt-2">
                <div className="col-lg-5 col-md-5 col-sm-12">
                <label className="col-form-label">Rut</label>
                </div>
                <div className="col">
                <input name="rut" onChange={handleInputChange} className="form-control" type="text" value={values.rut || ''}/>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-lg-5 col-md-5 col-sm-12">
                <label className="col-form-label">Contraseña</label>
                </div>
                <div className="col">
                <input name="password" onChange={handleInputChange} className="form-control" type="password" value={values.password || ''}/>
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
                <input name="telphone" onChange={handleInputChange} className="form-control" type="text" value={values.telphone || ''}/>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-lg-5 col-md-5 col-sm-12">
                <label className="col-form-label">Correo electrónico</label>
                </div>
                <div className="col">
                <input name="email" onChange={handleInputChange} className="form-control" type="text" value={values.email || ''}/>
                </div>
            </div>

            <div className="row mt-2">
                <div className="col-lg-5 col-md-5 col-sm-12">
                <label className="col-form-label">Sexo</label>
                </div>
                <div className="col">
                <select name="sex" onChange={handleInputChange} className="form-select" type="text" value={values.sex || '1'}>
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
                <select name="commune" onChange={handleInputChange} className="form-select" type="text" value={values.commune || '1'}>
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

            </div>
            <div className="card-footer d-flex justify-content-end">
            <button type="submit" className="btn btn-secondary" >Actualizar Datos</button>
          </div>
      </form>
    </div>
  )
}


export default DetailAccount;