
import axios from "axios";
import { useEffect } from "react";

import Header from "../components/layouts/Header";
import Loading from "../components/Loading";
import ProductList from "../components/ProductList";
import Basket from "../components/Basket";
import store from "../contexts/store";

function Order(){
  const {isProducts, setIsProducts} = store.useProduct();

  useEffect(()=>{
    axios.get('http://localhost:3001/items')
    .then(res=>setIsProducts(res.data))
    .catch(err=>console.log(err))
  },[])

  return(
    <>
      <Header />
      {isProducts
        ? <ProductList />
        : <Loading />
      }
      <Basket />
    </>
  )
}
export default Order;