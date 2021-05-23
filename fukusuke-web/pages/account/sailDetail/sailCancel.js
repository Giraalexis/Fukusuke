import Head from 'next/head'
import Container from "../../../components/Container";
import axios from 'axios'
import React, {useState, useEffect} from 'react'


const WebpayPlus = require('transbank-sdk').WebpayPlus;
const Environment = require('transbank-sdk').Environment;
WebpayPlus.commerceCode = 597055555532;
WebpayPlus.apiKey = '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C';
WebpayPlus.environment = Environment.Integration;


export async function getServerSideProps(ctx){
  const token = ctx.query.token

  try{
    //Cancelar por WebPay
    const response = await WebpayPlus.Transaction.refund(ctx.query.token, ctx.query.total);
    console.log(response.type)
    //Cancelar por la BD
    const ticket = await axios.get(`http://localhost:8000/api/ticket-detail/${ctx.query.idTicket}`)
    console.log(ticket.data)
    const resUpdate = await axios.put(`http://localhost:8000/api/ticket-update/${ctx.query.idTicket}`,{
      id: ticket.data.id,
      fecha: ticket.data.fecha,
      total: ticket.data.total,
      employee : ticket.data.employee,
      client : ticket.data.client,
      payment : ticket.data.payment,
      token : ticket.data.token,
      cancel: true
    })
    console.log(resUpdate.data)
    return{
      props:{
        token: token,
        response: response,
        msgError: ''
      }
    }
  }catch(e){
    console.log(e)
    return{
      props:{
        token: token,
        msgError: 'No se puede cancelar pedido ya que el tiempo maximo para esta operacion es de 1 hora luego de realizar el pago.'
      }
    }
  }
  
}


const sailCancel = (props) =>{
  return(
    <Container>
      <Head>
        <title>Fukusuke | Sail Cancel</title>
      </Head>
      {props.msgError
        ? <h6>{props.msgError}</h6>
        : <h6>Pedido Cancelado</h6>

      }
      
    </Container>
  )
}

export default sailCancel;