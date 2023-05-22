import { Carouselcommon } from "../Carousel/Carouselcommon"
import { CardList } from "../List/CardList"

export const MainPage = () => {
  return (
    <>
      <Carouselcommon index={0} alt={""} url={""} title={""} desc={""} />
      <CardList />
    </>
  )
}