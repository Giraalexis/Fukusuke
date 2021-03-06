import Navigation from "./Navigation";
import Footer from './Footer'
import Head from "next/head";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, {useState, useEffect} from 'react'

const Container = (props) => {
  const [statePay,setStatePay] = useState(false)
  return(
    <div className="container-principal">
      <Head>
        <title>Fukusuke</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"/>
      </Head>
      <Navigation />
      <ToastContainer limit={1} style={{textAlign:'center'}}/>
      <div className="container pt-2  ">{props.children}</div>
      <Footer/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js"></script>
    </div>
  )
};

export default Container;