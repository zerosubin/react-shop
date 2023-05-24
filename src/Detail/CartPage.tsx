import { styled } from "styled-components"
import { Sectioninfo } from "../Common/Sectioninfo"
import { Link } from "react-router-dom"
import { useState, useCallback, useEffect } from "react"
import { ByModal } from "../Common/ByModal"
import axios from "axios"
import { CartCard } from "../List/CartCard"

interface Cartfetch {
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

interface ArrayLikeType {
  [key: number]: string
}

interface CountArrayLikeType {
  [key: string]: string
}


export const CartPage = ( ) => {

  const [isOpenModal, setOpenModal] = useState<boolean>(false)

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal)
  }, [isOpenModal])

  var output = localStorage.getItem("CartList")
  let myarr = JSON.parse(output)
  const keysId = Object.keys(myarr)

  const allList = []

  for(const key in keysId) {
    // console.log(keysId[key])
    const result = keysId[key]
    const Cartfetch = async () => {
    const remote = axios.create()
    const url = await remote.get<Cartfetch, any>(`https://fakestoreapi.com/products/${result}`)
    return url.data
    }

    const [cartproduct, setCartproduct] = useState<Cartfetch>({
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
        const cartproduct = await Cartfetch()
        setCartproduct(cartproduct)
      })()
    }, [])

    allList.push(cartproduct)
  }


  let total = []

  const obj: ArrayLikeType = Object(myarr)
  for(var key in myarr){
    const selected = obj[Number(key)]
    let ob: CountArrayLikeType = Object(selected)
    let count = "count"
    total.push(ob[count])
  }

  let totalprice = 0
  allList.map((product, _index) => {
    totalprice += Math.ceil(product.price)
    
  })

  const onclear = () => {
    localStorage.removeItem("CartList")
    localStorage.setItem("CartList", JSON.stringify({}))
    
  }

  console.log(myarr)
  const nums = Object.keys(myarr).length
  console.log(nums)

  return (
    <>
    <Sectioninfo title="홈" name="장바구니" />
    <Section>
      {nums === 0 ? 
        <>
          <Container>
            <Ment>
            장바구니에 물품이 없습니다.
            </Ment>
              <Link to="/">
                <GoToBuy>
                  담으러 가기
                </GoToBuy>          
              </Link>
          </Container>
          <ByCon>
            <TotalPrice>
            총 : $0
            </TotalPrice>
            {isOpenModal && (
              <ByModal onClickToggleModal={onClickToggleModal}>
                <Bytitle>정말로 구매하시겠습니까?</Bytitle>
                <Bydesc>장바구니의 모든 상품들이 삭제됩니다.</Bydesc>
                <ByBtncon>
                  <Link to="/cart">
                    <ByYESbutn onClick={() => {
                      onClickToggleModal()
                      onclear()
                      location.replace("/cart")
                    }}>네</ByYESbutn> 
                  </Link>
                  <ByNObutn onClick={onClickToggleModal}>아니오</ByNObutn>
                </ByBtncon>
              </ByModal>
            )}
            <ByBtn onClick={onClickToggleModal}>
              구매하기
            </ByBtn>
          </ByCon>
        </>
        :
        <>
        <Container>
            {
              allList.map((product, index) => {
                  return (
                    <CartCard key={`${product.title}_${index}`} image={product.image}
                      title={product.title} id={product.id} price={product.price} cartnum={product.id} />
                  )
                })
            }
        </Container>
        <ByCon>
          <TotalPrice>
          총 : ${totalprice}
          </TotalPrice>
          {isOpenModal && (
            <ByModal onClickToggleModal={onClickToggleModal}>
              <Bytitle>정말로 구매하시겠습니까?</Bytitle>
              <Bydesc>장바구니의 모든 상품들이 삭제됩니다.</Bydesc>
              <ByBtncon>
                  <Link to="/cart">
                    <ByYESbutn onClick={() => {
                      onClickToggleModal()
                      onclear()
                      location.replace("/cart")
                    }}>네</ByYESbutn> 
                  </Link>
                <ByNObutn onClick={onClickToggleModal}>아니오</ByNObutn>
              </ByBtncon>
            </ByModal>
          )}
          <ByBtn onClick={onClickToggleModal}>
            구매하기
          </ByBtn>
        </ByCon>
      </>
        }
    </Section>
  </>
  )
}


const Section = styled.section`
  margin: 0 20px;
  padding: 40px;
`

const Container = styled.div`
`

const Ment = styled.h1`
  margin-bottom: 50px;
`

const GoToBuy = styled.button`
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


const ByCon = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 80px;
  gap: 1.5rem;
`

const TotalPrice = styled.h1`
`

const ByBtn = styled.button`
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

const Bytitle = styled.h3`
  margin-bottom: 0;
`

const Bydesc = styled.p`
  margin-top: 0;
`
const ByBtncon = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.4rem;
`
const ByYESbutn = styled.button`
  border: 0;
  border-radius: 10px;
  background-color: #570df8;
  color: #fff;
  padding: 14px;
  font-weight: 900;
  letter-spacing: 0.5px;
  cursor: pointer;

  &:hover {
    background-color: #30078a;
    transition: all 0.2s ease-in-out;
  }
`
const ByNObutn = styled.button`
  border: 1px solid black;
  border-radius: 10px;
  background-color: #fff;
  color: black;
  padding: 12px;
  font-weight: 900;
  letter-spacing: 0.5px;
  cursor: pointer;

  &:hover {
    background-color: black;
    color: #fff;
    transition: all 0.2s ease-in-out;
  }
`

// const Product = styled.div`
// `
// const Imgcon = styled.div`
// `
// const Img = styled.img`
// `
// const Info = styled.div`
// `

// const Title = styled.h2`
// `

// const Price = styled.p`
// `

// const Btns = styled.div`
// `

// const Prevbtn = styled.button`
// `
// const Nextbtn = styled.button`
// `