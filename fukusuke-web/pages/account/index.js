import Head from 'next/head'
import Container from '../../components/Container';
import React, {useState, useEffect} from 'react'
import 'react-toastify/dist/ReactToastify.css';
import DetailAccount from './components/detailAccount';
import Purchases from './components/purchases';
const Account = (props)=> {


  useEffect(()=>{
    
  },[])

  return (
    <Container>
      <Head>
        <title>Fukusuke | Account</title>
      </Head>
      <DetailAccount/>
      <Purchases/>
    </Container>
  )
}


export default Account;