import { NavLink } from 'react-router-dom';
import logo from "../assets/mpd-logo.png"

function Navbar() {
  return (
    <header className="">
      <nav className="flex pt-2">
        <div className="flex grow justify-between bg-[#74C29D] text-white font-medium rounded-4xl items-center px-6 mx-4">

          {/*===============MENU===============*/}
          <div className="flex gap-3" >
            <NavLink to="/">
              Beranda
            </NavLink>
            <NavLink to="/jadwal-kajian">
              Jadwal Kajian
            </NavLink>
            <NavLink to="/kegiatan">
              Kegiatan
            </NavLink>
            <NavLink to="/infaq">
              Infaq
            </NavLink>
            <NavLink to="/tentang">
              Tentang MPD
            </NavLink>
          </div>

          {/*===============LOGIN===============*/}
          <div className="bg-[#179B5A] px-5 py-2 rounded-full">
            <NavLink to="/login">
              Masuk
            </NavLink>
          </div>

        </div>

        {/*===============LOGO===============*/}
        <div className="mr-2">
          <NavLink to="/">
            <img 
              className="w-15"
              src={logo} 
              alt="Logo MPD" />
          </NavLink>
        </div>
      </nav>
    </header>
  )
}

export default Navbar