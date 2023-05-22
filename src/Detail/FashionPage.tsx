import { useEffect, useState } from "react"
import { ProductsListType, fashionList2fetchProducts, fashionListfetchProducts } from "../Service/productService"
import styled from "styled-components"
import { Card } from "../List/Card"
import { Desktop, Mobile, Tablet } from "../mediaQuery"
import { Sectioninfo } from "../Common/Sectioninfo"

export const FashionPage = () => {
  const [fashionAllListProducts, setFashionAllListProducts] = useState<ProductsListType>({
    data: []
  })

  const [fashionAllListnextProducts, setFashionAllListnextProducts] = useState<ProductsListType>({
    data: []
  })

  useEffect(() => {
    (async () => {
      const fashionAllListProducts = await fashionListfetchProducts()
      setFashionAllListProducts(fashionAllListProducts)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const fashionAllListnextProducts = await fashionList2fetchProducts()
      setFashionAllListnextProducts(fashionAllListnextProducts)
    })()
  }, [])

  return (
    <>
      <Sectioninfo title="홈" name="패션" />
      <Section>
      <Title>
        패션
      </Title>
      <Desktop>
        <DeskList>
          {
              fashionAllListProducts.data.map((product, index) => {
                return (
                  <Card key={`${product.title}_${index}`} title={product.title} price={product.price}
                  image={product.image} id={product.id} name={'패션'} />
                )
              })
          }
          {
              fashionAllListnextProducts.data.map((product, index) => {
                return (
                  <Card key={`${product.title}_${index}`} title={product.title} price={product.price}
                  image={product.image} id={product.id}  name={'패션'}  />
                )
              })
          }
        </DeskList>   
      </Desktop>

      <Tablet>
        <TabList>
          {
              fashionAllListProducts.data.map((product, index) => {
                return (
                  <Card key={`${product.title}_${index}`} title={product.title} price={product.price}
                  image={product.image} id={product.id}  name={'패션'} />
                )
              })
          }
          {
              fashionAllListnextProducts.data.map((product, index) => {
                return (
                  <Card key={`${product.title}_${index}`} title={product.title} price={product.price}
                  image={product.image} id={product.id}  name={'패션'} />
                )
              })
          }
        </TabList>   
      </Tablet>

      <Mobile>
        <MobList>
          {
              fashionAllListProducts.data.map((product, index) => {
                return (
                  <Card key={`${product.title}_${index}`} title={product.title} price={product.price}
                  image={product.image} id={product.id}  name={'패션'}  />
                )
              })
          }
          {
              fashionAllListnextProducts.data.map((product, index) => {
                return (
                  <Card key={`${product.title}_${index}`} title={product.title} price={product.price}
                  image={product.image} id={product.id}  name={'패션'} />
                )
              })
          }
        </MobList>   
      </Mobile>
 
    </Section>
    </>
   
  )
}

const Section = styled.section`
  margin: 10px 40px;
  padding: 30px 22px 32px;
`

const Title = styled.h1`
  text-align: center;
  letter-spacing: 3px;
  font-size: 35px;
`
const DeskList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.5rem;
`

const TabList = styled.ul`
display: grid;
grid-template-columns: 1fr 1fr;
gap: 1.5rem;
`

const MobList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`