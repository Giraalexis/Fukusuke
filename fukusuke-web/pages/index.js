import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Container from '../components/Container';
import Navigation from'../components/Navigation'
export default function Home() {
  return (
    <Container>
      <Head>
        <title>Fukusuke | Home</title>
      </Head>
      <h1>Home Work</h1>
    </Container>
  )
}
