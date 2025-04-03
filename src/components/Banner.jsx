import SlideUp from "./animations/Slideup"

const Banner = () => {
  return (
    <section id="home" className="py-72 sm:py-60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#E2E2B6] shadow-2xl rounded-2xl p-10 text-center">
          <div className="flex flex-col items-center">
            <div className="w-full">
              <SlideUp>
                <div className="text-center">
                  <h1 className="text-[110px] font-slowin capitalize leading-[68px] text-[#D98324] text-shadow">
                    I&#8217;m <span className="letra text-white">Luciano</span> Estela
                  </h1>
                  <div className="inline-block bg-white px-10 py-4 mt-8 font-glori rounded-4xl text-2xl text-gray-500">
                    <span>UI Designer and Frontend Developer</span>
                  </div>
                </div>
              </SlideUp>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner