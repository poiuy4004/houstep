import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
`

function Error(){
  const {isTotalQuantity, setIsTotalQuantity, isTotalValue, setIsTotalValue} = store.useTotal();

  const navigate = useNavigate();

  useEffect(()=>{
    setIsTotalQuantity(-isTotalQuantity);
    setIsTotalValue(-isTotalValue);
    setTimeout(()=>navigate("/order"),3000);
  },[])

  return(
    <Container>
      <div>
        주문에 실패하였습니다.
      </div>
      <div>
        다시 시도해주세요.
      </div>
    </Container>
  )
}
export default Error;