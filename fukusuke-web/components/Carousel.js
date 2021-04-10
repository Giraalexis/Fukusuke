import Router from "next/router";

const Carousel = (props)=>{
  return(
    <div id="carousel" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        {props.products.map((product)=>{  
          return(
            <div key={product.id} className={"carousel-item " + (product.id == 1 ?" active" : "")}>
              <img src={product.imagen} style={{width:'70vh', height:'40vh'}} className="rounded btn sombra mx-auto d-block" onClick={() => Router.push(`/detailProduct/[id]`, `/detailProduct/${product.id}`)} />
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