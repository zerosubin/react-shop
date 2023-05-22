import { styled } from "styled-components"
import { Desktop, Mobile, Tablet } from "../mediaQuery"
import { Link } from "react-router-dom"
// import { useEffect, useState } from "react"
// import { fetchProducts } from "../Service/productService"

interface ProductCardProps {
  title: string,
  price: number,
  image: string,
  id: number,
  name: string
}

export const Card = (props:ProductCardProps) => {

  const floorprice = Math.ceil(props.price)

  return (
    <>
      <Desktop>
        <Link to={`/product/${props.id}`} state={props.name} >
          <Item>
            <Con>
              <Img src={props.image} />
            </Con>
            <Info>
            <Name>
              {props.title}
            </Name>
            <Price>
              {`$${floorprice}`}
            </Price>
            </Info>   
          </Item>
        </Link>
      </Desktop>

      <Tablet>
        <Link to={`/product/${props.id}`} state={props.name} >
          <TabletItem>
            <Con>
              <Img src={props.image} />
            </Con>
            <Info>
            <Name>
              {props.title}
            </Name>
            <Price>
            {`$${floorprice}`}
            </Price>
            </Info>
          </TabletItem>
        </Link>
      </Tablet>

      <Mobile>
        <Link to={`/product/${props.id}`} state={props.name}>
          <MobileItem>
              <Con>
                <Img src={props.image} />
              </Con>
                <Info>
                <Name>
                  {props.title}
                </Name>
                <Price>
                {`$${floorprice}`}
                </Price>
                </Info>
          </MobileItem>
        </Link>
      </Mobile>
    </>
  )
}

const Item = styled.li`
  background-color: #f3f4f6;
  border: 1px solid rgb(229, 231, 235);

  max-width: 320px;
  max-height: 450px;
  min-height: 450px;

  border-radius: 15px;

  &:hover > div > img {
    transform: scale(1.2);
  }
`
const TabletItem = styled.li`
  background-color: #f3f4f6;
  border: 1px solid rgb(229, 231, 235);

  min-width: 320px;
  min-height: 450px;

  border-radius: 15px;

  &:hover > div > img {
    transform: scale(1.2);
  }
`

const MobileItem = styled.li`
  background-color: #f3f4f6;
  border: 1px solid rgb(229, 231, 235);

  min-width: 320px;
  min-height: 450px;

  overflow: visible;

  border-radius: 15px;

  &:hover > div > img {
    transform: scale(1.2);
  }
`

const Con = styled.div`
  width: 100%;
  height: 320px;
  background-color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`

const Img = styled.img`
  max-width: 50%;
  max-height: 50%;

  transition: transform 0.3s ease-in-out;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px 24px;
`

const Name = styled.h4`
  margin: 0;
`

const Price = styled.p`
  margin-top: 10px;
  margin-bottom: 0;
`