import { useRouter } from "next/router";
import React, {useState, useEffect} from 'react'
import fetch from "isomorphic-unfetch";
import Head from 'next/head'
import Container from "../../components/Container";
import Link from "next/link";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons' //FAS --> SOLIDO
//import {} from '@fortawesome/free-brands-svg-icons' //FAB --> MARCA

//peticion por defecto al cargar esta pagina
const defaultEndpoint = 'http://localhost:8000/api/product-detail/';
export async function getServerSideProps(ctx){
  try{
    const res = await fetch(defaultEndpoint+ctx.query.id);
    const product = await res.json();
    return{
      props:{
        product
      }
    }
  }catch(e){
    console.log("error al obtener el producto")
    const product = [];
    return{
      props:{
        product
      }
    }
  }
}

const Product = ({product}) => {
  const router = useRouter();
  const { id } = router.query;

  useEffect(()=>{ //ejecuta luego de cargar la pagina
    const setStockonCant = ()=>{ //actualiza el stock al cargar la pagina, segun la cant en la cartera
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      for (let i = 0; i < cart.length; i++) {
        if(cart[i].id == product.id){
          document.getElementById(product.id+'-card-stock').innerHTML = cart[i].stock - cart[i].cant;
        }
      }
    }
    setStockonCant();
  },[])//ejecuta solo 1 vez

  //añadir producto segun la id al carrito en localStorage
  const addProduct = (id) =>{
    let local = JSON.parse(localStorage.getItem('cart')) || [];//obtener local de cart (si es null, retorna [])
    let productsChange = product;
    console.log(productsChange);
    let existe = false;
    if(document.getElementById(id+'-card-stock').innerHTML > 0){//si el stock es mayor que 0
      console.log("se añade");
      if(local.length > 0){ //si existe algun producto
        for (let i= 0; i< local.length; i++) {
          if(local[i].id == id){ //si existe un producto similar añadido en la cartera
            console.log("existe un producto similar");
            local[i].cant ++;
            //reflejar cambio de stock en el DOM
            let stock = document.getElementById(id+'-card-stock').innerHTML;
            let newStock = stock - 1;
            document.getElementById(id+'-card-stock').innerHTML = newStock;
            existe = true;
            toast.success("Sushi Añadido",{
              position:"top-center",
              autoClose: 2000,
              hideProgressBar: true
            });
            break;
          }
        }
        if(!existe){ //si no existe el producto en la cartera
          console.log("no existe en cartera");
          productsChange.cant = 1;
          local.push(productsChange); //añade el nuevo producto
          //reflejar cambio de stock en el DOM
          let stock = document.getElementById(id+'-card-stock').innerHTML;
          let newStock = stock - 1;
          document.getElementById(id+'-card-stock').innerHTML = newStock;
          toast.success("Sushi Añadido",{
            position:"top-center",
            autoClose: 2000,
            hideProgressBar: true
          });
        }
      }else{//si no existe ningun producto
        productsChange.cant = 1;
        local.push(productsChange); //añade el nuevo producto
        //reflejar cambio de stock en el DOM
        let stock = document.getElementById(id+'-card-stock').innerHTML;
        let newStock = stock - 1;
        document.getElementById(id+'-card-stock').innerHTML = newStock;
        toast.success("Sushi Añadido",{
          position:"top-center",
          autoClose: 2000,
          hideProgressBar: true
        });
      }
    }else{
      toast.warning("No hay Stock",{
        position:"top-center",
        autoClose: 2000,
        hideProgressBar: true
      });
    }
    window.localStorage.setItem('cart',JSON.stringify(local))//actualiza localstorage
  }

  return (
    <Container>
      <Head>
        <title>Fukusuke | Detail</title>
      </Head>
      <div className="row mt-4">
        <div className="col-lg-10 col-md-10 col-sm-12 mx-auto p-0 card">
          <div className="card-header d-flex d-wrap  align-items-baseline justify-content-start">
            <Link href="/"><a className={"btn sombra col-lg-2 col-md-3 col-sm-6"}>Volver</a></Link>
            <h5 className="mx-auto text-capitalize">{product.name.toLowerCase()}</h5>
          </div>
          <div className="card-body p-0">
            <div className="row">
              <div className="col">
                <img src={product.image} style={{width:'100vh', height:'30vh'}} className="img-fluid"
                onError={(e)=>{e.target.onerror = null; e.target.src="/Sushi404.png"}}/>
              </div>
              <div className="col">
                <p className="pr-0 pt-2">{product.description[0].toUpperCase() + (product.description.slice(1)).toLowerCase()}</p>
                <h5 className="tertiary-text" >${product.price}</h5>
              </div>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between align-items-center">
            <div className="col-6">
              <div className="row ">
                <h5 className="col-lg-3 col-md-4 col-sm-6">Stock</h5>
                <h5 id={product.id+"-card-stock"} className="col">{product.stock}</h5>
              </div>
            </div>
            
            <button className=" btn btn-dark secondary-background cuartiary-text d-flex align-items-center" onClick={() => addProduct(product.id)} type="button">
              <FontAwesomeIcon  icon={faCartPlus} style={{width: "1.2em",marginRight:'5px', color: 'white'}}/>
              Añadir
            </button>   
          </div>
        </div>
      </div>
    </Container>
  );
};


export default Product;