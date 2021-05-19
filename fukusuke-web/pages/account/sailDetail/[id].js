import Head from 'next/head'
import Container from "../../../components/Container";
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { toast } from 'react-toastify';

export async function getServerSideProps(ctx){
  const idTicket = ctx.query.id;
  const resDetalle = await axios.get(`http://localhost:8000/api/saildetail-list`); //obtener detalle de ventas
  const detalle = []
  
  for (let i = 0; i < resDetalle.data.length; i++) {
    if(resDetalle.data[i].ticket_id == idTicket){
      detalle.push(resDetalle.data[i])
    }
  }
  console.log(detalle)
  return {
    props:{
      idTicket : idTicket,
      detalleList: detalle
    }
  }
}

const SailDetail = (props)=>{
  const [detalle,SetDetalle] = useState(props.detalleList)
  return(
    <Container>
      <Head>
      
      </Head>
      <div className="row mt-4">
        <div className="col-lg-8 col-md-10 col-sm-12 mx-auto p-0 card">
          <div className="card-header">
            <h6>Boleta N° {props.idTicket}</h6>
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
          </div>
          
        </div>
      </div>

    </Container>
      
  )
}

export default SailDetail;