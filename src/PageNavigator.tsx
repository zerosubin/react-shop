import { Route, Routes } from "react-router-dom"
import { FashionPage } from "./Detail/FashionPage"
import { DigitalPage } from "./Detail/DigitalPage"
import { AccessoryPage } from "./Detail/AccessoryPage"
import { MainPage } from "./Detail/MainPage"


export const PageNavigator = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>} ></Route>
        <Route path="/fashion" element={<FashionPage />}></Route>
        <Route path="/accessory" element={<AccessoryPage />}></Route>
        <Route path="/digital" element={<DigitalPage />}></Route>
      </Routes>
    </>
  )
}
