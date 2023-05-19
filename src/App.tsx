import { BrowserRouter } from "react-router-dom"
import { PageHeader } from "./Common/PageHeader"
import { PageNavigator } from "./PageNavigator"
// import { Sectioncommon } from "./Common/Sectioncommon"

function App() {

  return (
    <>
      <BrowserRouter>
        <PageHeader />
        <PageNavigator />
      </BrowserRouter>
    </>
  )
}

export default App
