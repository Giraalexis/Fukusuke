import React, {useState, useEffect} from 'react'
import Router from "next/router";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import stringSimilarity from 'string-similarity';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons' //FAS --> SOLIDO
//import {} from '@fortawesome/free-brands-svg-icons' //FAB --> MARCA

const CardProducto = (props) =>{
  const [products,setProducts] = useState(props.products); //todos los productos
  const [viewProducts, setViewProducts] = useState(props.products); //los productos que se mostraran

  useEffect(()=>{ //ejecuta luego de cargar la pagina
    const setStockonCant = ()=>{ //actualiza el stock al cargar la pagina, segun la cant en la cartera
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      for (let i = 0; i < cart.length; i++) {
        if(document.getElementById(cart[i].id+'-card-stock').innerHTML){
          document.getElementById(cart[i].id+'-card-stock').innerHTML = cart[i].stock - cart[i].cant;
        }
      }
    }
    setStockonCant();
  },[])//ejecuta solo 1 vez

  //añadir producto segun la id al carrito en localStorage
  const addProduct = (id) =>{
    let local = JSON.parse(localStorage.getItem('cart')) || [];//obtener local de cart (si es null, retorna [])
    let productsChange = products;
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
            toast.success("Sushi añadido",{
              position:"top-center",
              autoClose: 2000,
              hideProgressBar: true
            });
            break;
          }
        }
        if(!existe){ //si no existe el producto en la cartera
          console.log("no existe en cartera");
          for (let i = 0; i < productsChange.length; i++) {
            if(productsChange[i].id == id){
              productsChange[i].cant = 1;
              local.push(productsChange[i]); //añade el nuevo producto
              break;
            }
          }
          toast.success("Sushi añadido",{
            position:"top-center",
            autoClose: 2000,
            hideProgressBar: true
          });
          //reflejar cambio de stock en el DOM
          let stock = document.getElementById(id+'-card-stock').innerHTML;
          let newStock = stock - 1;
          document.getElementById(id+'-card-stock').innerHTML = newStock;
        }
      }else{//si no existe ningun producto
        for (let i = 0; i < productsChange.length; i++) {
          if(productsChange[i].id == id){
            productsChange[i].cant = 1;
            local.push(productsChange[i]); //añade el nuevo producto
            toast.success("Sushi añadido",{
              position:"top-center",
              autoClose: 2000,
              hideProgressBar: true
            });
            break;
          }
        }
        //reflejar cambio de stock en el DOM
        let stock = document.getElementById(id+'-card-stock').innerHTML;
        let newStock = stock - 1;
        document.getElementById(id+'-card-stock').innerHTML = newStock;
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

  //Buscar Producto al escribir
  const handleInputChange = e=>{
    let findProduct = [];
    const {name, value} = e.target;//Captura el nombre y el valor 
    for (let i = 0; i < products.length; i++) {
      let prob = stringSimilarity.compareTwoStrings(products[i].name.toLowerCase(),value.toLowerCase()); //Devuelve una probabilidad de similitud
      if(prob > 0.5){ //si es similar en un 50%
        findProduct.push(products[i]) //guarda ese producto
      }
    }
    if(findProduct.length){ //si encontro algun producto, que los muestre
      setViewProducts(findProduct);
    }else{ //si no, que muestre todos
      setViewProducts(products);
    }
  }

  return(
    <div className="row" id="cards-container-render">
      <div className="input-group pt-3">
        <div className="col-lg-8 col-md-6 col-sm-12"></div>
        <input onChange={handleInputChange} type="text" className="form-control text-center rounded-pill" placeholder="Buscar Producto"/>
      </div>
      {viewProducts.map(product=>{
        if(product.state && product.stock > 0){//si su estado es activo y tienen stock
          return(
            <form key={product.id} className="col-lg-4 col-md-6 col-sm-12  pt-3 " >
              <div className="sombra">
                <div className="card card-body text-center btn " onClick={() => Router.push(`/detailProduct/[id]`, `/detailProduct/${product.id}`)}>
                  <img src={product.image} className="img-fluid rounded mx-auto d-block" style={{width:'100%', height:'20vh'}} alt=""
                  onError={(e)=>{e.target.onerror = null; e.target.src="/Sushi404.png"}}/>              
                </div>
                <div className="card-footer bg-light bg-gradient">
                  <div className="row align-items-center">
                    <h6 className="col-8 text-truncate text-capitalize">{product.name.toLowerCase()}</h6>
                    <h5 className="col-4 tertiary-text">${product.price}</h5>
                  </div>
                  <div className="row align-items-center">
                    <h6 className="col-8 ">Stock</h6>
                    <h6 id={product.id+"-card-stock"} className="col-4 ">{product.stock}</h6>
                    <button className=" btn btn-dark secondary-background cuartiary-text d-flex justify-content-center align-items-center" onClick={() => addProduct(product.id)} type="button">
                      <FontAwesomeIcon  icon={faCartPlus} style={{width: "1.2em",marginRight:'5px', color: 'white'}}/>
                      Añadir
                    </button>
                  </div>
                </div>
              </div>
              
            </form>
          )
        }

      })}
    </div>
  )
}

export default CardProducto;