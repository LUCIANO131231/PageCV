import SlideUp from "./animations/Slideup"

const Banner = () => {
  return (
    <section id="home" className="pt-[215px]">
      <div className="container mx-auto">
        <div className="bg-slate-300 rounded-2xl px-[50px] py-[100px] border border-gray-200 mx-4">
          <div className="flex justify-center">
            <div className="w-full">
              <SlideUp>
                <div className="text-center">
                  <h1 className="text-[110px] font-slowin capitalize leading-[68px] text-[#D98324] text-shadow">
                    I&#8217;m <span className="letra text-white">Luciano</span> Estela
                  </h1>
                  <div className="inline-block bg-white px-10 py-4 mt-8 font-glori text-2xl text-gray-500">
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