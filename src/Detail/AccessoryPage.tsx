import { useState, useEffect } from "react"
import styled from "styled-components"
import { Card } from "../List/Card"
import { ProductsListType, jeweleryfetchProducts } from "../Service/productService"
import { Desktop, Tablet, Mobile } from "../mediaQuery"
import { Sectioninfo } from "../Common/Sectioninfo"

export const AccessoryPage = () => {
  const [JeweleryCardList, setJeweleryproducts] = useState<ProductsListType>({
    data: []
  })

  useEffect(() => {
    (async () => {
      const JeweleryCardList = await jeweleryfetchProducts()
      setJeweleryproducts(JeweleryCardList)
    })()
  }, [])

  return (
    <>
    <Sectioninfo title="홈" name="액세서리" />
    <Section>
      <Title>
        액세서리
      </Title>
      <Desktop>
        <DeskList>
          {JeweleryCardList.data.map((product, index) => {
            return (
              <Card key={`${product.title}_${index}`} title={product.title} price={product.price}
                image={product.image} id={product.id} name={'액세서리'}/>
            )
          })}
        </DeskList>
      </Desktop>

      <Tablet>
        <TabList>
          {JeweleryCardList.data.map((product, index) => {
            return (
              <Card key={`${product.title}_${index}`} title={product.title} price={product.price}
                image={product.image} id={product.id} name={'액세서리'} />
            )
          })}
        </TabList>
      </Tablet>

      <Mobile>
        <MobList>
          {JeweleryCardList.data.map((product, index) => {
            return (
              <Card key={`${product.title}_${index}`} title={product.title} price={product.price}
                image={product.image} id={product.id} name={'액세서리'}/>
            )
          })}
        </MobList>
      </Mobile>

    </Section></>
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