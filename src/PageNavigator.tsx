import { Route, Routes } from "react-router-dom"
import { FashionPage } from "./Detail/FashionPage"
import { DigitalPage } from "./Detail/DigitalPage"
import { AccessoryPage } from "./Detail/AccessoryPage"
export const PageNavigator = () => {
  return (
    <>
      <Routes>
        <Route path="/fashion" element={<FashionPage />}></Route>
        <Route path="/accessory" element={<AccessoryPage />}></Route>
        <Route path="/digital" element={<DigitalPage />}></Route>
      </Routes>
    </>
  )
}
