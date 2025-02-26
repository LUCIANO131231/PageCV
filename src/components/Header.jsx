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
  const [isSticky, setisSticky] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", stickyHeader)
    return () => window.removeEventListener("scroll", stickyHeader)
  }, [])

  const stickyHeader = () => {
    const scrollTop = window.scrollY
    setisSticky(scrollTop > 85)
  }
  return (
    <header className={`w-full transition-all duration-500 ${isSticky ? "fixed top-0 left-0 bg-white shadow-md" : ""}`}>
      <div className="py-4 bg-white w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center">
            {/*logo personal*/}
            <div>
              <a href="#">
                <img src={logo} alt="logo" className="w-20" />
              </a>
            </div>
            {/*navbar*/}
            <nav className="hidden lg:flex space-x-6">
              {menuList.map(({ id, label, path}) => (
                <Link
                  key={id}
                  to={path} 
                  spy={true} 
                  smooth={true} 
                  offset={0} 
                  duration={500} 
                  className="text-gray-700 hover:text-black transition-all cursor-pointer">
                  {label}
                </Link>
              ))}
            </nav>
            {/*para movil*/}
            <div className="lg:hidden">
              <button className="flex flex-col space-y-1">
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
                <span className="block w-6 h-0.5 bg-black"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header