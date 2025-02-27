import SlideUp from "./animations/Slideup"
import Profile from "../assets/images/about/perfil.jpg"
import {RiFacebookCircleFill, RiLinkedinFill, RiGithubFill, RiInstagramFill, RiDownloadFill, RiArrowRightUpLine} from '@remixicon/react'

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center">
          {/* perfil */}
          <div className="lg:w-5/12 text-center p-10 border border-black/5 rounded-xl">
            <SlideUp>
              <div>
                <img src={Profile} alt="Perfil" className="rounded-xl mx-auto object-contain w-[420px] h-[420px]" />
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
          <div className="lg:w-7/12 px-10">
            <div>
              <SlideUp>
                <h2 className="text-5xl leading-20 mb-5 font-glori">
                  Hello my friend, im Luciano Estela, <span className="px-5 border shadow-gray-400 shadow-lg border-black/10">Framer Developer</span> and UX/IX Designer from Perú, Huánuco.
                </h2>
                <div className="mt-6">
                  <a href="#" className="inline-flex items-center bg-[#AAB99A] text-white px-6 py-3 rounded-lg shadow-md hover:bg-[#727D73] transition">
                    Downloand CV <RiDownloadFill size={16} className="ml-2" />
                  </a>
                </div>
              </SlideUp>
              <SlideUp>
                <ul className="mt-8 grid grid-cols-2 gap-x-10 gap-y-4 font-glori text-md text-zinc-600">
                  <li className="flex items-center"><RiArrowRightUpLine size={18} className="mr-2"/>Logo Design</li>
                  <li className="flex items-center"><RiArrowRightUpLine size={18} className="mr-2"/>Social Marketing</li>
                  <li className="flex items-center"><RiArrowRightUpLine size={18} className="mr-2"/>Branding Identify</li>
                  <li className="flex items-center"><RiArrowRightUpLine size={18} className="mr-2"/>Digital Marketing</li>
                  <li className="flex items-center"><RiArrowRightUpLine size={18} className="mr-2"/>Web Design</li>
                  <li className="flex items-center"><RiArrowRightUpLine size={18} className="mr-2"/>Product Design</li>
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