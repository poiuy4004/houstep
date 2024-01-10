import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CheckFilled } from "../assets/CheckFilled.svg";

import store from "../contexts/store";

const Container = styled.article`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.78px;
  &>:first-child{
    margin-bottom: 12px;
  }
`

function Complete(){
  const {isTotalQuantity, setIsTotalQuantity, isTotalValue, setIsTotalValue} = store.useTotal();

  const navigate = useNavigate();

  useEffect(()=>{
    setIsTotalQuantity(-isTotalQuantity);
    setIsTotalValue(-isTotalValue);
    setTimeout(()=>navigate("/order"),3000);
  },[])

    return(
      <Container>
        <CheckFilled />
        <div>
          주문이 완료되었습니다.
        </div>
      </Container>
    )
  }
  export default Complete;