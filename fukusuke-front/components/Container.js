import Navigation from "./Navigation";
import Footer from './Footer'
import Head from "next/head";

const Container = (props) => (
  <div>
    <Head>
      <title>Fukusuke</title>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"/>
      <link href="/static/styles.css" rel="stylesheet" />
    </Head>
    <Navigation />
    <div className="container p-3">{props.children}</div>
    <Footer/>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"></script>
  </div>
);

export default Container;