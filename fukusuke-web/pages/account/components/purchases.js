import axios from 'axios'
import fetch from "isomorphic-unfetch";
import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Router from "next/router";

const Purchases = ()=>{
  const [ticket,SetTicket] = useState([])
  const [orderDispatch,setOrderDispatch] = useState('')

  useEffect(()=>{
    //Obtener Los Tickets y estado del despacho
    const getData =async ()=>{
      const res = await axios.get('http://localhost:8000/api/ticket-list'); //obtener tickets
      const resDispatch = await axios.get(`http://localhost:8000/api/orderdispatch-list`) //obtener despacho
      const idClient = JSON.parse(localStorage.getItem('session')).id
      const tickets = [];
      for (let i = 0; i < res.data.length; i++) { //recorre todos los ticket
        if(res.data[i].client_id == idClient){ //si el ticket es del cliente
          //Obtener la orden de despacho
          for (let x = 0; x < resDispatch.data.length; x++) {
            if(resDispatch.data[x].ticket_id == res.data[i].id){
              res.data[i].dispatch = resDispatch.data[x].state
              break;
            }
          }
          tickets.push(res.data[i]);
          console.log(res.data[i].dispatch)
        }
      }
      SetTicket(tickets)
    }
    getData()
  },[])

  return(
    <div className="row mt-4">
      <div className="col-lg-8 col-md-10 col-sm-12 mx-auto p-0 card">
        <div className="card-header">
          <h5>Compras</h5>
        </div>
        {ticket.map((ticket)=>{
          return(
            <div key={ticket.id} className="card m-4 mb-0">
              <div className="card-body d-flex flex-column">
                <div className="d-flex justify-content-between mb-1">
                  <h6 className="">Boleta N°: {ticket.id}</h6>
                  <h6 className="">Fecha: {ticket.fecha}</h6>
                  <div className="d-flex">
                    <h6 className="">Total: </h6>
                    <h6 className="tertiary-text"> ${ticket.total}</h6>
                  </div>
                </div>

                <h6 className={ticket.cancel ? 'tertiary-text': ticket.dispatch? 'primary-text' : 'tertiary-text'}>&nbsp;
                  {ticket.cancel ? 'Cancelado': ticket.dispatch? 'Despachado' : 'Pendiente'}
                </h6>

                <button onClick={() =>{Router.push(`/account/sailDetail/[id]`,`/account/sailDetail/${ticket.id}`) }} className="btn btn-outline-primary btn-sm align-self-end">Detalle de Venta</button>
              </div>
            </div>
          )
        })

        }
        <div className="card-body">

        </div>
      </div>
    </div>
  )
}

export default Purchases;