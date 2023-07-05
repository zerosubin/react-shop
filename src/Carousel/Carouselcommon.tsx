import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom';

interface imagesType {
  index: number,
  alt: string,
  url: string,
  title: string,
  desc: string
}

export const Carouselcommon = (_props:imagesType) => {
  const images = [
    {
      index: 1,
      alt: 'fashion',
      url: 'https://react-shop-oinochoe.vercel.app/img_shop_fashion.jpeg',
      title: '물빠진 청바지!',
      desc: '이제 막 도착한 패션 청바지를 구경해 보세요.'
    },
    {
      index: 2,
      alt: 'digital',
      url: 'https://react-shop-oinochoe.vercel.app/img_shop_digital.jpeg',
      title: '신속한 업무처리!',
      desc: '다양한 디지털 상품을 둘러보세요.'
    },
    {
      index: 3,
      alt: 'grocery',
      url: 'https://react-shop-oinochoe.vercel.app/img_shop_grocery.jpeg',
      title: '신선한 식품!',
      desc: '농장 직배송으로 더욱 신선한 식료품을 만나보세요.'
    }
  ]

  return (
    <Container>
      <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true}>
        {
          images.map(image => (
              <Div key={image.index}>
                <Img src={image.url} alt={image.alt} />
                <Info>
                  <Title>{image.title}</Title>
                  <Desc>{image.desc}</Desc>
                  <Link to={`/${image.alt}`}>
                    <Enter>
                      <Span>바로가기</Span><FaArrowRight/>
                    </Enter>
                  </Link>
                </Info>
              </Div>
          ))
        }
      </Carousel>
    </Container>
  )
}

const Container = styled.div`
  margin-top: 68px;
  width: 100%;
  z-index: -999;
`

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
const Title = styled.h1`
  letter-spacing: 2px;
  color: #fff;
  margin: 0;
`
const Desc = styled.p`
  color: #fff;
`
const Enter = styled.div`
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