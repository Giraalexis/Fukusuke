import { useRouter } from "next/router";
import fetch from "isomorphic-unfetch";
import Head from 'next/head'
import Container from "../../components/Container";

const Product = ({ user }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Container>
      <Head>
        <title>Fukusuke | Detail</title>
      </Head>
      <h2>Product detail Works {id}</h2>
    </Container>
  );
};

//peticiones
Product.getInitialProps = async (ctx) => {
  // console.log(ctx.query.id)
  const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
  const resJSON = await res.json();
  // console.log(resJSON);
  return { user: resJSON.data };
};

export default Product;