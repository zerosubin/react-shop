import styled from "styled-components"

interface AccessoryPage {
  title: string,
  name: string
}


export const Sectioninfo = (props:AccessoryPage) => {
  return (
    <Desc>
      {props.title} › {props.name}
    </Desc>
  )
}

const Desc = styled.p`
  margin-top: 100px;
  margin-bottom: 0;
  padding: 0 55px;
`