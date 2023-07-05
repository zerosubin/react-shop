import styled from "styled-components"
import { Desktop, Mobile, Tablet } from "../mediaQuery"
import { Link } from "react-router-dom"
import { AiFillDelete } from "react-icons/ai"
import { useSetRecoilState } from "recoil"
import { CartitemAtom } from "../recoil/CartitemAtom"


export const CartCard = (props: any) => {
  const setItem = useSetRecoilState(CartitemAtom)
  const removecart = () => {
    setItem((prev:any)=>prev.filter((e:any)=>e.id!==props.id))
    alert('장바구니에서 삭제 되었습니다')
  }

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
              <Btn onClick={removecart}>
                <AiFillDelete size='32'/>
              </Btn>
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
              <Btn onClick={removecart}>
                <AiFillDelete size='32'/>
              </Btn>
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
              <Btn onClick={removecart}>
              <AiFillDelete size='32'/>
              </Btn>
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
  align-items: center;
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
  gap: 1.2rem;
  padding: 50px;
`

const Title = styled.h2`
  margin: 14px 0;
`

const Price = styled.p`
  font-size: 28px;
  margin: 0;
`

const Btn = styled.div`
  cursor: pointer;
`