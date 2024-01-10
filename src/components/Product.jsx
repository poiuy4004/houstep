
import { useEffect, useState } from "react";
import styled from "styled-components";

import store from "../contexts/store";
import Event from "./atoms/Event";

const Container = styled.li`
  height: 80px;
  min-width: 301px;
  padding: 8px 8px 8px 12px;
  display: flex;
  column-gap: 8px;
  align-items: center;
  border: solid 1px #0000004D;
  border-radius: 10px;
  ${props=>props.isQuantity? "background-color: #F75A2F1A;" : null}
`
const ImageBox = styled.div`
  height: 62px;
  width: 62px;
  background-color: #D9D9D9;
`
const Box = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const NameBox = styled.div`
  display: flex;
`
const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
`
const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  &>*{
    height: 22px;
    width: 19px;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 21.78px;
  }
`

function Product({product}){
  const [isQuantity, setIsQuantity] = useState(0);
  const {isTotalQuantity,setIsTotalQuantity} = store.useTotal();

  useEffect(()=>{
    setIsTotalQuantity(isQuantity);
  },[isQuantity])
console.log(isTotalQuantity)
  return(
    <Container isQuantity={isQuantity}>
      <ImageBox></ImageBox>
      <Box>
        <NameBox>
          <div>{product.name}</div>
          {product.event? <Event /> : null}
        </NameBox>
        <PriceBox>
          <QuantityBox>
            <button onClick={()=>setIsQuantity(prev=>prev-1<0? 0 : prev-1)}>-</button>
            <div>{isQuantity}</div>
            <button onClick={()=>setIsQuantity(prev=>prev+1)}>+</button></QuantityBox>
          <div>{product.price.toLocaleString()}원</div>
        </PriceBox>
      </Box>
    </Container>
  )
}
export default Product;