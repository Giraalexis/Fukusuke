import Head from 'next/head'
import Container from '../components/Container';

const About = (props)=> {
  return (
    <Container>
      <Head>
        <title>Fukusuke | About</title>
      </Head>
      <div className="row mt-4">
        <div className="col-lg-10 col-md-10 col-sm-12 mx-auto card card-body">
          <h4>Fukusuke</h4>
          <p className="m-4 mt-0">
            La empresa Fukusuke es un restaurant dedicada a la preparacion y venta de sushi ubicada en la comuna de Maipu, Santiago de Chile

          </p>
        </div>
      </div>
      
    </Container>
  )
}

//Peticiones 

export default About;