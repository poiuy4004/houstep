
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as LogoSvg } from "../assets/logo/logo.svg";

const Container = styled.main`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  row-gap: 41px;
  justify-content: center;
  align-items: center;
  background-color: #000000;
`
const OrderButton = styled.button`
  height: 88px;
  width: 172px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #FFFFFF;
  font-size: 25px;
  font-weight: 400;
  line-height: 30.26px;
`

function Home(){
  return(
    <Container>
      <LogoSvg />
      <Link to="/order">
        <OrderButton>
          주문하러 가기
        </OrderButton>
      </Link>
    </Container>
  )
}
export default Home;