import React, {useState, useEffect} from 'react'
import Router from "next/router";

const CardProducto = (props) =>{
  const [products,setProducts] = useState(props.products);
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
            break;
          }
        }
        if(!existe){ //si no existe el producto en la cartera
          console.log("no existe en cartera");
          productsChange[id-1].cant = 1;
          local.push(productsChange[id-1]); //añade el nuevo producto
          //reflejar cambio de stock en el DOM
          let stock = document.getElementById(id+'-card-stock').innerHTML;
          let newStock = stock - 1;
          document.getElementById(id+'-card-stock').innerHTML = newStock;
        }
      }else{//si no existe ningun producto
        productsChange[id-1].cant = 1;
        local.push(productsChange[id-1]); //añade el nuevo producto
        //reflejar cambio de stock en el DOM
        let stock = document.getElementById(id+'-card-stock').innerHTML;
        let newStock = stock - 1;
        document.getElementById(id+'-card-stock').innerHTML = newStock;
      }
    }else{
      console.log("no se añade")
    }
    
    window.localStorage.setItem('cart',JSON.stringify(local))//actualiza localstorage
  }

  return(
    <div className="row" id="cards-container-render"> 
      {products.map(product=>{
        return(
          <form key={product.id} className=" col-lg-4 col-md-6 col-sm-12 mx-auto p-2" >
            <div className="card card-body text-center btn sombra" onClick={() => Router.push(`/detailProduct/[id]`, `/detailProduct/${product.id}`)}>
              <img src={product.image} className="rounded mx-auto d-block" style={{width:'150px', height:'100px'}} alt=""/>              
            </div>
            <div className="card-footer bg-light bg-gradient">
              <div className="row align-items-center">
                <h5 className="col-8 text-truncate">{product.name}</h5>
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
      })}
    </div>
  )
}

export default CardProducto;