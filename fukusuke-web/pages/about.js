import Head from 'next/head'
import Container from '../components/Container';
import CardProducto from '../components/card/CardProducto';
import axios from 'axios'
import fetch from "isomorphic-unfetch";
import Carousel from '../components/Carousel'

const About = (props)=> {
  return (
    <Container>
      <Head>
        <title>Fukusuke | About</title>
      </Head>
      <h2>About Works</h2>
    </Container>
  )
}

//Peticiones 

export default About;