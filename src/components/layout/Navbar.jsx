import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Sun } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsopen] = useState(false)
  const navigationLinks = ["Home", "About", "Services", "Projects", "Contact"];
  return (
    <>

      <header className="sticky top-0 h-20 z-50  flex justify-between items-center px-4 md:px-6 py-4 bg-white/90 shadow-sm border-b border-slate-900 backdrop-blur-md ">

        {/* Logo and the toggle button */}
        <div className="flex  items-center md:gap-8 w-full md:w-0 justify-between ">

          <button
            onClick={() => setIsopen(!isOpen)}
            className="md:hidden order-2 text-slate-800 hover:bg-slate-100 p-2 rounded-lg transition-colors " >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link to="/" className='order-1 md:order-2 flex items-center gap-2 text-2xl font-bold tracking-tighter text-slate-900 uppercase'>
            <Sun className="text-blue-600 fill-blue-600/10" size={28} />
            <span>ZAZI<span className="text-blue-800">SOLAR</span></span>
          </Link>
        </div>

        {/* Desktop navigation Links */}
        <nav className="hidden md:flex gap-10 items-center ">

          <ul className="flex items-center gap-8 ">
            {navigationLinks.map(item => (
              <li className="" key={item}>
                <NavLink to={item === "Home" ? "/" : `${item.toLowerCase()}`}
                  className={({ isActive }) =>
                    `text-base font-bold uppercase  transition-all hover:text-blue-600 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all hover:after:w-full  tracking-widest 
                  ${isActive ? "text-blue-600" : "text-slate-800"}`
                  }>{item}</NavLink>
              </li>
            ))}
          </ul>

          {/* Call to action button */}
          <div>
            <Link to="/contact" className="btn-primary px-6 py-2.5 text-sm">Get Qoute</Link>
          </div>

        </nav>


        {/* Hamburger Menu */}

        <div className={`fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity z-50 duration-300 md:hidden 
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          onClick={() => setIsopen(false)}
        >
          <ul
            onClick={(e) => e.stopPropagation()}
            className={`absolute top-0 right-0 h-screen w-3/4 max-w-sm bg-white p-8  md:hidden flex flex-col gap-6 
            transition-transform duration-300 
            ease-out overflow-hidden
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
          >

            <div className="flex justify-between items-center mb-10">
              <span className="text-xl font-bold text-blue-600 tracking-widest uppercase">Menu</span>
              <X
                onClick={() => setIsopen(false)}
                className="bg-slate-100 text-gray-800 rounded-full cursor-pointer" />
            </div>

            {/* Mobile Links */}
            <div className="flex flex-col gap-6">
              {navigationLinks.map(item => (

                <li
                  key={item}
                  onClick={() => setIsopen(false)}
                  className="border-b pb-3 border-slate-800">
                  <Link
                    to={item === "Home" ? "/" : `${item.toLowerCase()}`}
                    className="text-lg font-semibold text-gray-800">{item}</Link>
                </li>

              ))}

            </div>
          </ul>
        </div>

      </header>
    </>
  )
}