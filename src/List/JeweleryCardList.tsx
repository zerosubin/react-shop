import { useEffect, useState } from "react"
import { ProductsListType, jeweleryfetchProducts } from "../Service/productService"
import styled from "styled-components"
import { Desktop, Mobile, Tablet } from "../mediaQuery"
import { Card } from "./Card"

export const JeweleryCardList = () => {
  const [jeweleryproducts, setJeweleryproducts] = useState<ProductsListType>({
    data: []
  })

  useEffect(() => {
    (async () => {
      const jeweleryproducts = await jeweleryfetchProducts()
      setJeweleryproducts(jeweleryproducts)
    })()
  }, [])

  return (
    <>
      <Section>
        <Title>
          액세서리
        </Title>
        <Desktop>
          <List>
            {
                jeweleryproducts.data.map((product, index) => {
                  return (
                    <Card key={`${product.title}_${index}`} title={product.title} price={product.price}
                    image={product.image} id={product.id} name={'액세서리'}/>
                  )
                })
            }
          </List> 
        </Desktop>
        <Tablet>
          <TabletList>
            {
                jeweleryproducts.data.map((product, index) => {
                  return (
                    <Card key={`${product.title}_${index}`} title={product.title} price={product.price}
                    image={product.image} id={product.id} name={'액세서리'}/>
                  )
                })
            }
  
          </TabletList> 
        </Tablet>
        <Mobile>
          <MoblieList>
            {
                jeweleryproducts.data.map((product, index) => {
                  return (
                    <Card key={`${product.title}_${index}`} title={product.title} price={product.price}
                    image={product.image} id={product.id} name={'액세서리'} />
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
