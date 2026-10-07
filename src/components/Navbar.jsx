import { NavLink } from 'react-router-dom';
import logo from "../assets/mpd-logo.png"
import '../styles/navbar.css';

function Navbar() {
  return (
    <header className="">
      <nav className="flex pt-2">
        <div className="flex grow justify-between bg-[#74C29D] text-white rounded-4xl items-center px-6 mx-4">

          {/*===============MENU===============*/}
          <div className="navbar-menu flex gap-3 font-normal items-center" >
            <NavLink to="/">
            {({ isActive }) => (
              <span className={isActive === true ? "active" : ""}>Beranda</span>
            )}
            </NavLink>
            <NavLink to="/jadwal-kajian">
            {({ isActive }) => (
              <span className={isActive === true ? "active" : ""}>Jadwal Kajian</span>
            )}
            </NavLink>
            <NavLink to="/kegiatan">
            {({ isActive }) => (
              <span className={isActive === true ? "active" : ""}>Kegiatan</span>
            )}
            </NavLink>
            <NavLink to="/infaq">
            {({ isActive }) => (
              <span className={isActive === true ? "active" : ""}>Infaq</span>
            )}
            </NavLink>
            <NavLink to="/tentang">
            {({ isActive }) => (
              <span className={isActive === true ? "active" : ""}>Tentang MPD</span>
            )}
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
        <div className="mr-2 font-medium">
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

export default Navbar;