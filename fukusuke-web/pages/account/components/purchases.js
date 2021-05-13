import axios from 'axios'
import fetch from "isomorphic-unfetch";
import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Purchases = ()=>{

  const [ticket,SetTicket] = useState([])

  useEffect(()=>{
    //Obtener Los Tickets
    const getStickets =async ()=>{
      const res = await axios.get('http://localhost:8000/api/ticket-list');
      const tickets = [];
      for (let i = 0; i < res.data.length; i++) {
        if(res.data[i].client_id == JSON.parse(localStorage.getItem('session')).id){ //si el ticket es del cliente
          console.log(res.data[i]);
          tickets.push(res.data[i]);
        }
      }
      SetTicket(tickets)
    }
    getStickets()
  },[])

  return(
    <div className="row mt-4">
      <div className="col-lg-8 col-md-8 col-sm-12 mx-auto p-0 card">
        <div className="card-header">
          <h5>Compras</h5>
        </div>
        {ticket.map((ticket)=>{
          return(
            <div key={ticket.id} className="card m-2">
              <div className="card-header">
                <div className="row">
                  <h6 className="col">ID: {ticket.id}</h6>
                  <h6 className="col">Fecha: {ticket.fecha}</h6>
                  <h6 className="col">Total: ${ticket.total}</h6>
                </div>
              </div>
              <div className="card-body">
                
              </div>
              <div className="card-footer">

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