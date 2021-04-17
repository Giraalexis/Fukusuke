import React, {useState, useEffect} from 'react'
import Router from "next/router";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardProducto = (props) =>{
  const [products,setProducts] = useState(props.products);

  useEffect(()=>{ //ejecuta luego de cargar la pagina
    const setStockonCant = ()=>{ //actualiza el stock al cargar la pagina, segun la cant en la cartera
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      for (let i = 0; i < cart.length; i++) {
        console.log(cart[i].cant);
        document.getElementById(cart[i].id+'-card-stock').innerHTML = cart[i].stock - cart[i].cant;
      }
    }
    setStockonCant();
  },[])//ejecuta solo 1 vez

  //añadir producto segun la id al carrito en localStorage
  const addProduct = (id) =>{
    let local = JSON.parse(localStorage.getItem('cart')) || [];//obtener local de cart (si es null, retorna [])
    let productsChange = products;
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

  return(
    <div className="row" id="cards-container-render">
      {products.map(product=>{
        if(product.state){
          return(
            <form key={product.id} className=" col-lg-4 col-md-6 col-sm-12 mx-auto pt-3 " >
              <div className="card card-body text-center btn sombra" onClick={() => Router.push(`/detailProduct/[id]`, `/detailProduct/${product.id}`)}>
                <img src={product.image} className="img-fluid rounded mx-auto d-block" style={{width:'100%', height:'20vh'}} alt=""
                onError={(e)=>{e.target.onerror = null; e.target.src="/Sushi404.png"}}/>              
              </div>
              <div className="card-footer bg-light bg-gradient">
                <div className="row align-items-center">
                  <h5 className="col-8 text-truncate text-capitalize">{product.name}</h5>
                  <h4 className="col-4 tertiary-text">${product.price}</h4>
                </div>
                <div className="row align-items-center">
                  <h6 className="col-8 ">Stock</h6>
                  <h6 id={product.id+"-card-stock"} className="col-4 ">{product.stock}</h6>
                  <button className=" btn btn-dark secondary-background cuartiary-text" onClick={() => addProduct(product.id)} type="button">Añadir</button>
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