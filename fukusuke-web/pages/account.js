import Head from 'next/head'
import Container from '../components/Container';
import axios from 'axios'
import fetch from "isomorphic-unfetch";
import React, {useState, useEffect} from 'react'

const Account = (props)=> {
  const [values, setValues] = useState('');
  const [account,setAccount] = useState('');
  const [communes,setCommunes] = useState([]);
  useEffect(()=>{
    setAccount(JSON.parse(localStorage.getItem('session')));
    setValues(JSON.parse(localStorage.getItem('session')));
    const getCommunes = async () => { //obtener las comunas
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
    }else{
      let cleanTrim = value.trim();
      setValues({...values, [name]: cleanTrim})
    }
    console.log(values);
  }

  //actualizar datos de la cuenta
  const handleSubmit =  async e =>{
    e.preventDefault();
    const res = await axios.put(`http://localhost:8000/api/client-update/${account.id}`,values)
    console.log(res);
    if(res.status == 200){
      console.log("Update correct")
    }else{
      console.log("error al actualizar")
    }
  }

  return (
    <Container>
      <Head>
        <title>Fukusuke | Account</title>
      </Head>
      <div className="row mt-4">
        <form onSubmit={handleSubmit} className="col-lg-8 col-md-8 col-sm-12 mx-auto p-0 card">
          <div className="card-header">
            <h5>Cuenta</h5>
          </div>
          <div className="card-body">
            <div className="row ">
              <div className="col-lg-5 col-md-5 col-sm-12">
                <label className="col-form-label">Nombre</label>
              </div>
              <div className="col">
                <input name="name" onChange={handleInputChange} className="form-control" type="text" value={account.name}/>
              </div>
            </div>
            
            <div className="row mt-2">
              <div className="col-lg-5 col-md-5 col-sm-12">
                <label className="col-form-label">Rut</label>
              </div>
              <div className="col">
                <input name="rut" onChange={handleInputChange} className="form-control" type="text" value={account.rut}/>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-lg-5 col-md-5 col-sm-12">
                <label className="col-form-label">Fecha de nacimiento</label>
              </div>
              <div className="col">
                <input name="date_burn" onChange={handleInputChange} className="form-control" type="date" value={account.date_burn}/>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-lg-5 col-md-5 col-sm-12">
                <label className="col-form-label">Telefono</label>
              </div>
              <div className="col">
                <input name="telphone" onChange={handleInputChange} className="form-control" type="text" value={account.telphone}/>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-lg-5 col-md-5 col-sm-12">
                <label className="col-form-label">Correo electronico</label>
              </div>
              <div className="col">
                <input name="email" onChange={handleInputChange} className="form-control" type="text" value={account.email}/>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-lg-5 col-md-5 col-sm-12">
                <label className="col-form-label">Sexo</label>
              </div>
              <div className="col">
                <select name="sex" onChange={handleInputChange} className="form-select" type="text" value={account.sex}>
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
                <select name="commune" onChange={handleInputChange} className="form-select" type="text" value={account.commune}>
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
            <button className="btn btn-secondary" type="submit">Actualizar Datos</button>
          </div>
        </form>
      </div>
    </Container>
  )
}

//Peticiones 

export default Account;