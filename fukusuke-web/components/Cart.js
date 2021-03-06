import React, {useState, useEffect} from 'react'
import Router from "next/router";
import { toast } from 'react-toastify';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart,faTrash,faTimes,faHandHoldingUsd} from '@fortawesome/free-solid-svg-icons' //FAS --> SOLIDO
//import {} from '@fortawesome/free-brands-svg-icons' //FAB --> MARCA

const Cart = (props)=>{
  const [cart,setCart] = useState([]);
  const [total,setTotal] = useState(0);
  const [show, setShow] = useState(false); //show or hiden modal

  //al abrir la cartera, se refresca con el localstorage
  const refreshCart =(e) =>{
    let cartLocal = JSON.parse(localStorage.getItem('cart')) || [];
    let subTotal = 0;
    for (let i = 0; i < cartLocal.length; i++) {
      subTotal += cartLocal[i].cant * cartLocal[i].price;
    }
    setTotal(subTotal);
    setCart(cartLocal);
  }

  //eliminar producto de la cartera y actualiza el total
  const deleteProductCart = (id)=>{
    let cartLocal = JSON.parse(localStorage.getItem('cart')) || [];
    let subTotal = 0;
    for (let i = 0; i < cartLocal.length; i++) {
      if(id == cartLocal[i].id){
        subTotal = total - (cartLocal[i].cant * cartLocal[i].price)  
        //reflejar cambio de stock en el DOM
        if(Router.asPath == '/' || Router.asPath == '/detailProduct/'+id){
          document.getElementById(id+'-card-stock').innerHTML = cartLocal[i].stock;
        }
        cartLocal.splice(i,1);//lo borra
        window.localStorage.setItem('cart',JSON.stringify(cartLocal))//actualiza localstorage cartera
        setCart(cartLocal);//actualiza cartera
        setTotal(subTotal); //actualiza el total
        break;
      }
    }
  }
    
  //sumar Cantidad del producto y actualiza el total
  const sumProduct = (id)=>{
    let cartLocal = JSON.parse(localStorage.getItem('cart')) || [];
    let subTotal = 0;
    for (let i = 0; i < cartLocal.length; i++) {
      if(id == cartLocal[i].id && cartLocal[i].cant < cartLocal[i].stock){
        cartLocal[i].cant ++;
        document.getElementById(id+'-card-stock').innerHTML = cartLocal[i].stock - cartLocal[i].cant//reflejar cambio en DOOM(card)

      }
      subTotal += cartLocal[i].cant * cartLocal[i].price;
    }
    window.localStorage.setItem('cart',JSON.stringify(cartLocal))//actualiza localstorage
    setCart(cartLocal);//actualiza cartera
    setTotal(subTotal);// actualiza el total
  }

  //restar cantidad del producto y actualiza el total
  const resProduct = (id) =>{
    let cartLocal = JSON.parse(localStorage.getItem('cart')) || [];
    let subTotal = 0;
    for (let i = 0; i < cartLocal.length; i++) {
      if(id == cartLocal[i].id){
        if(cartLocal[i].cant > 1){
          cartLocal[i].cant --;
          document.getElementById(id+'-card-stock').innerHTML = cartLocal[i].stock - cartLocal[i].cant//reflejar cambio en DOOM(card)

        }
        window.localStorage.setItem('cart',JSON.stringify(cartLocal))//actualiza localstorage
        setCart(cartLocal);//actualiza cartera
      }
      subTotal += cartLocal[i].cant * cartLocal[i].price;
    }
    setTotal(subTotal);
  }

  //Realizar Pago del pedido
  const payOrder = ()=>{
    if(localStorage.getItem('session')){ //verificar si se a logeado
      console.log("sesion esta iniciada")
      if(!JSON.parse(localStorage.getItem('cart'))){ //verificar si existe cartera
        toast.warning("A??ade un producto antes de pagar",{
          position:"top-center",
          autoClose: 4000,
          hideProgressBar: true
        });
      }else{
        console.log("cartera existe");
        if(!JSON.parse(localStorage.getItem('cart')).length){//verifica que la cartera este vacia
          toast.warning("A??ade un producto antes de pagar",{
            position:"top-center",
            autoClose: 4000,
            hideProgressBar: true
          });
        }else{
          //realizar el pago
          toast.info("Redireccionando al pago",{
            position:"top-center",
            autoClose: 3000,
            hideProgressBar: true
          });
          handleClose();
          Router.push({
           pathname: '/pay',
           query: {
             total: total,
             idSession: JSON.parse(localStorage.getItem('session')).id
            }
          })
        }
      }
    }else{
      toast.warning("Inicia Sesion para poder pagar",{
        position:"top-center",
        autoClose: 4000,
        hideProgressBar: true
      });
    }
  }

  //cerrar modal
  const handleClose = () => { //bootstrap no me cierra automatico el modal :c
    let modal = document.querySelector("#close-modal-cart")
    modal.setAttribute("data-bs-dismiss","modal")
    modal.click();
    setShow(false)
  }
  //abrir modal
  const handleShow = () => { 
    let modal = document.querySelector("#close-modal-cart")
    modal.setAttribute("data-bs-dismiss","")
    setShow(true)
    };

  return(
    <div>
      <a onClick={handleShow,refreshCart}
        className="nav-link btn d-flex justify-content-center align-items-center"  data-bs-toggle="modal" data-bs-target="#CartModal">
      <FontAwesomeIcon  icon={faShoppingCart} style={{width: "1.2em",marginRight:'5px'}}/>
        Carrito
      </a>
 
      <div className="modal fade modal-right" id="CartModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Carrito</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body overflow-auto">
            {cart.map((product)=>{ 
              return(
                <div key={product.id} className="card card-body mt-2">
                  <div className="row justify-content-between">
                    <img className="col-lg-3 col-md-3 col-sm-3 p-0" src={product.image} style={{width:'120px', height:'90px'}}
                      onError={(e)=>{e.target.onerror = null; e.target.src="/Sushi404.png"}}/>   
                    <div className="col-lg-4 col-md-3 col p-0">
                      <h5 className="text-truncate">{product.name}</h5>
                      <h6 className="tertiary-text">${(product.price*product.cant)}</h6>
                    </div>
                    <div className="col-lg-4 col-md-4 col">
                      <div className="d-flex justify-content-end">
                        <button onClick={()=> deleteProductCart(product.id)} className="btn btn-danger d-flex justify-content-center align-items-center">
                        <FontAwesomeIcon  icon={faTrash} style={{width: "1.0em",marginRight:'5px'}}/>
                          Borrar
                        </button>
                      </div>
                      <div className="d-flex mt-2 justify-content-between align-items-baseline">
                        {Router.asPath == '/'
                          ? <>
                            <button  onClick={()=> resProduct(product.id)} type="button" className="btn sombra border rounded-circle">-</button>
                              <p>{product.cant}</p>
                            <button onClick={()=> sumProduct(product.id)} type="button" className="btn sombra border rounded-circle">+</button>
                            </>
                          :<>

                            </>
                        }
                        
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
                 
            </div>
            <div className="modal-footer justify-content-between">
              <div className="row">
                <h4 className="text-start col-6 ">Total:</h4>
                <h4 className="col-6 tertiary-text">${total}</h4>
              </div>      
              <div className="d-flex">
                <button type="button" className="btn btn-secondary d-flex justify-content-center align-items-center" data-bs-dismiss="modal">
                  <FontAwesomeIcon  icon={faTimes} style={{width: "1.0em",height:'1.0em',marginRight:'5px'}}/>
                  Cerrar
                </button>
                <button onClick={()=> payOrder()} id="close-modal-cart" type="button" style={{marginLeft: '10px'}}className="btn btn-success d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon  icon={faHandHoldingUsd} style={{width: "1.0em",height:'1.0em',marginRight:'5px'}}/>
                  Pagar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Cart;