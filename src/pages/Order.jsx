import axios from "axios";
import { useEffect } from "react";

import store from "../contexts/store";
import Header from "../components/layouts/Header";
import ProductListLoading from "../components/ProductListLoading";
import ProductList from "../components/ProductList";
import Basket from "../components/Basket";

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
        : <ProductListLoading />
      }
      <Basket />
    </>
  )
}
export default Order;