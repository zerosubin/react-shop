import { useState, useEffect } from "react"
import styled from "styled-components"
import { Card } from "../List/Card"
import { ProductsListType, electronicsListfetchProducts } from "../Service/productService"
import { Desktop, Tablet, Mobile } from "../mediaQuery"
import { Sectioninfo } from "../Common/Sectioninfo"

export const DigitalPage = () => {
  const [electronicsCardList, setElectronicsproducts] = useState<ProductsListType>({
    data: []
  })

  useEffect(() => {
    (async () => {
      const electronicsCardList = await electronicsListfetchProducts()
      setElectronicsproducts(electronicsCardList)
    })()
  }, [])

  return (
    <>
    <Sectioninfo title="홈" name="디지털" />
    <Section>
      <Title>
        디지털
      </Title>
      <Desktop>
        <DeskList>
          {
              electronicsCardList.data.map((product, index) => {
                return (
                  <Card key={`${product.title}_${index}`} title={product.title} price={product.price}
                  image={product.image} id={product.id}  name={'디지털'}  />
                )
              })
          }
        </DeskList>   
      </Desktop>

      <Tablet>
        <TabList>
          {
              electronicsCardList.data.map((product, index) => {
                return (
                  <Card key={`${product.title}_${index}`} title={product.title} price={product.price}
                  image={product.image} id={product.id} name={'디지털'} />
                )
              })
          }
        </TabList>   
      </Tablet>

      <Mobile>
        <MobList>
          {
              electronicsCardList.data.map((product, index) => {
                return (
                  <Card key={`${product.title}_${index}`} title={product.title} price={product.price}
                  image={product.image} id={product.id} name={'디지털'}/>
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