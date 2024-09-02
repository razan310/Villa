
import BestDeal from "../../components/bestDeal/BestDeal"
import HomeFeatured from "../../components/HomeFeatured/HomeFeatured"
import Slider from "../../components/slider/Slider"
import VideoSection from "../../components/videoSection/VideoSection"



function Home() {
  return (
    <div>
      <Slider/>
      <HomeFeatured/>
      <VideoSection/>
      <BestDeal/>
      

    </div>
  )
}

export default Home
