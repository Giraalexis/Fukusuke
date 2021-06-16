import Head from 'next/head'
import Container from '../../components/Container';
import PayDetail from './components/payDetail';
import React, {useState, useEffect} from 'react'

//variables de entorno untilizando 'Transbank' como medio de pago
const WebpayPlus = require('transbank-sdk').WebpayPlus;
const Environment = require('transbank-sdk').Environment;
WebpayPlus.commerceCode = 597055555532;
WebpayPlus.apiKey = '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C';
WebpayPlus.environment = Environment.Integration;

export async function getServerSideProps(ctx){
  try{
    const totalPago = ctx.query.total;
    const idSession = ctx.query.idSession;
    //Valores para solicitar pago a transbank
    const values = {
      buyOrder: 1,
      amount: totalPago,
      sessionId: idSession,
      returnUrl: 'http://168.138.144.35:3000/pay/returnPay' //localhost para pruevas / 168.138.144.35 para produccion
    }
    const response = await WebpayPlus.Transaction.create(values.buyOrder, values.sessionId, values.amount, values.returnUrl);
    return {
      props:{
        response,
      }
    }
  }catch(e){
    const response = '';
    return {
      props:{
        response,
      }
    }
  }
    
  }

const Pay = (props)=> {
  
  useEffect(()=>{
    const createResponse = ()=>{
      window.localStorage.setItem('response',JSON.stringify(props.response))
    };
    createResponse();
  },[])

  return (
    <Container>
      <Head>
        <title>Fukusuke | Pay</title>
      </Head>
      <PayDetail response={props.response}/>
    </Container>
  )
}


export default Pay;