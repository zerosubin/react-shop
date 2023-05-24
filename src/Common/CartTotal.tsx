//import { useState } from "react"
import { useState } from "react"
import { GrCart } from "react-icons/gr"
import styled from "styled-components"

interface ArrayLikeType {
  [key: number]: string
}

interface CountArrayLikeType {
  [key: string]: string
}


// export const NumberPuls = () => {
//   var output = localStorage.getItem("CartList")
//   let myarr = JSON.parse(output)
//   console.log(myarr)

//   const obj: ArrayLikeType = Object(myarr)
//   for(var key in myarr){
//     const selected = obj[Number(key)]
//     let ob: CountArrayLikeType = Object(selected)
//     let count = "count"
//     setTotal(total + Number(ob[count]))
//   }
//   console.log(total)
// }


export const CartTotal = () => {

  const [total, setTotal] = useState(0)

  const NumberPuls = () => {
    var output = localStorage.getItem("CartList")
    let myarr = JSON.parse(output)
    console.log(myarr)

    const obj: ArrayLikeType = Object(myarr)
    for(var key in myarr){
      const selected = obj[Number(key)]
      let ob: CountArrayLikeType = Object(selected)
      let count = "count"
      setTotal(total + Number(ob[count]))
    }
    console.log(total)
    return total
  }


  // export const number = () => {
  //   var output = localStorage.getItem("CartList")
  //   let myarr = JSON.parse(output)
  //   console.log(myarr)
  
  //   const obj: ArrayLikeType = Object(myarr)
  //   for(var key in myarr){
  //     const selected = obj[Number(key)]
  //     let ob: CountArrayLikeType = Object(selected)
  //     let count = "count"
  //     setTotal(total + Number(ob[count]))
  //   }
  //   console.log(total)
  // }

  // const [total, setTotal] = useState(0)

  // const NumberPuls = () => {
  //   var output = localStorage.getItem("CartList")
  //   let myarr = JSON.parse(output)
  //   console.log(myarr)
  
  //   const obj: ArrayLikeType = Object(myarr)
  //   for(var key in myarr){
  //     const selected = obj[Number(key)]
  //     let ob: CountArrayLikeType = Object(selected)
  //     let count = "count"
  //     console.log(ob[count])
  //     setTotal(total + Number(ob[count]))
  //   }
  //   console.log(total)
  // }

  // var output = localStorage.getItem("CartList")
  // let myarr = JSON.parse(output)
  // console.log(myarr)

  // const obj: ArrayLikeType = Object(myarr)
  // for(var key in myarr){
  //   const selected = obj[Number(key)]
  //   let ob: CountArrayLikeType = Object(selected)
  //   let count = "count"
  //   console.log(ob[count])
  //   setTotal(total + Number(ob[count]))
  // }
  // console.log(total)

  return (
    <>
      <Btnhover><GrCart/><CartNum>0</CartNum></Btnhover>
    </>
  )
}

const Btnhover = styled.button`
  position: relative;
  background-color: #fff;
  border: 0;
  font-size: 28px;
  height: 48px;
  padding: 10px;
  cursor: pointer;
  z-index: 9999;
  &:hover {
    background-color : #D1D5DB;
    border-radius: 10px;
  }
`

const CartNum = styled.div`
  position: absolute;
  top: 1px;
  right: 1px;
  width: 18px;
  height: 18px;
  background-color: #EF4444;
  border-radius: 100%;
  font-size: 12px;
  text-align: center;
  padding: 4px 2px 0 2px;
  color: #fff;
`