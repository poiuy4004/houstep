
import styled from "styled-components"

import { Link } from "react-router-dom";
import { ReactComponent as LogoSvg } from "../../assets/logo/logoSmall.svg";

const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 57px;
  display: flex;
  align-items: center;
  background-color: #000000;
  box-shadow: 0 4px 4px 0 #00000040;
  &>*{
    margin-left: 12px;
  }
`

function Header(){
  return(
    <Container>
      <Link to="/"><LogoSvg /></Link>
    </Container>
  )
}
export default Header;