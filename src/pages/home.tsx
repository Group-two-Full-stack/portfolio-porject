import FeaturedWorks from "../componants/home/feaures"
import Footer from "../componants/home/footet"
import HeroSection from "../componants/home/hero-section"
import Navbar from "../componants/home/navbar"
import RecentPosts1 from "../componants/home/recent-posts"
import RecentPosts from "../componants/home/recent-posts"
import RecentPosts111 from "../componants/home/recentpost"


const Home = () => {
  return (
    <div>
        <Navbar/>
        <HeroSection/>
        <RecentPosts1/>
      <RecentPosts111/>
        <FeaturedWorks/>
        <Footer/>
    </div>
  )
}

export default Home