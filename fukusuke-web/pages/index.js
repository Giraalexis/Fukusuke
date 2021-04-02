import Head from 'next/head'
import Container from '../components/Container';
import CardProducto from '../components/card/CardProducto';
import axios from 'axios'
import fetch from "isomorphic-unfetch";
import Carousel from '../components/Carousel'

const Index = (props)=> {
  return (
    <Container>
      <Head>
        <title>Fukusuke | Home</title>
      </Head>
      <Carousel users={props.users}/>
      <CardProducto users={props.users}/>
    </Container>
  )
}

//Peticiones 
Index.getInitialProps = async (ctx) =>{
  //Test Usuarios
  const users = await fetch('https://reqres.in/api/users');

  const usersJSON = await users.json()
  return{
    users: usersJSON.data,
  }
}

export default Index;