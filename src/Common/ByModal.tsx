import { styled } from "styled-components"
import React, { PropsWithChildren, useEffect } from 'react'

interface ModalDefaultType {
  onClickToggleModal: () => void
}

export const ByModal = ({
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
  width: 420px;
  height: 200px;

  display: flex;
  flex-direction: column;
  gap: 1.3rem;

  margin: 250px auto;
  padding: 20px 28px;
  border-radius: 16px;
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
  right: 0;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10000;
  overflow: hidden;
`