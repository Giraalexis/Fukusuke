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
  //Test Productos (estos parametros deben ser traidos desde la api)
  const products =  [
    {
      id: 1,
      nombre: 'Sushi maki',
      descripcion: '10 cortes de pollo y arroz',
      stock: 5,
      precio: 2500,
      estado: true,
      promocion: false,
      imagen: 'https://www.hola.com/imagenes/cocina/recetas/20200221161232/sushi-maki-de-atun/0-787-34/sushi-maki-de-atun-m.jpg'
    },
    {
      id: 2,
      nombre: 'Sushi con pollo',
      descripcion: '10 cortes de pollo y arroz',
      stock: 5,
      precio: 2500,
      estado: true,
      promocion: false,
      imagen: 'https://static2.diariovasco.com/www/multimedia/201906/21/media/cortadas/sushi-kUME-RWxzUmzbw5PuuJZkhK9rUeP-624x385@Diario%20Vasco.jpg'
    },
    {
      id: 3,
      nombre: 'Sushi romano',
      descripcion: '10 cortes de pollo y arroz',
      stock: 10,
      precio: 5000,
      estado: true,
      promocion: false,
      imagen: 'https://img-global.cpcdn.com/recipes/56a507462ed22d19/751x532cq70/alaska-roll-sushi-foto-principal.jpg'
    },
    {
      id: 4,
      nombre: 'Sushi tempura',
      descripcion: '10 cortes de pollo y arroz',
      stock: 2,
      precio: 5000,
      estado: true,
      promocion: true,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSyLWJK_OblaGfrC7xPjUHiOkfJ7TEihuBw&usqp=CAU'
    },
    {
      id: 5,
      nombre: 'Sushi algas',
      descripcion: '10 cortes de pollo y arroz',
      stock: 8,
      precio: 5000,
      estado: true,
      promocion: false,
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJGgDAitY1DlpqgrMCEp9z5kGoqmcKnF08qw&usqp=CAU'
    },
    {
      id: 6,
      nombre: 'Sushi calamardo',
      descripcion: '10 cortes de pollo y arroz',
      stock: 1,
      precio: 5000,
      estado: true,
      promocion: true,
      imagen: 'https://cdn.ticbeat.com/src/uploads/2020/01/sushi-1-1024x682.jpg'
    },
  ]

  //const productsJSON = await products.json()
  return{
    products: products,
  }
}

export default Index;