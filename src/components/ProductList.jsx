import styled from "styled-components";

import store from "../contexts/store";
import Product from "./Product";

const Container = styled.ul`
  padding: 18px 0;
  display: flex;
  flex-direction: column;
  row-gap: 18px;
  align-items: center;
  list-style: none;
`

function ProductList(){
  const { isProducts } = store.useProduct();

  return(
    <Container>
      {isProducts.map(product=>(
        <Product product={product} key={product.id} />
      ))}
    </Container>
  )
}
export default ProductList;