
const Carousel = (props)=>{
  return(
    <div id="carousel" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        {props.users.map((user)=>{
          return(
            <div key={user.id} className={"carousel-item " + (user.id == 1 ?" active" : "")}>
              <img src={user.avatar} className="rounded mx-auto d-block w-50" alt="..." />
            </div>
          )
        })}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    
  )
}

export default Carousel;