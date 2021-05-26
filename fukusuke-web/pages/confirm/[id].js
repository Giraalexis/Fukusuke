import { useRouter } from "next/router";
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import Head from 'next/head'
import Container from "../../components/Container";

//peticion por defecto al cargar esta pagina
const defaultEndpoint = 'http://localhost:8000/api/client-detail/';
export async function getServerSideProps(ctx){
  try{
    const res = await fetch(defaultEndpoint+ctx.query.id);
    const account = await res.json();
    return{
      props:{
        account
      }
    }
  }catch(e){
    console.log("error al obtener el producto")
    const account = [];
    return{
      props:{
        account
      }
    }
  }
}

const Confirm = (props) =>{
    const router = useRouter();
    const { id } = router.query;
    const [values,setValues] = useState([]);

    useEffect(()=>{
        setValues(props.account);
    },[])

    const confirmAccount = async() =>{
        values.state = true;
        const res = await axios.put(`http://localhost:8000/api/client-update/${values.id}`,values)
        if(res.status == 200){
            console.log("cuenta confirmada")
            toast.success("Cuenta confirmada con exito",{
                position:"top-center",
                autoClose: 4000,
                hideProgressBar: true
              });
            router.push('/')
            
        }else{
            console.log("error,intente nuevamente")
            toast.warning("Error al confirmar, Intente nuevamente",{
                position:"top-center",
                autoClose: 4000,
                hideProgressBar: true
              });
        }
    }

    return(
        <Container>
            <Head>
                <title>Fukusuke | Confirm</title>
            </Head>
            <div className="row mx-auto mt-4">
                <div className="card col-lg-6 col-md-6 col-sm-12 mx-auto">
                    <div className="card-body">
                        <h6>Gracias por registrarte en Fukusuke, para terminar el proceso de registro presione el siguiente botón.</h6>
                    </div>
                    <div className="card-footer d-flex">
                        <button  onClick={()=>{confirmAccount()}} className="col mx-auto btn btn-success">Confirmar Cuenta</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Confirm;