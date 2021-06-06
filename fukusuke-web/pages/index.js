import Head from 'next/head'
import Container from '../components/Container';
import CardProducto from '../components/card/CardProducto';
import fetch from "isomorphic-unfetch";
import Carousel from '../components/Carousel'

//peticion por defecto
const defaultEndpoint = 'http://localhost:8000/api/product-list';
export async function getServerSideProps(){
  try{
    const res = await fetch(defaultEndpoint);
    const products = await res.json();
    return{
      props:{
        products
      }
    }
  }catch(e){
    console.log("error al obtener productos")
    const products = [];
    return{
      props:{
        products
      }
    }
  }
}

const Index = (props)=> {
  return (
    <Container>
      <Head>
        <title>Fukusuke | Home</title>
      </Head>
      <div className="row">
        <div className="col-lg-10 col-md-10 col-sm-12 mx-auto">
          <Carousel products={props.products}/>
          <CardProducto products={props.products}/>
        </div> 
      </div>
      
    </Container>
  )
}


export default Index;