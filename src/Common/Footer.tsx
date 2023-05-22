import { styled } from "styled-components"

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
          <FooterImg src="\src\assets\visa.png" />
          <FooterImg src="\src\assets\mastercard.png" />
          <FooterImg src="\src\assets\amex.png" />
          <FooterImg src="\src\assets\paypal.png" />
          <FooterImg src="\src\assets\diners.png" />
          <FooterImg src="src\assets\github.png" />
        </FooterURL>
        <Sns>
          <a href="https://ko-kr.facebook.com/" target="_blank">
            <Snsimg src= "\src\assets\facebook.png"/>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <Snsimg src= "\src\assets\instagram.png"/>
          </a>
          <a href="https://github.com/" target="_blank">
            <Snsimg src= "\src\assets\github.png"/>
          </a>
        </Sns>
        <Copyright>
          Copyright © 2022 subin
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
  background-color: #fff;
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
