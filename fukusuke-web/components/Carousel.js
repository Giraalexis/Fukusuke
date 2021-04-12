import Router from "next/router";

const Carousel = (props)=>{
  let isFirst = 0; //para colocar la classe 'active' al primer elemento que sea promocion
  return(
    <div id="carousel" className="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
      <div className="carousel-inner">
        {props.products.map((product, index)=>{
          if(product.promotion && isFirst == 0){
            isFirst += 1;
            return (
              <div key={product.id} className={"carousel-item active"}>
                <img src={product.image} style={{width:'70vh', height:'40vh'}} className="rounded btn sombra mx-auto d-block" onClick={() => Router.push(`/detailProduct/[id]`, `/detailProduct/${product.id}`)} />
              </div>  
            )
          }else if(product.promotion ){
            return (
              <div key={product.id} className={"carousel-item"}>
                <img src={product.image} style={{width:'70vh', height:'40vh'}} className="rounded btn sombra mx-auto d-block" onClick={() => Router.push(`/detailProduct/[id]`, `/detailProduct/${product.id}`)} />
              </div>  
            )
          }
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