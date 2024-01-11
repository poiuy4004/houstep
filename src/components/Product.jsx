import { useState } from "react";
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
  ${props=>props.className>0? "background-color: #F75A2F1A" : "background-color: transparent"};
`
const ImageBox = styled.div`
  height: 62px;
  width: 62px;
  background-color: #D9D9D9;
`
const Box = styled.div`
  height: 100%;
  margin-left: 8px;
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
    min-width: 19px;
    text-align: center;
  }
`

function Product({product}){
  const [isQuantity, setIsQuantity] = useState(0);
  const {setIsTotalQuantity,setIsTotalValue} = store.useTotal();

  function handleDownButton(){
    if(isQuantity-1<0){
      setIsQuantity(0);
    }
    else{
      setIsQuantity(prev=>prev-1);
      setIsTotalQuantity(-1);
      setIsTotalValue(-(product.price));
    }
  }
  function handleUpButton(){
    if(isQuantity+1>999){
      setIsQuantity(999);
    }
    else{
      setIsQuantity(prev=>prev+1);
      setIsTotalQuantity(+1);
      setIsTotalValue(product.price);
    }
  }

  return(
    <Container className={isQuantity}>
      <ImageBox></ImageBox>
      <Box>
        <NameBox>
          <div>{product.name}</div>
          {product.event? <Event /> : null}
        </NameBox>
        <PriceBox>
          <QuantityBox>
            <button onClick={handleDownButton}>-</button>
            <div>{isQuantity}</div>
            <button onClick={handleUpButton}>+</button>
          </QuantityBox>
          <div>{(product.price).toLocaleString("ko-KR")}원</div>
        </PriceBox>
      </Box>
    </Container>
  )
}
export default Product;