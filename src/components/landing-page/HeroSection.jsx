import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import dummyHeroSlides from "../../data/DAtaLandingPage";

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeSlide = dummyHeroSlides[currentIndex]
    useEffect(() => {
      const timer = setInterval(() => { 
        setCurrentIndex((prevIndex) => {
          return (prevIndex + 1) % dummyHeroSlides.length;
        });
      }, 5000)
        return () => clearInterval(timer);
    }, [])

  return (
    <section className="hero-section flex flex-row mx-4 px-2 py-2 h-[555px] mt-5">
      <div className="flex flex-col p-8 gap-3 justify-center content-hero basis-2/5 bg-[#74C29D] rounded-3xl">
        <h1 className="text-4xl max-w-md font-bold text-white">Selamat datang di website resmi Masjid Pangeran Diponegoro, Pedalangan Tembalang</h1>
        <div className="flex gap-3 action-btn-hero text-white">
          <NavLink 
            to="/jadwal-kajian"
            className="bg-[#179B5A] px-5 py-2 rounded-full">
            Jadwal Kajian
          </NavLink>
          <NavLink 
            to="/tentang"
            className="bg-[#179B5A] px-5 py-2 rounded-full">
            Lokasi
          </NavLink>
        </div>

      </div>

      <div className="hero-img basis-3/5 h-full rounded-3xl overflow-hidden">
        <img
          className="object-cover w-full h-full" 
          src={activeSlide.image} 
          alt="Foto MPD" />

      </div>
    </section>
  )
}

export default HeroSection;