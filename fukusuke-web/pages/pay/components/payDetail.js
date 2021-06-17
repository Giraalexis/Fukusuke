import React, {useState, useEffect} from 'react'
import Link from "next/link";




const PayDetail = (props)=> {
  const [url, setUrl] = useState(props.response.url)
  const [token, setToken] = useState(props.response.token)
  const [cart,setCart] = useState([]);
  const [total,setTotal] = useState(0);
  const [direccion,setDireccion] = useState('');
  useEffect(()=>{
    const loadData = ()=>{ //Mostrar productos y Direccion
      let direccion = JSON.parse(localStorage.getItem('session')).adress
      let cartLocal = JSON.parse(localStorage.getItem('cart')) || [];
      let subTotal = 0;
      for (let i = 0; i < cartLocal.length; i++) {
        subTotal += cartLocal[i].cant * cartLocal[i].price;
      }
      setDireccion(direccion);
      setTotal(subTotal);
      setCart(cartLocal);
    }
    setUrl(props.response.url)
    setToken(props.response.token)
    loadData();
  },[])

  //Guardar el estado de lo escrito en input
  const handleInputChange = e=>{
    const {name, value} = e.target;//Captura el nombre y el valor 
    console.log(value)
    setDireccion(value)
    localStorage.setItem('adress',JSON.stringify(value));
  }

  return (
    <div className="row mt-4">
      <form method="post" action={url} className="col-lg-10 col-md-10 col-sm-12 mx-auto p-0 card">
        <div className="card-header">
          <h5>Detalle de la compra</h5>
        </div>
        <div className="card-body">
        {cart.map((product)=>{
          return(
            <div key={product.id} className="card card-body mt-2">
              <div className="row justify-content-between">
                <img className="col-lg-3 col-md-3 col-sm-3 p-0" src={product.image} style={{width:'120px', height:'90px'}}
                  onError={(e)=>{e.target.onerror = null; e.target.src="/Sushi404.png"}}/>   
                <div className="col-lg-4 col-md-3 col p-0">
                  <h5 className="text-truncate">{product.name}</h5>
                  <p>Cantidad {product.cant}</p> 
                </div>
                <div className="col-lg-4 col-md-4 col">
                  <div className="d-flex justify-content-end">    
                    <h6 className="tertiary-text">${(product.price*product.cant)}</h6>
                  </div>
                </div>
              </div>
            </div>
          )
        })
        }
        </div>
        <div className="row justify-content-center m-3">
          <h6 className="col-5 col-form-label">Dirección de despacho:</h6>
          <input onChange={handleInputChange} value={direccion} className="col form-control " />
        </div> 
        <div className="row justify-content-center p-3">
          <h4 className="col-5">Total:</h4>
          <h4 className="col-6 tertiary-text d-flex justify-content-end">${total}</h4>
        </div> 
        <div className="card-footer row">
          <Link href="/"><button className="btn btn-secondary col-lg-6 col-md-6 col-sm-12 m-1">Seguir Comprando</button></Link>
          <input type="hidden" name="token_ws" value={token} />
          <input type="submit" value="Ir a pagar" className="btn btn-success col m-1"/>
        </div>
      </form>
    </div>

  )
}
  
  
  export default PayDetail;