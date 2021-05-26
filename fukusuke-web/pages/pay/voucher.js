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
  try{
    const response = await WebpayPlus.Transaction.commit(token);
    return {
      props:{
        response : response,
        token: token
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
      const client = JSON.parse(localStorage.getItem('session'));
      const cartLocal = JSON.parse(localStorage.getItem('cart'));
      const adressLocal = JSON.parse(localStorage.getItem('adress'));
      const date = new Date()
      let fecha = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()
      //Crea Boleta
      const resBoleta = await axios.post(`http://localhost:8000/api/ticket-create`,{
        fecha: fecha,
        total: values.amount,
        employee: 101,
        client: client.id,
        payment: 1,
        token: props.token,
      })
      console.log(resBoleta)
      //Guarda el detalle boleta
      for (let i = 0; i < cartLocal.length; i++) {
        let res = await axios.post(`http://localhost:8000/api/saildetail-create`,{
          name: cartLocal[i].name,
          amout: cartLocal[i].cant,
          sub_total: cartLocal[i].cant * cartLocal[i].price,
          product: cartLocal[i].id,
          ticket: resBoleta.data.id
        })
        console.log(res);
        //Actualizar Stock del producto
        let resStock = await axios.put(`http://localhost:8000/api/product-update/${cartLocal[i].id}`,{
          name: cartLocal[i].name,
          description: cartLocal[i].description,
          promotion: cartLocal[i].promotion,
          stock: (cartLocal[i].stock - cartLocal[i].cant),
          price: cartLocal[i].price,
          state: cartLocal[i].state,
          image: cartLocal[i].image
        })
        
      }
      //Crea orden de despacho
      const resDespatch = await axios.post(`http://localhost:8000/api/orderdispatch-create`,{
        adress: adressLocal,
        state: 0,
        ticket: resBoleta.data.id
      })
      console.log(resDespatch)

      //Limpia el Local Storage
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
                  <h6 className="col-6">Orden de Compra</h6>
                  <h6 className="col">{values.buy_order || ''}</h6>
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
                <div className="card-footer">

                </div>
              </div>
            </>
        }
      </div>
    </Container>
  )
}

export default Voucher;