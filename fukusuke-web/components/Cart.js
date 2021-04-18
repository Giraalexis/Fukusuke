import React, {useState, useEffect} from 'react'
import Router from "next/router";

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
        console.log("cartera no existe");
      }else{
        console.log("cartera existe");
        if(!JSON.parse(localStorage.getItem('cart')).length){//verifica que la cartera este vacia
          console.log("cartera vacia")
        }else{
          console.log("realizar pago")
          //realizar el pago
          handleClose();
          Router.push('/pay')
        }
      }
    }else{
      console.log("sesion no iniciada")
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
      <a className="nav-link btn" onClick={handleShow} onClick={refreshCart} data-bs-toggle="modal" data-bs-target="#CartModal">Carrito</a>

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
                    <img className="col-lg-3 col-md-3 col-sm-3 p-0" src={product.image} style={{width:'120px', height:'90px'}}/>
                    <div className="col-lg-4 col-md-3 col p-0">
                      <h5 className="text-truncate">{product.name}</h5>
                      <h6 className="tertiary-text">${(product.price*product.cant)}</h6>
                    </div>
                    <div className="col-lg-4 col-md-4 col">
                      <div className="d-flex justify-content-end">
                        <button onClick={()=> deleteProductCart(product.id)} className="btn btn-danger ">Borrar</button>
                      </div>
                      <div className="d-flex mt-2 justify-content-between align-items-baseline">
                        <button  onClick={()=> resProduct(product.id)} type="button" className="btn sombra border rounded-circle">-</button>
                        <p>{product.cant}</p>
                        <button onClick={()=> sumProduct(product.id)} type="button" className="btn sombra border rounded-circle">+</button>
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
              <div className="">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button onClick={()=> payOrder()} id="close-modal-cart" type="button" className="btn btn-primary ">Pagar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Cart;