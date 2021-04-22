import React, {useState, useEffect, createContext} from 'react'
import { useRouter } from "next/router";
import Router from "next/router";
import axios from 'axios'
import Head from 'next/head'
import Container from '../../components/Container';

const WebpayPlus = require('transbank-sdk').WebpayPlus;
const Environment = require('transbank-sdk').Environment;
WebpayPlus.commerceCode = 597055555532;
WebpayPlus.apiKey = '579B532A7440BB0C9079DED94D31EA1615BACEB56610332264630D42D0A36B1C';
WebpayPlus.environment = Environment.Integration;
export async function getServerSideProps(ctx){
  console.log(ctx);
  const token = ctx.query.token;
  const response = await WebpayPlus.Transaction.commit(token);
  return {
    props:{
      response,
    }
  }
  
}


const Voucher = (props)=> {
  const [values,setvalues] = useState(props.response);
  useEffect(()=>{
  },[])

  return (
    <Container>
      <Head>
        <title>Fukusuke | Account</title>
      </Head>
      <h4>Pago Finalizado</h4>
    </Container>
  )
}

export default Voucher;