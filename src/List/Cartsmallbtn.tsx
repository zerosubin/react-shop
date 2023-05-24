import styled from "styled-components"

export const Cartsmallbtn = (props:any) => {
  return (
    <>
      <Btns>
        <Prevbtn>-</Prevbtn>
          {props.cartnum}
        <Nextbtn>+</Nextbtn>
      </Btns>
    </>
  )
}

const Btns = styled.div`
`

const Prevbtn = styled.button`
`
const Nextbtn = styled.button`
`