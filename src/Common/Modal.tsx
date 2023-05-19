import { styled } from "styled-components"
import React, { PropsWithChildren } from 'react'

interface ModalDefaultType {
  onClickToggleModal: () => void
}

export const Modal = ({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaultType>)  => {
  return (
    <>
      <DialogBox>{children}</DialogBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault()

          if (onClickToggleModal) {
            onClickToggleModal()
          }
        }}
      />
    </>
  )
}

// const ModalContainer = styled.div`
//   width: 0;
//   height: 0;
//   display: flex;
//   z-index: 10000;
// `

const DialogBox = styled.dialog`
  width: 300px;
  height: 100%;
  margin: 0;
  display: flex;
  border-radius: 2px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  border: 0;
  z-index: 10001;
`;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10000;
`;