import styled from "styled-components"
import { Sectioninfo } from "../Common/Sectioninfo"
import { useLocation } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"

interface ProductDeatilType {
  category: string,
  description: string,
  id: number,
  image: string,
  price: number,
  rating: {
    rate: number,
    count: number
  }[]
  title: string
}


export const ProductDetailPage = () => {
  const location = useLocation()
  const str = location.pathname
  const re =  /[^0-9]/g
  var result = str.replace(re, "")

  const ProductDeatilfetch = async () => {
    const remote = axios.create()
    const url = await remote.get<ProductDeatilType, any>(`https://fakestoreapi.com/products/${result}`)
  
    console.log(url.data)
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

  return (
    <>
      <Sectioninfo title={location.state} name={productdetail.title}/>
      <Container>
      </Container>
    </>

  )
}

const Container = styled.div`
  margin-top: 64px;
`