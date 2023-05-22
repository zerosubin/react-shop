import { useEffect, useState } from "react"
import { ProductsListType, digitalfetchProducts } from "../Service/productService"
import { Desktop, Tablet, Mobile } from "../mediaQuery"
import { Card } from "./Card"
import styled from "styled-components"

export const DigitalCardList = () => {
  const [digitalProducts, setDigitalfetchProducts] = useState<ProductsListType>({
    data: []
  })

  useEffect(() => {
    (async () => {
      const digitalProducts = await digitalfetchProducts()
      setDigitalfetchProducts(digitalProducts)
    })()
  }, [])

  return (
    <Section>
      <Title>
        디지털
      </Title>
      <Desktop>
        <List>
          {
              digitalProducts.data.map((product, index) => {
                return (
                  <Card key={`${product.title}_${index}`} title={product.title} price={product.price}
                  image={product.image} id={product.id} name={'디지털'} />
                )
              })
          }
        </List> 
      </Desktop>
      <Tablet>
        <TabletList>
          {
              digitalProducts.data.map((product, index) => {
                return (
                  <Card key={`${product.title}_${index}`} title={product.title} price={product.price}
                  image={product.image} id={product.id} name={'디지털'}/>
                )
              })
          }

        </TabletList> 
      </Tablet>
      <Mobile>
        <MoblieList>
          {
              digitalProducts.data.map((product, index) => {
                return (
                  <Card key={`${product.title}_${index}`} title={product.title} price={product.price}
                  image={product.image} id={product.id} name={'디지털'}/>
                )
              })
          }
                    
        </MoblieList>
      </Mobile>   
    </Section>
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
const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.5rem;
`

const TabletList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
`

const MoblieList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.5rem;

  overflow-x: auto;
`