import styled from "styled-components";

const Container = styled.div`
  height: 23px;
  width: 53px;
  margin-left: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #F75A2F;
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0.16px;
`

function Event(){
  return(
    <Container>
      이벤트
    </Container>
  )
}
export default Event;