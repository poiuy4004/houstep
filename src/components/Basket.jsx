import axios from "axios";
import styled from "styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import store from "../contexts/store";

const Container = styled.div`
  height: 170px;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px 20px 0 0;
  background-color: #FFFFFF;
  box-shadow: 0 -4px 10px 0 #00000040;
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 18.46px;
  align-items: flex-end;
`
const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.76px;
  text-align: right;
`
const OrderButton = styled.button`
  height: 47.92px;
  width: 301px;
  border: none;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.78px;
  ${props=>props.className>0
  ? "background-color: #000000; cursor: pointer;"
  : "background-color: #C1C1C1; cursor: auto;"}
`

function Basket(){
  const [orderBefore, setOrderBefore] = useState(true);
  const {isTotalQuantity,isTotalValue} = store.useTotal();
  const navigate = useNavigate();

  function handleOrder(){
    setOrderBefore(false)
    if(isTotalQuantity){
      axios.post('http://localhost:3001/결제페이지',{
        isTotalQuantity: isTotalQuantity,
        isTotalValue: isTotalValue,
      })
      .then(res=>{
        199<res.status<300
        ? navigate("/complete")
        : navigate("/error")
      })
      .catch(err=>navigate("/error"))
    }
  }

  return(
    <Container>
      <Box>
        <OrderList>
          <div>
            총 수량 : {isTotalQuantity.toLocaleString("ko-KR")}개
          </div>
          <div>
            총 가격 : {isTotalValue.toLocaleString("ko-KR")}원
          </div>
        </OrderList>
        <OrderButton className={isTotalQuantity}
          onClick={handleOrder}
        >
          {orderBefore? "주문하기" : "로딩중..."}
        </OrderButton>
      </Box>
    </Container>
  )
}
export default Basket;