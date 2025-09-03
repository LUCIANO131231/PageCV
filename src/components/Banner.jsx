import SlideUp from "./animations/Slideup"
import SplitText from "./animations/SplitText"

const Banner = () => {
  return (
    <section id="home" className="py-72 sm:py-60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#DEE8CE] shadow-2xl rounded-2xl p-10 text-center">
          <div className="flex flex-col items-center">
            <div className="w-full">
              <SlideUp>
                <div className="text-center">
                  <h1 className="text-[110px] font-slowin capitalize leading-[68px] text-[#7ADAA5] text-shadow">
                    I'm <span className="letra text-white">Luciano</span> Estela
                  </h1>

                  {/* Subtitle con SplitText */}
                  <SplitText
                    text="UI/UX Designer and Frontend Developer"
                    className="inline-block bg-white px-10 py-4 mt-8 font-glori rounded-4xl text-2xl"
                    delay={100}
                    duration={2}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                  />
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