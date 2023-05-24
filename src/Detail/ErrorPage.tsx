import { Link } from "react-router-dom"
import { styled } from "styled-components"

export const ErrorPage = () => {
  return (
    <Container>
      <Title>404</Title>
      <Desc>페이지를 찾을 수 없습니다.</Desc>
      <Link to="/">
         <Btn>메인으로</Btn>
      </Link>
    </Container>

  )
}

const Container =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
  padding: 50px 150px;
`

const Title = styled.h1`
  font-size: 150px;
  margin: 0;
`
const Desc = styled.h3`
  font-size: 25px;
`
const Btn = styled.button`
  border: 0;
  border-radius: 10px;
  background-color: #570df8;
  color: #fff;
  padding: 16px 36px;
  font-weight: 600;
  font-size: 22px;
  letter-spacing: 0.5px;
  cursor: pointer;

  &:hover {
    background-color: #30078a;
  }
`