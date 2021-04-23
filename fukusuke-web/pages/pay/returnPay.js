import Head from 'next/head'
import Container from '../../components/Container';
import Router from "next/router";
import React, {useState, useEffect} from 'react'


/*
Esta Pagina es a la que llega cuando se termina el pago
Obtiene el token de localstorage y lo envia como contexto a
la pagina en donde mostrara el resultado del pago
(Esto se tubo que hacer de esta forma por que la api de transbank me tira
error de cors y la unica forma que encontre fue hacerlo de esta manera)
*/
const ReturnPay = (props)=> {
  useEffect(()=>{
    const getTokentoRedirect = ()=>{
      const token = JSON.parse(localStorage.getItem('response'))
      Router.push({
        pathname: '/pay/voucher',
        query: {token: token.token}
      })
    };
    getTokentoRedirect();
  },[])

  return (
    <Container>
      <Head>
        <title>Fukusuke | Pay</title>
      </Head>
      <h4>Redirecting....</h4>
    </Container>
  )
}


export default ReturnPay;