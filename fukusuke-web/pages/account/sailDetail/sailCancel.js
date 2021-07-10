import Head from 'next/head'
import Container from "../../../components/Container";
import axios from 'axios'
import React, {useState, useEffect} from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExclamationCircle,faCheckCircle} from '@fortawesome/free-solid-svg-icons' //FAS --> SOLIDO
//import {} from '@fortawesome/free-brands-svg-icons' //FAB --> MARCA

const WebpayPlus = require('transbank-sdk').WebpayPlus;
const Environment = require('transbank-sdk').Environment;
WebpayPlus.commerceCode = 597055555532;
WebpayPlus.apiKey = '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C';
WebpayPlus.environment = Environment.Integration;


export async function getServerSideProps(ctx){
  const token = ctx.query.token

  try{
    //Cancelar por WebPay, Tiempo limite: 1 hora luego de la compra
    const response = await WebpayPlus.Transaction.refund(ctx.query.token, ctx.query.total);
    console.log(response.type)
    
    //Cancelar Ticket en la BD
    let ticket = ''
    try{
      ticket = await axios.get(`http://168.138.144.35:8000/api/ticket-detail/${ctx.query.idTicket}`)
    }catch(e){
      ticket = await axios.get(`http://localhost:8000/api/ticket-detail/${ctx.query.idTicket}`)
    }
    //const ticket = await axios.get(`http://localhost:8000/api/ticket-detail/${ctx.query.idTicket}`)
    console.log(ticket.data)

    const ticketUpData = {
      id: ticket.data.id,
      fecha: ticket.data.fecha,
      total: ticket.data.total,
      employee : ticket.data.employee,
      client : ticket.data.client,
      payment : ticket.data.payment,
      token : ticket.data.token || 'Sin Token',
      cancel: true
    }
    let resUpdate = ''
    try{
      resUpdate = await axios.put(`http://168.138.144.35:8000/api/ticket-update/${ctx.query.idTicket}`,ticketUpData)
    }catch(e){
      resUpdate = await axios.put(`http://localhost:8000/api/ticket-update/${ctx.query.idTicket}`,ticketUpData) 
    }
    //const resUpdate = await axios.put(`http://localhost:8000/api/ticket-update/${ctx.query.idTicket}`,ticketUpData)
    console.log(resUpdate.data)

    return{
      props:{
        token: token || 'Sin Token',
        response: response,
        msgError: '',
        idTicket: ctx.query.idTicket
      }
    }
  }catch(e){
    console.log(e)
    return{
      props:{
        token: token,
        msgError: 'No se puede cancelar pedido ya que el tiempo máximo para esta operación es de 1 hora luego de realizar el pago.'
      }
    }
  }
  
}


const sailCancel = (props) =>{
  useEffect( ()=>{
    const updateStock = async ()=>{
      //Obtener todos el detalle de venta segun Ticket
      let resDetalle = ''
      try{
        resDetalle = await axios.get(`http://168.138.144.35:8000/api/saildetail-list`); //obtener detalle de ventas
      }catch(e){
        resDetalle = await axios.get(`http://localhost:8000/api/saildetail-list`); //obtener detalle de ventas
      }
      //const resDetalle = await axios.get(`http://localhost:8000/api/saildetail-list`); //obtener detalle de ventas

      for (let i = 0; i < resDetalle.data.length; i++) {
        if(resDetalle.data[i].ticket_id == props.idTicket){ //si es el detalle de la boleta
          let resProduct = ''
          try{
            resProduct = await axios.get(`http://168.138.144.35:8000/api/product-detail/${resDetalle.data[i].product_id}`)
          }catch(e){
            resProduct = await axios.get(`http://localhost:8000/api/product-detail/${resDetalle.data[i].product_id}`)
          }
          //let resProduct = await axios.get(`http://localhost:8000/api/product-detail/${resDetalle.data[i].product_id}`)
          console.log(resProduct.data)
          let dataUpProduct = {
            name: resProduct.data.name,
            description: resProduct.data.description,
            promotion: resProduct.data.promotion,
            stock: (resProduct.data.stock + resDetalle.data[i].amout),
            price: resProduct.data.price,
            state: resProduct.data.state,
            image: resProduct.data.image
            }

            let resProductUpdate = ''
            try{
              resProductUpdate = await axios.put(`http://168.138.144.35:8000/api/product-update/${resDetalle.data[i].product_id}`,dataUpProduct)
            }catch(e){
              resProductUpdate = await axios.put(`http://localhost:8000/api/product-update/${resDetalle.data[i].product_id}`,dataUpProduct)
            }
          //let resProductUpdate = await axios.put(`http://localhost:8000/api/product-update/${resDetalle.data[i].product_id}`,dataUpProduct)
          console.log(resProductUpdate)
        }
      }
    }
    updateStock();
  },[])
  return(
    <Container>
      <Head>
        <title>Fukusuke | Sail Cancel</title>
      </Head>
      {props.msgError
        ? <div className="col-lg-10 col-md-10 col-sm-12 card p-4 m-4 mx-auto rounded-pill">
            <FontAwesomeIcon  icon={faExclamationCircle} style={{width: "4.0em", margin:'auto',color:'red'}}/>
            <h6 className="mx-auto mt-4 mb-4">{props.msgError}</h6>
          </div>
        
        : <div className="col-lg-10 col-md-10 col-sm-12 card p-4 m-4 mx-auto rounded-pill">
            <FontAwesomeIcon  icon={faCheckCircle} style={{width: "4.0em", margin:'auto',color:'green'}}/>
            <h4 className="mx-auto mt-4 mb-4">Pedido Cancelado</h4>
          </div>

      }
      
    </Container>
  )
}

export default sailCancel;