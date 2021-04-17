import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Head from 'next/head'
import Container from '../components/Container';
import jws from 'jws';

//variables de entorno untilizando 'VirtualPost' como medio de pago
const apiKey = '63111FFB-9440-45A6-BDEF-93B2AF286LCA';
const secretKey = '65d62c09368c5d14bacdb784b6771bfdbad85a2c';
const cardVisaSuccess = {
    number: 4051885600446623,
    code: 123,
    date: '123',
    rut: '11.111.111-1',
    password: '123'
}
const cardMasterFail = {
    number: 5186059559590568,
    code: 123,
    date: '123',
    rut: '11.111.111-1',
    password: '123'
}
const endPoint = 'https://dev-api.virtualpos.cl/v2'
const endPointPay = 'https://dev-api.virtualpos.cl/v2/payment/request'


const Pay = (props)=> {
  const initialStateValues = {
    api_key: '12a4c9-357302-0586cf-a37762-c1aefc',
    email: '',
    social_id: '11.111.111-1',
    first_name: '',
    last_name: '',
    url_retorno: '',
    monto: '',
    buy_order: '',
    detalle: '',
    metodo_pago: '',
    s: 'a80aed8d9a078884174be019b9e11a0d'
  }
  const [values,setValues] = useState(initialStateValues);
  useEffect(()=>{
    setValues({...values, ['email']: JSON.parse(localStorage.getItem('session')).email})
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
  }

  //actualizar datos de la cuenta
  const handleSubmit =  async e =>{
    e.preventDefault();
    console.log(values);
    const signature = jws.sign({
      header:{alg:'ES256'},
      payload: '12a4c9-357302-0586cf-a37762-c1aefc',
      secret: 'a80aed8d9a078884174be019b9e11a0d'
    });


  }

  return (
    <Container>
      <Head>
        <title>Fukusuke | Pay</title>
      </Head>
      <div className="row">
          <form onSubmit={handleSubmit} className="col-lg-8 col-md-8 col-sm-12 mx-auto p-0 card">
              <div className="card-header">
                  <h5>Pagar pedido</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <label className="col-form-label col-lg-6 col-md-6 col-sm-12">Rut</label>
                  <input name="social_id" value={values.social_id} type="text" onChange={handleInputChange} className="form-control col"/>
                </div>
                <div className="row">
                  <label className="col-form-label col-lg-6 col-md-6 col-sm-12">Nombres</label>
                  <input name="first_name" value={values.first_name} onChange={handleInputChange} type="text" className="form-control col" />
                </div>
                <div className="row">
                  <label className="col-form-label col-lg-6 col-md-6 col-sm-12">Apellidos</label>
                  <input name="last_name" value={values.last_name} onChange={handleInputChange} type="text" className="form-control col" />
                </div>
                <div className="row">
                  <label className="col-form-label col-lg-6 col-md-6 col-sm-12">Correo</label>
                  <input name="email" value={values.email} onChange={handleInputChange} type="text" className="form-control col"/>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-end">
                <button type="submit" className="btn btn-danger sombra">Pagar</button>
              </div>
          </form>
      </div>
    </Container>
  )
}
  
  
  export default Pay;