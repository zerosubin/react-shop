import { Link } from "react-router-dom"
import styled from "styled-components"
import { BiMoon } from 'react-icons/bi'
import { GrCart } from 'react-icons/gr'
import { Desktop, Mobile, Tablet } from "../mediaQuery"
import { BsList } from 'react-icons/bs'

interface Props {
	onmodal(): void;
}

export const PageHeader = ({ onmodal }: Props ) => {

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
    <DIV>
      <Header>
        <Container>
          <Desktop>
            <>
              <Title>
                <Link to="/">React Shop</Link>
              </Title>
              <Ul>
                <Link to="/fashion">
                  <Li>패션</Li>
                </Link>
                <Link to="/accessory">
                  <Li>액세서리</Li>
                </Link>
                <Link to="/digital">
                  <Li>디지털</Li>
                </Link>
              </Ul>
            </>
          </Desktop>
          <Tablet>
            <>
              <Btnmedia onClick={onmodal}> 
                <BsList/>
              </Btnmedia>
              <Title>
                <Link to="/">React Shop</Link>
              </Title>
              <Ul>
                <Link to="/fashion">
                  <Li>패션</Li>
                </Link>
                <Link to="/accessory">
                  <Li>액세서리</Li>
                </Link>
                <Link to="/digital">
                  <Li>디지털</Li>
                </Link>
              </Ul>
            </>
          </Tablet>
          <Mobile>
            <>
              <Btnmedia onClick={onmodal}>
                <BsList/>
              </Btnmedia>
              <Title>
                  <Link to="/">React Shop</Link>
              </Title>
            </>
          </Mobile>
        </Container>
        <Container>
          <Btn onClick={Darkmode}><BiMoon/></Btn>
          <Input type="type" placeholder="검색"></Input>
          <Link to="/cart">
            <Btnhover><GrCart/><CartNum>0</CartNum></Btnhover>
          </Link>
        </Container>
      </Header>
    </DIV>
  )
}

const DIV = styled.div`
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 9999;
`

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Btnmedia = styled.button`
  background-color: #fff;
  height: 38px;
  border: 0;
  font-size: 28px;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color : #D1D5DB;
    border-radius: 10px;
  }
`

const Header = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
  heigth: 64px;
  background-color : #fff;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / .1);
`

const Title = styled.h1`
  margin: 0 0 0 5px;
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
  z-index: 9999;
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