import React, {useState, useEffect} from 'react'

const Cart = (props)=>{
  const [cart,setCart] = useState([]);

  //al abrir la cartera, se refresca con el localstorage
  function refreshCart(e){
    let cartLocal = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cartLocal);
  }
  //eliminar producto de la cartera
  const deleteProductCart = (id)=>{
    let cartLocal = JSON.parse(localStorage.getItem('cart')) || [];
    for (let i = 0; i < cartLocal.length; i++) {
      if(id == cartLocal[i].id){
        cartLocal.splice(i,1);
        window.localStorage.setItem('cart',JSON.stringify(cartLocal))//actualiza localstorage
        setCart(cartLocal);//actualiza cartera
        break;
      }
    }
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
                    <img className="col-3 border"src="" alt=""/>
                    <div className="col-4">
                      <h2 className="">{product.first_name}</h2>
                      <h3 className="">123.123</h3>
                    </div>
                    <div className="col-4">
                      <button onClick={()=> deleteProductCart(product.id)} className="btn btn-danger w-100">Borrar</button>
                      <div className="d-flex mt-2 justify-content-between align-items-baseline">
                        <button className="btn border rounded-circle">-</button>
                        <p>1</p>
                        <button type="button" className="btn border rounded-circle">+</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
                 
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="submit" className="btn btn-primary">Pagar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Cart;