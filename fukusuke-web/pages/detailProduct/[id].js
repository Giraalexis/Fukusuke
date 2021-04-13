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
      <div className="row">
        <div className="col-lg-8 col-md-8 col-sm-12 mx-auto p-2 card">
          <div className="card-header ">
            <Link href="/"><a className={"btn sombra"}>Volver</a></Link>
            <h5 className="text-center">{product.name}</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <img src={product.image} style={{width:'500px', height:'200px'}} className="img-fluid" alt=""/>
              </div>
              <div className="col">
                <h4>{product.description}</h4>
                <h5>${product.price}</h5>
              </div>
            </div>
          </div>
          <div className="card-footer">

          </div>
        </div>
      </div>
    </Container>
  );
};


export default Product;