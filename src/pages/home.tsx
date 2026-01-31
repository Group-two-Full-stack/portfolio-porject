import HeroSection from "../componants/home/hero-section"
import Navbar from "../componants/home/navbar"
import RecentPosts from "../componants/home/recent-posts"


const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <RecentPosts/>
    </div>
  )
}

export default Home