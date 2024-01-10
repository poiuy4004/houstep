import styled from "styled-components";

const Container = styled.article`
  height: ${window.innerHeight-57-170}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.78px;
`
function ProductListLoading(){
  return(
    <Container>
      <div>
        목록을
      </div>
      <div>
        불러오고 있습니다.
      </div>
    </Container>
  )
}
export default ProductListLoading;