import SlideUp from "./animations/Slideup"
import Profile from "../assets/images/about/perfil.jpg"
import {RiFacebookCircleFill, RiLinkedinFill, RiGithubFill, RiInstagramFill} from '@remixicon/react'

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center">
          {/* perfil */}
          <div className="lg:w-5/12 text-center p-10 border border-black/5 rounded-xl">
            <SlideUp>
              <div>
                <img src={Profile} alt="Perfil" className="rounded-xl mx-auto object-contain w-[550px] h-[550px]" />
                <h2 className="mt-8 text-3xl">Luciano Estela</h2>
                <div className="relative inline-flex items-center border border-gray-200 px-5 py-3 mt-4 rounded-full">
                  <h6 className="text-gray-600 mr-4">Disponible para trabajar</h6>
                  <div className="absolute right-3 h-3 w-3 bg-green-400 rounded-full animate-ping"></div>
                  <div className="absolute right-3 h-3 w-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="mt-6 flex justify-center gap-4">
                  <a href="https://www.facebook.com/renzo.luciano.773/" target="_blank" className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition">
                    <RiFacebookCircleFill size={24} className="text-gray-700" />
                  </a>
                  <a href="https://www.linkedin.com/in/renzo-luciano/" target="_blank" className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition">
                    <RiLinkedinFill size={24} className="text-gray-700" />
                  </a>
                  <a href="https://www.instagram.com/luciano22q/" target="_blank" className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition">
                    <RiInstagramFill size={24} className="text-gray-700" />
                  </a>
                  <a href="https://github.com/LUCIANO131231" target="_blank" className="p-3 bg-gray-100 rounded-md hover:bg-gray-200 transition">
                    <RiGithubFill size={24} className="text-gray-700" />
                  </a>
                </div>
              </div>
            </SlideUp>
          </div>
          {/** texto floro */}
          <div>
            <div>
              <SlideUp>
                <h2></h2>
                <div>
                  <a href=""></a>
                </div>
              </SlideUp>
              <SlideUp>
                <ul>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </SlideUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About