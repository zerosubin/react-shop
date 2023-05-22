import { styled } from "styled-components"
import visa from '../assets/visa.png'
import mastercard from '../assets/mastercard.png'
import amex from '../assets/amex.png'
import paypal from '../assets/paypal.png'
import diners from '../assets/diners.png'
import discover from '../assets/discover.png'

import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'


// interface fotarrType {
//   svg: string
// }

export const Footer = () => {
  return (
    <Container>
        <Title>
          <a href="https://www.zero-base.co.kr">
            제로베이스  
          </a>
        </Title>
        <FooterURL>
          <FooterImg src={visa} alt="visa" />
          <FooterImg src={mastercard} alt="mastercard" />
          <FooterImg src={amex} alt="amex" />
          <FooterImg src={paypal} alt="paypal" />
          <FooterImg src={diners} alt="diners" />
          <FooterImg src={discover} alt="discover" />
        </FooterURL>
        <Sns>
          <a href="https://ko-kr.facebook.com/" target="_blank">
            <Snsimg src= {facebook} alt="facebook"/>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <Snsimg src={instagram} alt="instagram" />
          </a>
          <a href="https://github.com/" target="_blank">
            <Snsimg src={github} alt="github" />
          </a>
        </Sns>
        <Copyright>
          Copyright © 2023 subin
        </Copyright>
    </Container>
  )
}

const Container = styled.footer`
  width: 100%;
  margin-top: 150px;
  background-color: #f9fafb;

  padding: 40px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 25px 25px 25px 25px;
  justify-items: center;
  gap: 2rem;
`

const Title = styled.p`
  margin: 0;
  &:hover {
    text-decoration : underline;
  }
`

const FooterURL = styled.ul`
  margin: 0;
`
const FooterImg = styled.img`
  max-width: 26px;
  max-heigth: 8px;
  border: 1px solid #cecece;
  border-radius: 5px;
  padding: 0 5px;
  margin: 0 3px;
`

const Sns = styled.div`
`

const Snsimg = styled.img`
  max-width: 24px;
  max-heigth: 24px;
  margin: 0 4px;
`

const Copyright = styled.p`
  margin: 0;
`
