import Head from 'next/head'
import Container from '../components/Container';
import CardProducto from '../components/card/CardProducto';
import axios from 'axios'
import fetch from "isomorphic-unfetch";
import Carousel from '../components/Carousel'

const Account = (props)=> {
  return (
    <Container>
      <Head>
        <title>Fukusuke | Account</title>
      </Head>
      <h2>Account Works</h2>
    </Container>
  )
}

//Peticiones 

export default Account;