import Head from 'next/head'
import Container from '../components/Container';
import CardProducto from '../components/card/CardProducto';
import axios from 'axios'
import fetch from "isomorphic-unfetch";
import Carousel from '../components/Carousel'
import Cart from '../components/Cart';

//peticion por defecto
const defaultEndpoint = 'http://localhost:8000/api/product-list';
export async function getServerSideProps(){
  const res = await fetch(defaultEndpoint);
  const products = await res.json();
  return{
    props:{
      products
    }
  }
}

const Index = (props)=> {
  return (
    <Container>
      <Head>
        <title>Fukusuke | Home</title>
      </Head>
      <Carousel products={props.products}/>
      <CardProducto products={props.products}/>
    </Container>
  )
}


export default Index;