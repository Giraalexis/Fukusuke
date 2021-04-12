import Head from 'next/head'
import Container from '../components/Container';
import CardProducto from '../components/card/CardProducto';
import axios from 'axios'
import fetch from "isomorphic-unfetch";
import Carousel from '../components/Carousel'
import Cart from '../components/Cart';
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

//Peticiones 
Index.getInitialProps = async (ctx) =>{
  //Products
  try{
    const products =  await fetch('http://127.0.0.1:8000/api/product-list');
    const productsJSON = await products.json()
    return{
      products: productsJSON,
    }
  }
  catch(e){
    const products =  []
    const productsJSON = products;
    return{
      products: productsJSON,
    }
  }
  
}

export default Index;