import React, {useState, useEffect} from 'react'
import Router from "next/router";

const CardProducto = (props) =>{
  const users = props.users;

  //añadir producto segun la id al carrito en localStorage
  const addProduct =(id) =>{
    let local = JSON.parse(localStorage.getItem('cart')) || [];//obtener local de cart (si es null, retorna [])
    let existe = false;
    if(local.length > 0){ //si existe algun producto
      for (let i= 0; i< local.length; i++) {
        if(local[i].id == id){
          console.log("existe un producto similar");
          local[i].cant ++;
          existe = true;
          break;
        }
      }
      if(!existe){ //si no existe el producto
        users[id-1].cant = 1;
        local.push(users[id-1]); //añade el nuevo producto
      }
    }else{//si no existe ningun producto
      users[id-1].cant = 1;
      local.push(users[id-1]); //añade el nuevo producto
    }
    
    window.localStorage.setItem('cart',JSON.stringify(local))//actualiza localstorage
  }

  return(
    <div className="row"> 
      {users.map((user)=>{
        return(
          <form key={user.id} onClick={() => Router.push(`/detailProduct/[id]`, `/detailProduct/${user.id}`)} className=" col-lg-4 col-md-6 col-sm-12 mx-auto p-2" >
            <div className="card card-body text-center">
              <img src={user.avatar} className="rounded mx-auto d-block w-50" alt=""/>              
            </div>
            <div className="card-footer bg-light bg-gradient">
              <div className="row align-items-center">
                <h4 className="col-6 text-truncate">{user.first_name}</h4>
                <h2 className="col-6 text-danger">$1000</h2>
              </div>
              <div className="row align-items-center">
                <h4 className="col-6"></h4>
                <button className="col-6 btn btn-primary" onClick={() => addProduct(user.id)} type="button">Añadir</button>
              </div>
            </div>
          </form>
        )
      })}
    </div>
  )
}

export default CardProducto;