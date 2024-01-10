
import styled from "styled-components";

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
  box-shadow: 0 -4px 10px 0 rgba(0, 0, 0, 0.25);
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
`
const OrderButton = styled.button`
  height: 47.92px;
  width: 301px;
  border: none;
  background-color: #C1C1C1;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.78px;
`

function Basket(){

  return(
    <Container>
      <Box>
        <OrderList>
          <div>
            총 수량 : 0개
          </div>
          <div>
            총 가격 : 0원
          </div>
        </OrderList>
        <OrderButton>
          주문하기
        </OrderButton>
      </Box>
    </Container>
  )
}
export default Basket;