import React, {useState, useEffect} from 'react'

const CardProducto = (props) =>{
  const users = props.users;

  const addProduct =(id) =>{
    console.log(users[id-1]);
  }

  return(
    <div className="row"> 
      {users.map((user)=>{
        return(
          <form key={user.id}  className=" col-lg-4 col-md-6 col-sm-12 mx-auto p-2" >
            <div className="card card-body text-center">
              <img src={user.avatar} className="rounded mx-auto d-block w-50" alt=""/>              
            </div>
            <div className="card-footer bg-light bg-gradient">
              <div className="row align-items-center">
                <h4 className="col-6">{user.first_name}</h4>
                <h2 className="col-6 text-danger">123.123</h2>
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