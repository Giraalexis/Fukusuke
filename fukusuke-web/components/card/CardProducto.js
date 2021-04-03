
const CardProducto = (props) =>{
  const users = props.users;
  console.log(props.users[0].id);
  return(
    <div className="row"> 
      {users.map((user)=>{
        return(
          <div key={user.id} className=" col-lg-4 col-md-6 col-sm-12 mx-auto p-2" >
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
                <button className=" col-6 btn btn-primary">Añadir</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CardProducto;