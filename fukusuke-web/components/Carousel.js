
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
      <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    
  )
}

export default Carousel;