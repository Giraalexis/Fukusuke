
const Carousel = (props)=>{
  return(
    <div id="carouselExampleSlidesOnly" className="carousel slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">

        {props.users.map((user)=>{
          return(
            <div key={user.id} className={"carousel-item " + (user.id == 1 ?" active" : "")}>
              <img src={user.avatar} className="rounded mx-auto d-block w-25"  alt="..." />
            </div>
          )
          
        })}
      </div>
    </div>
  )
}

export default Carousel;