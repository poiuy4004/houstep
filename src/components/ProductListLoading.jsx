import styled from "styled-components";

const Container = styled.article`
  height: ${window.innerHeight-57-170}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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