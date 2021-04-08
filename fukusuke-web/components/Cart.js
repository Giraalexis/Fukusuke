import React, {useState, useEffect} from 'react'

const Cart = (props)=>{
  const [cart,setCart] = useState([]);
  const [total,setTotal] = useState(0);
  
  //al abrir la cartera, se refresca con el localstorage
  function refreshCart(e){
    let cartLocal = JSON.parse(localStorage.getItem('cart')) || [];
    let subTotal = 0;
    for (let i = 0; i < cartLocal.length; i++) {
      subTotal += cartLocal[i].cant * 1000;
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
        subTotal = total - (cartLocal[i].cant * 1000)
        cartLocal.splice(i,1);
        window.localStorage.setItem('cart',JSON.stringify(cartLocal))//actualiza localstorage
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
      if(id == cartLocal[i].id){
        cartLocal[i].cant ++;
      }
      subTotal += cartLocal[i].cant * 1000;
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
        }
        window.localStorage.setItem('cart',JSON.stringify(cartLocal))//actualiza localstorage
        setCart(cartLocal);//actualiza cartera
      }
      subTotal += cartLocal[i].cant * 1000;
    }
    setTotal(subTotal);
  }

  return(
    <div>
      <a className="nav-link btn" onClick={refreshCart} data-bs-toggle="modal" data-bs-target="#CartModal">Carrito</a>

      <div className="modal fade modal-right" id="CartModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content ">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Carrito</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
            {cart.map((product)=>{ 
              return(
                <div key={product.id} className="card card-body mt-2">
                  <div className="row justify-content-between">
                    <img className="col-3 border" src={product.avatar} alt=""/>
                    <div className="col-4">
                      <h2 className="">{product.first_name}</h2>
                      <h3 className="">${(1000*product.cant)}</h3>
                    </div>
                    <div className="col-4">
                      <button onClick={()=> deleteProductCart(product.id)} className="btn btn-danger w-100">Borrar</button>
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
              <h4 className="text-start col-6">Total: ${total}</h4>
              <div className="">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="submit" className="btn btn-primary ">Pagar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Cart;