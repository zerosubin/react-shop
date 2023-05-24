import styled from "styled-components"
import { Sectioninfo } from "../Common/Sectioninfo"
import { Link, useLocation } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import { Desktop, Mobile, Tablet } from "../mediaQuery"

interface ProductDeatilType {
  category: string,
  description: string,
  id: number,
  image: string,
  price: number,
  rating: {
    rate: number,
    count: number
  }[],
  title: string
}

interface RatingstarType {
  rate: number,
  count: number,
}

interface ArrayLikeType {
  [key: number]: string
}

interface CountArrayLikeType {
  [key: string]: string
}

export const ProductDetailPage = () => {
  const location = useLocation()
  const str = location.pathname
  const re =  /[^0-9]/g
  var result = str.replace(re, "")

  const ProductDeatilfetch = async () => {
    const remote = axios.create()
    const url = await remote.get<ProductDeatilType, any>(`https://fakestoreapi.com/products/${result}`)
    return url.data
  }

  const [productdetail, setProductdetail] = useState<ProductDeatilType>({
    category: '',
    description: '',
    id: 0,
    image: '',
    price: 0,
    rating: [],
    title: ''
  })

  useEffect(() => {
    (async () => {
      const productdetail = await ProductDeatilfetch()
      setProductdetail(productdetail)
    })()
  }, [])


  const Ratingstarfetch = async () => {
    const remote = axios.create()
    const url = await remote.get<RatingstarType, any>(`https://fakestoreapi.com/products/${result}`)
    return url.data.rating
  }

  const [Ratingstar, setRatingstar] = useState<RatingstarType>({
    rate: 0,
    count: 0
  })

  useEffect(() => {
    (async () => {
      const Ratingstar = await Ratingstarfetch()
      setRatingstar(Ratingstar)
    })()
  }, [])

  
  const [countup, setCountup] = useState({})
  const [num, setNum] = useState(1)

  const Starnum = Ratingstar.rate
  const Percentwidth = (Starnum / 5) * 100 - 8


  const GetProducts = () => {
    var output = localStorage.getItem("CartList")
    let myarr = JSON.parse(output)

    const productID = productdetail.id
    let count = 1
    const mycart = {
      id: Number(`${productID}`),
      count: Number(`${count}`)
    }
    const cart = JSON.stringify(mycart)
    var PROID = String(productID)
    const mylist = {
      [PROID] : JSON.parse(`${cart}`)
    }

    const lastList = {...myarr, ...mylist}

    if(myarr !== null) {
      // 현재 가지고 있는 거 lastList
      // 추가 안 된 거 myarr
      // 지금 누른 거 mylist
      setCountup(
        {...myarr, ...mylist, ...countup}
      )
      const lastList = {...myarr, ...mylist, ...countup}

      console.log('로컬존재함')

      const totalList = JSON.stringify(lastList)
      localStorage.setItem("CartList", totalList)

      if(!myarr.hasOwnProperty([PROID])) {
        console.log('없어서 추가햇어용')
      } else {
        console.log('똑같은거잇어요')

        setCountup(
          {...myarr, ...mylist}
        )

        const initid = myarr[PROID].id
        const obj: ArrayLikeType = countup
        const selected = obj[initid]

        let ob: CountArrayLikeType = Object(selected)
        let count = "count"
        let countNUM = ob[count]

        setNum(num + 1)
        countNUM += num
        Object(selected).count = countNUM

        localStorage.setItem("CartList", JSON.stringify(countup))
      }
    } else {
      const totalList = JSON.stringify(lastList)
      localStorage.setItem("CartList", totalList)
      setCountup(
        {...lastList}
      )
      console.log('처음누름!!')
    }
  }

  // const [cartpuls, setCartpuls] = useState(1)


  // const NumberPuls = () => {
  //   setCartpuls(cartpuls + 1)
  //   console.log(cartpuls)
  // }

  let originalprice = Math.ceil(productdetail.price)


  return (
    <>
      <Sectioninfo title={location.state} name={productdetail.title}/>
      <Desktop>
        <>
        <Container>
            <Imgcon>
              <ProImg src={productdetail.image} />
            </Imgcon>
            <Info>
              <Title>
                <strong>{productdetail.title}</strong><Newmark>NEW</Newmark>
              </Title>
              <Desc>
                {productdetail.description}
              </Desc>
              <StarGroup>
                <Star>
                  <RatingToPercent width={`$: any{Percentwidth}%`}>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                  </RatingToPercent>
                  <Starratingbase>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                  </Starratingbase>
                </Star>
                <Countdiv>
                  {Ratingstar.rate}
                  /
                  {Ratingstar.count}
                  참여
                </Countdiv>
              </StarGroup>
              <Price>${originalprice}</Price>
              <Btns>
              <CartGet onClick={() => {
                GetProducts()
                }}>장바구니에 담기</CartGet>
                <Link to="/cart">
                  <CartGo>장바구니로 이동</CartGo>
                </Link>
              </Btns>
            </Info>
          </Container>
        </>
        </Desktop>
        <Tablet>
          <>
            <TabletContainer>
            <Imgcon>
              <ProImg src={productdetail.image} />
            </Imgcon>
            <Info>
              <Title>
                <strong>{productdetail.title}</strong><Newmark>NEW</Newmark>
              </Title>
              <Desc>
                {productdetail.description}
              </Desc>
              <StarGroup>
                <Star>
                  <RatingToPercent width={`${Percentwidth}%`}>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                  </RatingToPercent>
                  <Starratingbase>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                  </Starratingbase>
                </Star>
                <Countdiv>
                  {Ratingstar.rate}
                  /
                  {Ratingstar.count}
                  참여
                </Countdiv>
              </StarGroup>
              <Price>${productdetail.price}</Price>
              <Btns>
              <CartGet onClick={() => {
                GetProducts()
                }}>장바구니에 담기</CartGet>
                <Link to="/cart">
                  <CartGo>장바구니로 이동</CartGo>
                </Link>
              </Btns>
            </Info>
          </TabletContainer>
          </>
        </Tablet>
        <Mobile>
        <>
          <TabletContainer>
            <Imgcon>
              <ProImg src={productdetail.image} />
            </Imgcon>
            <Info>
              <Title>
                <strong>{productdetail.title}</strong><Newmark>NEW</Newmark>
              </Title>
              <Desc>
                {productdetail.description}
              </Desc>
              <StarGroup>
                <Star>
                  <RatingToPercent width={`${Percentwidth}%`}>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                  </RatingToPercent>
                  <Starratingbase>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                    <Starspan>★</Starspan>
                  </Starratingbase>
                </Star>
                <Countdiv>
                  {Ratingstar.rate}
                  /
                  {Ratingstar.count}
                  참여
                </Countdiv>
              </StarGroup>
              <Price>${productdetail.price}</Price>
              <Btns>
              <CartGet onClick={() => {
                GetProducts()
                }}>장바구니에 담기</CartGet>
                <Link to="/cart">
                  <CartGo>장바구니로 이동</CartGo>
                </Link>
              </Btns>
            </Info>
          </TabletContainer>
          </>
        </Mobile>
    </>

  )
}

const Container = styled.div`
  display: flex;
  margin-top: 78px;
  padding: 0 90px;
  justify-content: center;
`

const TabletContainer = styled.div`
  display: flex;
  margin-top: 78px;
  flex-direction: column;
  align-items: center;
`

const Imgcon = styled.div`
`

const ProImg = styled.img`
  max-width: 288px;
  max-height: 288px;
  padding: 30px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.8rem;
  padding: 32px 48px;
`

const Title = styled.h2`
  margin: 0;
`

const Newmark = styled.span`
  margin-left: 18px;
  padding: 2px 12px;
  border: 1px solid #37cdbe;
  border-radius: 15px;
  background-color: #37cdbe;

  color: #fff;
  font-size: 16px;
`

const Desc = styled.p`
  margin: 0;
`

const StarGroup = styled.div`
  display: flex;
`

const Star = styled.div`
  color: #ffde7b;
  position: relative;
  unicode-bidi: bidi-override;
  width: max-content;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 1.3px;
  margin: 0 10px 0 0;
`

const Starspan = styled.span`
  padding: 0 3px;
`

const RatingToPercent = styled.div<{ width: string }>`
  color: #ffc419;
  padding: 0;
  position: absolute;
  z-index: 1;
  display: flex;
  top: 0;
  left: 0;
  overflow: hidden;
  -webkit-text-fill-color: #ffc419;
  width: ${(props: { width: any }) => props.width};
`

const Starratingbase = styled.div`
  z-index: 0;
  padding: 0;
`

const Countdiv = styled.div`
  letter-spacing: 1.5px;
  font-weight: bold;
`

const Price = styled.p`
  margin: 0;
  font-size: 34px;
`

const Btns = styled.div`
  display: flex;
  gap: 0.5rem;
`

const CartGet = styled.button`
  border: 0;
  border-radius: 10px;
  background-color: #570df8;
  color: #fff;
  padding: 16px;
  font-weight: 900;
  letter-spacing: 0.5px;
  cursor: pointer;

  &:hover {
    background-color: #30078a;
  }
`

const CartGo = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  background-color: #fff;
  padding: 16px;
  font-weight: 900;
  letter-spacing: 0.5px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: #fff
  }
`
