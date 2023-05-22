import { useState, useEffect } from "react"
import { ProductsListType, fashionfetchProducts } from "../Service/productService"
import { Desktop, Tablet, Mobile } from "../mediaQuery"
import { Card } from "./Card"
import styled from "styled-components"

export const FashionCardList = () => {
  const [fashionproducts, setFashionproducts] = useState<ProductsListType>({
    data: []
  })

  useEffect(() => {
    (async () => {
      const fashionproducts = await fashionfetchProducts()
      setFashionproducts(fashionproducts)
    })()
  }, [])

  return (
    <>
      <Section>
        <Title>
          패션
        </Title>
        <Desktop>
          <List>
            {
                fashionproducts.data.map((product, index) => {
                  return (
                    <Card key={`${product.title}_${index}`} title={product.title} price={product.price}
                    image={product.image} id={product.id} name={'패션'} />
                  )
                })
            }
          </List> 
        </Desktop>
        <Tablet>
          <TabletList>
            {
                fashionproducts.data.map((product, index) => {
                  return (
                    <Card key={`${product.title}_${index}`} title={product.title} price={product.price}
                    image={product.image} id={product.id} name={'패션'}  />
                  )
                })
            }

          </TabletList> 
        </Tablet>
        <Mobile>
          <MoblieList>
            {
                fashionproducts.data.map((product, index) => {
                  return (
                    <Card key={`${product.title}_${index}`} title={product.title} price={product.price}
                    image={product.image} id={product.id} name={'패션'} />
                  )
                })
            }
                      
          </MoblieList>
        </Mobile>   
      </Section>
    </>

  )
}

const Section = styled.section`
  margin: 50px 15px;
  padding: 48px 22px 32px;
`

const Title = styled.h1`
  text-align: center;
  letter-spacing: 3px;
  font-size: 35px;
`
const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.5rem;
`

const TabletList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 450px 450px;
  gap: 1.5rem;
`

const MoblieList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.5rem;

  overflow-x: auto;
`