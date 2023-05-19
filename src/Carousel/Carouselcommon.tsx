import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa'

export const Carouselcommon = () => {
  return (
    <Carousel>
      <Div>
        <Img src='https://react-shop-oinochoe.vercel.app/img_shop_fashion.jpeg' alt='fashion' />
        <Info>
          <Title>물빠진 청바지!</Title>
          <Desc>이제 막 도착한 패션 청바지를 구경해 보세요.</Desc>
          <Enter>
            <Span>바로가기</Span><FaArrowRight/>
          </Enter>
        </Info>
      </Div>
      <Div>
        <Img src='https://react-shop-oinochoe.vercel.app/img_shop_digital.jpeg' alt='digital' />
        <Info>
          <Title>신속한 업무처리!</Title>
          <Desc>다양한 디지털 상품을 둘러보세요.</Desc>
          <Enter>
            <Span>바로가기</Span><FaArrowRight/>
          </Enter>
        </Info>
      </Div>
      <Div>
        <Img src='https://react-shop-oinochoe.vercel.app/img_shop_grocery.jpeg' alt='grocery' />
        <Info>
          <Title>신선한 식품!</Title>
          <Desc>농장 직배송으로 더욱 신선한 식료품을 만나보세요.</Desc>
          <Enter>
            <Span>바로가기</Span><FaArrowRight/>
          </Enter>
        </Info>
      </Div>
    </Carousel>
      
  )
}

const Div = styled.div`
  position: relative;
  max-height: 700px;
  max-width: auto;
`
const Img = styled.img`
  overflow: hidden;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  top: 40%;
  left: 8%;
  max-height: 140px;
  max-width: 1025px;
`

// position: relative;
// position: absolute;

const Title = styled.h1`
  color: #fff;
  margin: 0;
`
const Desc = styled.p`
  color: #fff;
`
const Enter = styled.a`
  display: flex;
  border: 0;
  border-radius: 10px;
  padding: 15px 25px;
  color: #fff;
  background-color: #3D4451;
  text-align: center;
  cursor: pointer;

  transition: transform 1s ease-in;
  &:hover {
    background-color: #30363f;
  }
`

const Span = styled.span`
  margin-right: 10px;
`