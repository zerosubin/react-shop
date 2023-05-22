import { BrowserRouter, Link } from "react-router-dom"
import { PageHeader } from "./Common/PageHeader"
import { PageNavigator } from "./PageNavigator"
import { useState, useCallback } from 'react'
import { Modal } from './Common/Modal'
import styled from "styled-components"
import { Footer } from "./Common/Footer"

function App() {
  
  const [isOpenModal, setOpenModal] = useState<boolean>(false)

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal)
  }, [isOpenModal])

  return (
    <>
    <BrowserRouter>
      {isOpenModal && (
          <Modal onClickToggleModal={onClickToggleModal}>
            <ModalTitle>
              <Ul>
                <Link to="/fashion" onClick={onClickToggleModal}>
                  <Li>패션</Li>
                </Link>
                <Link to="/accessory" onClick={onClickToggleModal}>
                  <Li>액세서리</Li>
                </Link>
                <Link to="/digital" onClick={onClickToggleModal}>
                  <Li>디지털</Li>
                </Link>
              </Ul>
            </ModalTitle>
          </Modal>
      )}
        <PageHeader onmodal={onClickToggleModal} />
        <PageNavigator />
        <Footer />
      </BrowserRouter>
    </>
  )
}

const Ul = styled.ul`
  list-style: none;
  display: grid;
  grid-column-start: 1;
  grid-row-start: 1;
`

const Li = styled.li`
  font-family: var(--font-nanumfont);
  padding: 16px 180px 16px 16px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color : #dee4ec;
    border-radius: 10px;
  }
`

const ModalTitle = styled.div`
  margin: 0;
  border: none;
`

export default App
