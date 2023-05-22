import { styled } from "styled-components"
import React, { PropsWithChildren, useEffect } from 'react'

interface ModalDefaultType {
  onClickToggleModal: () => void
}

export const Modal = ({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaultType>)  => {

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: 0;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, [])

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

  top: 0;
`

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  overflow-y: auto;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10000;
  overflow: hidden;
`