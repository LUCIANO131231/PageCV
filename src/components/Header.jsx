import {useEffect, useState} from "react"
import {Link} from "react-scroll"
import logo from "../assets/images/about/dibujo.svg"
import { RiMenuFill } from '@remixicon/react';

const menuList = [
  { id: 1, path: "home", label: "Home" },
  { id: 2, path: "about", label: "About" },
  { id: 3, path: "resume", label: "Resume" },
  { id: 4, path: "skill", label: "Skills" },
  // { id: 5, path: "project", label: "Projects" },
  { id: 6, path: "certificate", label: "Certificates" },
  // { id: 7, path: "contact", label: "Contact" },
]

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);
    return () => window.removeEventListener("scroll", stickyHeader);
  }, []);

  const stickyHeader = () => {
    const scrollTop = window.scrollY;
    setIsSticky(scrollTop > 85);
  };

  return (
    <header className={`w-full top-0 left-0 z-50 transition-all duration-300 ${isSticky ? "fixed bg-white/95 shadow-lg" : "absolute bg-transparent"}`}>
      <div className="w-full py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/*logo personal*/}
          <div className="flex items-center">
            <a href="#">
              <img src={logo} alt="Logo" title="Logo" className="w-36 object-contain animate-pulse" />
            </a>
          </div>

          {/*navbar*/}
          <nav className="hidden lg:flex font-glori text-lg">
            <ul className="flex space-x-6">
              {menuList.map(({ id, label, path }) => (
                <li key={id} className="relative hover:rotate-6">
                  <Link 
                    to={path} 
                    spy={true} 
                    smooth={true} 
                    offset={0} 
                    duration={500} 
                    className="cursor-pointer relative py-2 px-1 text-gray-900 transition-all duration-300 group">
                    {label}
                    
                    {/* Efecto hover: línea que crece */}
                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-black group-hover:w-full transition-all duration-700"></span>
                    
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/*para movil*/}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden flex flex-col space-y-1 focus:outline-none">
          <RiMenuFill className="text-gray-700" size={20} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div 
          className={`lg:hidden bg-white/95 shadow-lg overflow-hidden transition-all duration-300 ease-in-out 
          ${menuOpen ? "max-h-96" : "max-h-0"}`}>
          <ul className="flex flex-col items-center py-4 w-full">
            {menuList.map(({ id, label, path }) => (
              <li key={id} className="py-2 w-full">
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="block py-2 px-4 text-center transition duration-200 cursor-pointer text-gray-700 hover:bg-gray-300 hover:rounded-4xl"
                  onClick={() => {setMenuOpen(false);}}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header