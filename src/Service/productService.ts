import axios from "axios"

// const remote = axios.create()

export interface ProductsListType {
  data: {
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
  }[]
}

// export const fashionfetchProducts = async () => {
//   const fashionListUrl = 'https://fakestoreapi.com/products'

//   const reponse = await axios.get<ProductsListType, any>(fashionListUrl)

//   return reponse
// }

export const fashionfetchProducts = async () => {
  const fashionListUrl = 'https://fakestoreapi.com/products?limit=4'

  const reponse = await axios.get<ProductsListType, any>(fashionListUrl)

  return reponse
}

export const jeweleryfetchProducts = async () => {
  const jeweleryListUrl = 'https://fakestoreapi.com/products/category/jewelery'

  const reponse = await axios.get<ProductsListType, any>(jeweleryListUrl)

  return reponse
}

export const digitalfetchProducts = async () => {
  const digitalListUrl = 'https://fakestoreapi.com/products/category/electronics?limit=4'

  const reponse = await axios.get<ProductsListType, any>(digitalListUrl)

  return reponse
}


export const fashionListfetchProducts = async () => {
  const fashionAllListUrl = `https://fakestoreapi.com/products/category/men's%20clothing`
  
  const reponse = await axios.get<ProductsListType, any>(fashionAllListUrl)
  
  return reponse
}


export const fashionList2fetchProducts = async () => {
  const fashionAllListURL = `https://fakestoreapi.com/products/category/women's clothing`

  const reponse = await axios.get<ProductsListType, any>(fashionAllListURL)

  return reponse
}

export const electronicsListfetchProducts = async () => {
  const electronicsAllListURL = `https://fakestoreapi.com/products/category/electronics`

  const reponse = await axios.get<ProductsListType, any>(electronicsAllListURL)

  return reponse
}