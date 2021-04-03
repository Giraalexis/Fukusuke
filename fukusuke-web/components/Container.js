import Navigation from "./Navigation";
import Footer from './Footer'
import Head from "next/head";
import Carousel from './Carousel'
const Container = (props) => (
  <div>
    <Head>
      <title>Fukusuke</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"/>
    </Head>
    <Navigation />
    <div className="container pt-2  ">{props.children}</div>
    <Footer/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"></script>
  </div>
);

export default Container;