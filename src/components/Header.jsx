import {useEffect, useState} from "react"
import {Link} from "react-scroll"
import logo from "../assets/images/robot.png"

const menuList = [
  { id: 1, path: "home", label: "Home" },
  { id: 2, path: "about", label: "About" },
  { id: 3, path: "resume", label: "Resume" },
  { id: 4, path: "services", label: "Services" },
  { id: 5, path: "portfolio", label: "Projects" },
  { id: 6, path: "contact", label: "Contact" },
]

const Header = () => {
  const [isSticky, setisSticky] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if(scrollTop > 85) {
        setisSticky(true);
        if(scrollTop > lastScrollY) {
          setIsVisible(true); //ocultar al bajar
        } else {
          setIsVisible(true); //mostrar al subir
        }
      } else {
        setIsVisible(false);
        setIsVisible(true); //mostrar visible cuando esta arriba
      }
      lastScrollY = scrollTop;
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 z-[999] transition-all duration-500 ${isSticky ? "bg-white border-b border-gray-300" : "bg-transparent"} ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
      <div className="w-full py-4">
        <div className="container mx-auto flex items-center justify-between px-6">
          
          {/*logo personal*/}
          <div>
            <a href="#" className="block">
              <img src={logo} alt="logo" className="h-9 w-9 object-contain" />
            </a>
          </div>

          {/*navbar*/}
          <nav className="hidden lg:flex space-x-6">
            <ul className="flex space-x-6">
              {menuList.map(({ id, label, path }) => (
                <li key={id}>
                  <Link 
                    to={path} 
                    spy={true} 
                    smooth={true} 
                    offset={0} 
                    duration={500} 
                    className="cursor-pointer text-gray-700 hover:text-black transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/*para movil*/}
          <div className="md:hidden">
            <button className="flex flex-col space-y-1">
              <span className="w-5 h-[3px] bg-[#818C78]"></span>
              <span className="w-5 h-[3px] bg-[#818C78]"></span>
              <span className="w-5 h-[3px] bg-[#818C78]"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header