import Head from 'next/head'
import Container from "../../../components/Container";
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import Router from "next/router";

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSignInAlt,faTimes,faClipboardList,faBan} from '@fortawesome/free-solid-svg-icons' //FAS --> SOLIDO
//import {} from '@fortawesome/free-brands-svg-icons' //FAB --> MARCA

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
  const [show, setShow] = useState(false); //show or hiden modal

  //Cancelar Pedido
  const cancelarPedido = async(token)=>{
    console.log(token)
    //Cerrar modal
    handleClose();
    Router.push({
      pathname: '/account/sailDetail/sailCancel',
      query: {
        token: token,
        total: props.ticket.total,
        idTicket : props.ticket.id
      }
    })
  }

  //cerrar modal
  const handleClose = () => { //bootstrap no me cierra automatico el modal :c
    let modal = document.querySelector("#close-modal-cancel")
    modal.setAttribute("data-bs-dismiss","modal")
    modal.click();
    setShow(false)
  }
  //abrir modal
  const handleShow = () => { 
    let modal = document.querySelector("#close-modal-cancel")
    modal.setAttribute("data-bs-dismiss","")
    setShow(true)
   };

  return(
    <Container>
      <Head>
        <title>Fukusuke | Sail Detail</title>
      </Head>
      <div className="row mt-4">
        <div className="col-lg-10 col-md-10 col-sm-12 mx-auto p-0 card">
          <div className="card-header bg-primary bg-gradient pt-3 d-flex align-items-center">
            <FontAwesomeIcon  icon={faClipboardList} style={{width: "1.0em", marginRight:'5px',color:'white'}}/>
            <h6 className="card-title text-white m-0">Boleta N° {props.ticket.id || 'Error al cargar'}</h6>
          </div>
          <div className="card-body">
            <h6>Detalle</h6>
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
                ? <>
                  <button 
                    className="btn btn-outline-danger btn-sm d-flex align-items-center"
                    data-bs-toggle="modal" data-bs-target="#cancelModal">
                      <FontAwesomeIcon  icon={faBan} style={{width: "1.0em",marginRight:'5px'}}/>
                      Cancelar Pedido
                  </button>

                  <div className={"modal fade "+(show? 'show': '')}  id="cancelModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog " style={{marginTop: '15vh'}}>
                        <form className="modal-content" >
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Cancelar Pedido</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body p-4">
                            <h5 className="text-center">¿ Estas seguro de cancelar el pedido ?</h5>
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary d-flex justify-content-center align-items-center" data-bs-dismiss="modal">
                              <FontAwesomeIcon  icon={faTimes} style={{width: "1.0em",height:'1em',marginRight:'5px'}}/>
                              Cerrar
                            </button>
                            <button onClick={()=>{cancelarPedido(props.ticket.token, handleShow)}} type="button" id="close-modal-cancel" className="btn btn-danger d-flex justify-content-center align-items-center" >
                              <FontAwesomeIcon  icon={faSignInAlt} style={{width: "1.0em",marginRight:'5px'}}/>
                              Cancelar
                            </button> 
                          </div>
                        </form>
                      </div>
                    </div>
                  </>
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