import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Container from '../../components/Container';
import Link from "next/link";

//variables de entorno untilizando 'Transbank' como medio de pago
const WebpayPlus = require('transbank-sdk').WebpayPlus;
const Environment = require('transbank-sdk').Environment;
WebpayPlus.commerceCode = 597055555532;
WebpayPlus.apiKey = '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C';
WebpayPlus.environment = Environment.Integration;

export async function getServerSideProps(ctx){
  const totalPago = ctx.query.total;
  //Valores para solicitar pago a transbank
  const values = {
    buyOrder: 1,
    amount: totalPago,
    sessionId: '1234',
    returnUrl: 'http://localhost:3000/pay/voucher'
  }
  const response = await WebpayPlus.Transaction.create(values.buyOrder, values.sessionId, values.amount, values.returnUrl);
  return {
    props:{
      response,
    }
  }
  
}


const Pay = (props)=> {

  const [cart,setCart] = useState([]);
  const [total,setTotal] = useState(0);

  useEffect(()=>{
    const loadData = ()=>{ //Mostrar productos
      let cartLocal = JSON.parse(localStorage.getItem('cart')) || [];
      let subTotal = 0;
      for (let i = 0; i < cartLocal.length; i++) {
        subTotal += cartLocal[i].cant * cartLocal[i].price;
      }
      setTotal(subTotal);
      setCart(cartLocal);
    }
    loadData();
  },[])

  return (
    <Container>
      <Head>
        <title>Fukusuke | Pay</title>
      </Head>
      <div className="row mt-4">
      <form method="post" action={props.response.url} className="col-lg-8 col-md-8 col-sm-12 mx-auto p-0 card">
        <div className="card-body">
        {cart.map((product)=>{
          return(
            <div key={product.id} className="card card-body mt-2">
              <div className="row justify-content-between">
                <img className="col-lg-3 col-md-3 col-sm-3 p-0" src={product.image} style={{width:'120px', height:'90px'}}
                  onError={(e)=>{e.target.onerror = null; e.target.src="/Sushi404.png"}}/>   
                <div className="col-lg-4 col-md-3 col p-0">
                  <h5 className="text-truncate">{product.name}</h5>
                  <p>Cantidad {product.cant}</p> 
                </div>
                <div className="col-lg-4 col-md-4 col">
                  <div className="d-flex justify-content-end">    
                    <h6 className="tertiary-text">${(product.price*product.cant)}</h6>
                  </div>
                </div>
              </div>
            </div>
          )
        })
        }
        </div>
        <div className="row justify-content-center p-3">
          <h4 className="col-5">Total:</h4>
          <h4 className="col-6 tertiary-text d-flex justify-content-end">${total}</h4>
        </div> 
        <div className="card-footer row">
          <Link href="/"><button className="btn btn-secondary col-lg-6 col-md-6 col-sm-12 m-1">Seguir Comprando</button></Link>
          <input type="hidden" name="token_ws" value={props.response.token} />
          <input type="submit" value="Ir a pagar" className="btn btn-success col m-1"/>
        </div>
      </form>
      </div>
      
    </Container>
  )
}
  
  
  export default Pay;