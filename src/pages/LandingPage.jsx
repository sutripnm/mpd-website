import Navbar from "../components/Navbar";
import HeroSection from "../components/landing-page/HeroSection"
import Announcement from "../components/landing-page/Announcement";
import KajianCard from "../components/landing-page/KajianCard"

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Announcement />
      <KajianCard />
    </div>
  )
}

export default LandingPage;