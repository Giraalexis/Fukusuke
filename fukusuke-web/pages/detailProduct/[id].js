import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import Head from 'next/head'
import Container from "../../components/Container";
import Link from "next/link";

//peticion por defecto
const defaultEndpoint = 'http://localhost:8000/api/product-detail/';
export async function getServerSideProps(ctx){
  const res = await fetch(defaultEndpoint+ctx.query.id);
  const product = await res.json();
  return{
    props:{
      product
    }
  }
}

const Product = ({product}) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container>
      <Head>
        <title>Fukusuke | Detail</title>
      </Head>
      <div className="row mt-4">
        <div className="col-lg-8 col-md-8 col-sm-12 mx-auto p-0 card">
          <div className="card-header d-flex d-wrap  align-items-baseline justify-content-start">
            <Link href="/"><a className={"btn sombra col-lg-2 col-md-3 col-sm-6"}>Volver</a></Link>
            <h5 className="mx-auto">{product.name}</h5>
          </div>
          <div className="card-body p-0">
            <div className="row">
              <div className="col">
                <img src={product.image} style={{width:'100vh', height:'20vh'}} className="img-fluid" alt=""/>
              </div>
              <div className="col">
                <p className="pr-0">{product.description}</p>
                <h5 className="tertiary-text" >${product.price}</h5>
              </div>
            </div>
          </div>
          <div className="card-footer d-flex justify-content-between align-items-center">
            <div className="col-6">
              <div className="row ">
                <h5 className="col-lg-3 col-md-4 col-sm-6">Stock</h5>
                <h5 id={product.id+"-card-stock"} className="col">{product.stock}</h5>
              </div>
            </div>
            <button className=" btn btn-dark secondary-background cuartiary-text" onClick={() => addProduct(product.id)} type="button">Añadir</button>   
          </div>
        </div>
      </div>
    </Container>
  );
};


export default Product;