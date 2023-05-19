import { Link } from "react-router-dom"
import styled from "styled-components"
import { BiMoon } from 'react-icons/bi'
import { GrCart } from 'react-icons/gr'

export const PageHeader = () => {

  const Darkmode = () => {
    const mode = localStorage.getItem('mode')
    if(mode === null) {
      localStorage.setItem('mode','dark')
    } else if (mode === 'dark') {
      localStorage.removeItem('mode')
      localStorage.setItem('mode','white')
    } else if (mode === 'white') {
      localStorage.removeItem('mode')
      localStorage.setItem('mode','dark')
    }
    return mode
  }

  return (
    <Header>
      <Container>
        <Title>
          <Link to="/">React Shop</Link>
        </Title>
        <Ul>
          <Li>
            <Link to="/fashion">패션</Link>
          </Li>
          <Li>
            <Link to="/accessory">액세서리</Link>
          </Li>
          <Li>
            <Link to="/digital">디지털</Link>
          </Li>
        </Ul>
      </Container>
      <Container>
        <Btn onClick={Darkmode}><BiMoon/></Btn>
        <Input type="type" placeholder="검색"></Input>
        <Btnhover><GrCart/><CartNum>0</CartNum></Btnhover>
      </Container>
    </Header>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
`
const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 10px 20px;
  heigth: 64px;
`

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
  color: #374151;
  font-family: var(--font-nanumfont);
`

const Ul = styled.ul`
  list-style:none;
  display: flex;
  margin: 0;
  padding: 5px 10px;
`

const Li = styled.li`
  font-family: var(--font-nanumfont);
  padding: 8px 16px;
  &:hover {
    background-color : #D1D5DB;
    border-radius: 10px;
  }
`

const Input = styled.input`
  padding: 15px;
  background: #D1D5DB;
  margin: 0 8px;
  border: 0;
  border-radius: 5px;
  outline: none;
`

const Btn = styled.button`
  background-color: #fff;
  height: 48px;
  border: 0;
  font-size: 28px;
  padding: 10px;
  cursor: pointer;
`

const Btnhover = styled.button`
  position: relative;
  background-color: #fff;
  border: 0;
  font-size: 28px;
  height: 48px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color : #D1D5DB;
    border-radius: 10px;
  }
`

const CartNum = styled.div`
  position: absolute;
  top: 1px;
  right: 1px;
  width: 18px;
  height: 18px;
  background-color: #EF4444;
  border-radius: 100%;
  font-size: 12px;
  text-align: center;
  padding: 4px 2px 0 2px;
  color: #fff;
`