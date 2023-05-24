import styled from "styled-components"
import { Desktop, Mobile, Tablet } from "../mediaQuery"
import { Cartsmallbtn } from "./Cartsmallbtn"
import { Link } from "react-router-dom"

interface ArrayLikeType {
  [key: number]: string
}

interface CountArrayLikeType {
  [key: string]: string
}

export const CartCard = (props:any) => {

  var output = localStorage.getItem("CartList")
  let myarr = JSON.parse(output)
  let total = []

  const obj: ArrayLikeType = Object(myarr)
  for(var key in myarr){
    const selected = obj[Number(key)]
    let ob: CountArrayLikeType = Object(selected)
    let count = "count"
    total.push(ob[count])
  }

  console.log(total)

  const realprice = Math.ceil(props.price)

  return (
    <>

        <>
        <Desktop>
        <Con>
        <Product>
            <Imgcon>
            <Link to={`/product/${props.id}`}>
              <Img src={props.image}/>
            </Link>
            </Imgcon>
            <Info>
              <Link to={`/product/${props.id}`}>
                <Title>{props.title}</Title>
              </Link>
              <Price>${realprice}</Price>
              <Btns>
                <Prevbtn>-</Prevbtn>
                <Pbtn>{props.cartnum}</Pbtn>
                <Nextbtn>+</Nextbtn>
              </Btns>
            </Info>
          </Product>
          </Con>
        </Desktop>
        <Tablet>
        <Con>
        <TableProduct>
            <Imgcon>
              <Img src={props.image}/>
            </Imgcon>
            <Info>
              <Title>{props.title}</Title>
              <Price>${realprice}</Price>
              {/* {
                total.map((product, index) => {
                  return (
                    <Cartsmallbtn key={`${index}`}
                    cartnum={product}
                     />
                  )
                })
              } */}
              <Btns>
                <Prevbtn>-</Prevbtn>
                <Pbtn>{props.cartnum}</Pbtn>
                <Nextbtn>+</Nextbtn>
              </Btns>
            </Info>
          </TableProduct>
          </Con>
        </Tablet>
        <Mobile>
        <Con>
        <TableProduct>
          <Imgcon>
              <Img src={props.image}/>
            </Imgcon>
            <Info>
              <Title>{props.title}</Title>
              <Price>${realprice}</Price>
              {/* {
                total.map((product, index) => {
                  return (
                    <Cartsmallbtn key={`${index}`}
                    cartnum={product}
                     />
                  )
                })
              } */}
              <Btns>
                <Prevbtn>-</Prevbtn>
                <Pbtn>{props.cartnum}</Pbtn>
                <Nextbtn>+</Nextbtn>
              </Btns>
            </Info>
          </TableProduct>       
          </Con>   
        </Mobile>
        </>
    </>
  )
}

const Con = styled.div`
  margin: 30px;
`

const Product = styled.div`
  display: flex;
`
const TableProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`
const Imgcon = styled.div`
  padding: 50px;
  max-height: 190px;
  max-width: 190px;
`
const Img = styled.img`
  max-height: 90%;
  max-width: 90%;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 50px;
`

const Title = styled.h2`
  margin: 0;
`

const Price = styled.p`
  font-size: 28px;
  margin: 0;
`

const Btns = styled.div`
  display: flex;
  align-items: baseline;

`
const Prevbtn = styled.button`
  background-color: #570df8;
  border: 1px solid #570df8;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding: 16px;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #30078a;
  }
`

const Pbtn = styled.p`
  margin: 0;
  padding: 16px;
  font-size: 18px;
`
const Nextbtn = styled.button`
  background-color: #570df8;
  border: 1px solid #570df8;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 16px;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #30078a;
  }
`