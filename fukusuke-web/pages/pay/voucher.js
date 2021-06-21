import React, {useState, useEffect, createContext} from 'react'
import { useRouter } from "next/router";
import Router from "next/router";
import axios from 'axios'
import Head from 'next/head'
import Container from '../../components/Container';

const WebpayPlus = require('transbank-sdk').WebpayPlus;
const Environment = require('transbank-sdk').Environment;
WebpayPlus.commerceCode = 597055555532;
WebpayPlus.apiKey = '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C';
WebpayPlus.environment = Environment.Integration;
export async function getServerSideProps(ctx){
  const token = ctx.query.token;
  const idClient = ctx.query.idClient
  const adress = ctx.query.adress
  try{
    const response = await WebpayPlus.Transaction.commit(token);

    //Crear Boleta-----------------------------------------
    const date = new Date()
    const fecha = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()

    const dataBoletaCreate = {
      fecha: fecha,
      total: response.amount,
      employee: 101,
      client: idClient,
      payment: 1,
      token: token,
    }
    let resBoleta = ''
    try{
      resBoleta = await axios.post(`http://168.138.144.35:8000/api/ticket-create`,dataBoletaCreate)
    }catch(e){
      resBoleta = await axios.post(`http://localhost:8000/api/ticket-create`,dataBoletaCreate)
    }
    //const resBoleta = await axios.post(`http://localhost:8000/api/ticket-create`,dataBoletaCreate)
    console.log(resBoleta)

    //Crea orden de despacho--------------------------------
    const dataOrderCreate = {
      adress: adress,
      state: 0,
      ticket: resBoleta.data.id
    }
    let resDespatch = ''
    try{
      resDespatch = await axios.post(`http://168.138.144.35:8000/api/orderdispatch-create`,dataOrderCreate)
    }catch(e){
      resDespatch = await axios.post(`http://localhost:8000/api/orderdispatch-create`,dataOrderCreate)
    }
    //const resDespatch = await axios.post(`http://localhost:8000/api/orderdispatch-create`,dataOrderCreate)
    console.log(resDespatch)
    //Enviar Comprobante al correo----------------------------------
    let sendEmailPay = ''
    let dataEmailSend = {
      nro_boleta: resBoleta.data.id,
      nro_orden : resDespatch.data.id
      fecha: resBoleta.data.fecha,
      total: resBoleta.data.total,

    }
    try{
      sendEmailPay = await axios.post(`http://168.138.144.35:8000/api/client-send-payed/${resBoleta.data.id}`, dataEmailSend)
    }catch(e){
      sendEmailPay = await axios.post(`http://localhost:8000/api/client-send-payed/${resBoleta.data.id}`, dataEmailSend)
    }

    //Enviar parametros (props) al componente-----------------------
    return {
      props:{
        response : response,
        token: token,
        resBoleta: resBoleta.data
      }
    }
  }catch(e){
    const response = '';
    return {
      props:{
        response : response,
        token: token
      }
    }
  }
  
  
}


const Voucher = (props)=> {
  const [values,setvalues] = useState(props.response);
  useEffect(()=>{

    const sendDataBD = async() =>{
      const cartLocal = JSON.parse(localStorage.getItem('cart'));
      
      //Guarda el detalle boleta--------------------------------------------
      for (let i = 0; i < cartLocal.length; i++) {
        let dataDetailCreate = {
          name: cartLocal[i].name,
          amout: cartLocal[i].cant,
          sub_total: cartLocal[i].cant * cartLocal[i].price,
          product: cartLocal[i].id,
          ticket: props.resBoleta.id
        }
        let resDetalle = ''
        try{
          resDetalle = await axios.post(`http://168.138.144.35:8000/api/saildetail-create`,dataDetailCreate)
        }catch(e){
          resDetalle = await axios.post(`http://localhost:8000/api/saildetail-create`,dataDetailCreate)
        }
        //let resDetalle = await axios.post(`http://localhost:8000/api/saildetail-create`,dataDetailCreate)
        console.log(resDetalle);

        //Actualizar Stock del producto-------------------------------------
        let dataUpdateStock = {
          name: cartLocal[i].name,
          description: cartLocal[i].description,
          promotion: cartLocal[i].promotion,
          stock: (cartLocal[i].stock - cartLocal[i].cant),
          price: cartLocal[i].price,
          state: cartLocal[i].state,
          image: cartLocal[i].image
        }
        let resStock = ''
        try{
          resStock = await axios.put(`http://168.138.144.35:8000/api/product-update/${cartLocal[i].id}`,dataUpdateStock)
        }catch(e){
          resStock = await axios.put(`http://localhost:8000/api/product-update/${cartLocal[i].id}`,dataUpdateStock)
        }
        //let resStock = await axios.put(`http://localhost:8000/api/product-update/${cartLocal[i].id}`,dataUpdateStock)
        console.log(resStock)
      }

      //Limpia el Local Storage-------------------------------------------
      localStorage.removeItem('response');
      localStorage.removeItem('cart');
    }

    if(values){
      sendDataBD();
    }
  },[])

  return (
    <Container>
      <Head>
        <title>Fukusuke | Pay Detail</title>
      </Head>
      <div className="row mt-4">
        {
          !values
          ? <>
              <div className="col-lg-10 col-md-10 colsm-12 card p-0 pt-4 pb-4 mx-auto">
                <h4 className="mx-auto">Transacción Fallida</h4>
              </div>
            </>
           
          : <>
              <div className="col-lg-10 col-md-10 col-sm-12 card p-0 mx-auto">
                <div id="imp1">
                  <div className="card-header">
                    <h4>Pago Finalizado</h4>
                  </div>
                  <div className="card-body">
                  <div className="row">
                    <h6 className="col-6">Transacción</h6>
                    <h6 className="col">{values.vci == 'TSY'? 'Exitosa' : 'Fallida'}</h6>
                  </div>
                  <div className="row">
                    <h6 className="col-6">Monto</h6>
                    <h6 className="col">$ {values.amount || ''}</h6>
                  </div>
                  <div className="row">
                    <h6 className="col-6">Fecha</h6>
                    <h6 className="col">{values.transaction_date.substr(0,10) || ''}</h6>
                  </div>
                  <div className="row">
                    <h6 className="col-6">ID Cliente</h6>
                    <h6 className="col">{values.session_id || ''}</h6>
                  </div>
                  <div className="row">
                    <h6 className="col-6">Código de Transacción</h6>
                    <h6 className="col">{values.authorization_code || ''}</h6>
                  </div>
                  <div className="row">
                    <h6 className="col-6">Código de Tarjeta</h6>
                    <h6 className="col">{values.card_detail.card_number || ''}</h6>
                  </div>
                  <div className="row">
                    <h6 className="col-6">Tipo de Pago</h6>
                    <h6 className="col">{values.payment_type_code || ''}</h6>
                  </div>
                  </div>
                </div>
                
                <div className="card-footer hide-print d-flex justify-content-end">
                  <button className="btn btn-success hide-print"
                    onClick={() => {window.print()}}
                    >
                    Imprimir
                  </button>
                </div>
              </div>
            </>
        }
      </div>
    </Container>
  )
}

export default Voucher;