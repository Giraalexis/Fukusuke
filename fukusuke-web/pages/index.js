import Head from 'next/head'
import Container from '../components/Container';
import CardProducto from '../components/card/CardProducto';
import axios from 'axios'
import fetch from "isomorphic-unfetch";

const Index = (props)=> {
  return (
    <Container>
      <Head>
        <title>Fukusuke | Home</title>
      </Head>
      <h1>Homework</h1>

      <CardProducto users={props.users}/>

    </Container>
  )
}

//Peticiones axios
Index.getInitialProps = async (ctx) =>{
  //Test Usuarios
  const res = await fetch('https://reqres.in/api/users');
  const resJSON = await res.json()
  return{
    users: resJSON.data,
  }
}

export default Index;