import axios from "axios";
import styled from "styled-components";
import { useEffect } from "react";

import store from "../contexts/store";
import Header from "../components/layouts/Header";
import ProductListLoading from "../components/ProductListLoading";
import ProductList from "../components/ProductList";
import Basket from "../components/Basket";

const Container = styled.div`
  padding: 57px 0 170px;
`

function Order(){
  const {isProducts, setIsProducts} = store.useProduct();

  useEffect(()=>{
    axios.get('http://localhost:3001/items')
    .then(res=>setIsProducts(res.data))
    .catch(err=>console.log(err));
  },[])

  return(
    <Container>
      <Header />
      {isProducts
        ? <ProductList />
        : <ProductListLoading />
      }
      <Basket />
    </Container>
  )
}
export default Order;