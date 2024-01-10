import styled from "styled-components";

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
`

function Error(){
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