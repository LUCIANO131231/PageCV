import {useEffect, useState} from "react"
import {Link} from "react-scroll"
import logo from "../assets/images/robot.png"

const menuList = [
  { id: 1, path: "home", label: "Home" },
  { id: 2, path: "about", label: "About" },
  { id: 3, path: "resume", label: "Resume" },
  { id: 4, path: "skill", label: "Skills" },
  { id: 5, path: "project", label: "Projects" },
  { id: 6, path: "contact", label: "Contact" },
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
    <header className={`w-full top-0 left-0 z-50 transition-all duration-300 ${isSticky ? "fixed bg-white shadow-lg" : "absolute bg-transparent"}`}>
      <div className="w-full py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/*logo personal*/}
          <div className="flex items-center">
            <a href="#">
              <img src={logo} alt="Logo" title="Logo" className="w-20" />
            </a>
          </div>

          {/*navbar*/}
          <nav className="hidden lg:flex">
            <ul className="flex space-x-6">
              {menuList.map(({ id, label, path }) => (
                <li key={id}>
                  <Link 
                    to={path} 
                    spy={true} 
                    smooth={true} 
                    offset={0} 
                    duration={500} 
                    className="cursor-pointer text-gray-700 hover:text-black transition duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/*para movil*/}
          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden flex flex-col space-y-1 focus:outline-none">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center py-4">
            {menuList.map(({ id, label, path }) => (
              <li key={id} className="py-2">
                <Link
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="cursor-pointer text-gray-700 hover:text-black transition duration-200"
                  onClick={() => setMenuOpen(false)}>
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