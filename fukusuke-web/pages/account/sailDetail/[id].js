import Head from 'next/head'
import Container from "../../../components/Container";
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import Router from "next/router";

//Previo a cargar el componente
export async function getServerSideProps(ctx){
  const idTicket = ctx.query.id;
  
  //Obtener Token para realizar cancelacion del ticket
  const resTicket = await axios.get(`http://localhost:8000/api/ticket-detail/${idTicket}`)

  //Obtener todos el detalle de venta segun Ticket
  const resDetalle = await axios.get(`http://localhost:8000/api/saildetail-list`); //obtener detalle de ventas
  const detalle = []
  for (let i = 0; i < resDetalle.data.length; i++) {
    if(resDetalle.data[i].ticket_id == idTicket){ //si es el detalle de la boleta, lo guarda
      detalle.push(resDetalle.data[i])
    }
  }

  //Obtener la orden de despacho
  const resDispatch = await axios.get(`http://localhost:8000/api/orderdispatch-list`) //obtener despacho
  let order = ''
  for (let i = 0; i < resDispatch.data.length; i++) {
    if(resDispatch.data[i].ticket_id == idTicket){
      order = resDispatch.data[i]
      break;
    }
  }

  return {
    props:{
      ticket: resTicket.data,
      detalleList: detalle,
      orderDispatch: order,
    }
  }
}

//Componente
const SailDetail = (props)=>{
  const [detalle,SetDetalle] = useState(props.detalleList)

  //Cancelar Pedido
  const cancelarPedido = async(token)=>{
    console.log(token)
    Router.push({
      pathname: '/account/sailDetail/sailCancel',
      query: {
        token: token,
        total: props.ticket.total,
        idTicket : props.ticket.id
      }
    })
  }

  return(
    <Container>
      <Head>
        <title>Fukusuke | Sail Detail</title>
      </Head>
      <div className="row mt-4">
        <div className="col-lg-8 col-md-10 col-sm-12 mx-auto p-0 card">
          <div className="card-header pt-3">
            <h6>Boleta N° {props.ticket.id || 'Error al cargar'}</h6>
          </div>
          <div className="card-body">
            {detalle.map((sailDetail)=>{
              return(
                <div key={sailDetail.id} className="card card-body mb-3">
                  <div className="d-flex justify-content-between">
                    <h6>{sailDetail.name}</h6>
                    <h6>Cantidad: {sailDetail.amout}</h6>
                  </div>
                  <h6 className="tertiary-text" style={{marginLeft: "auto"}}>${sailDetail.sub_total}</h6>
                </div>
              )
            })}
            <div className="d-flex justify-content-end">
              <h6 className="">Total:&nbsp;</h6>
              <h6 className="tertiary-text">{props.ticket.total}&nbsp;</h6>
            </div>
          </div>

          <div className="card-footer">
            <div className="d-flex">
              <h6 >Dirección de envío:</h6>
              <h6 >&nbsp;{props.orderDispatch.adress}</h6>
            </div>
            <div className="d-flex justify-content-between align-items-baseline">
              <div className="d-flex">
                <h6 >Estado de envío:</h6>
                <h6 className={props.ticket.cancel ? 'tertiary-text': props.orderDispatch.state? 'primary-text' : 'tertiary-text'}>&nbsp;
                  {props.ticket.cancel ? 'Cancelado': props.orderDispatch.state? 'Despachado' : 'Pendiente'}
                </h6>
              </div>
              {!props.orderDispatch.state && !props.ticket.cancel
                ? <button onClick={()=>{cancelarPedido(props.ticket.token)}} className="btn btn-outline-danger btn-sm">Cancelar Pedido</button>
                : <> </>
              }
            </div>
          </div>
          
        </div>
      </div>

    </Container>
      
  )
}

export default SailDetail;