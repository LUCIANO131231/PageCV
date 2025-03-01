import {RiGlobalFill, RiQuillPenLine, RiPantoneFill} from '@remixicon/react'
import Title from "./ui/Title"
import ZoomIn from "./animations/ZoomIn"

const servicesList = [
  {
    id: 1,
    icon: <RiGlobalFill size={65} />,
    service_name: "Brand Identity Design",
    service_descripcion: "Kane gives you the blocks & kits you need to create a true website within minutes."
  },
  {
    id: 2,
    icon: <RiQuillPenLine size={65} />,
    service_name: "Website Design",
    service_descripcion: "Kane gives you the blocks & kits you need to create a true website within minutes."
  },
  {
    id: 3,
    icon: <RiPantoneFill size={65} />,
    service_name: "Application Design",
    service_descripcion: "Kane gives you the blocks & kits you need to create a true website within minutes."
  },
]

const Service = () => {
  return (
    <section id="services" className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <Title>
            <p className="text-md text-gray-600 font-glori uppercase">Services</p>
            <h2 className="text-[110px] letra font-slowin text-white">Quality Services</h2>
          </Title>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map(({ icon, id, service_descripcion, service_name }) => (
            <div key={id} className='w-full'>
              <ZoomIn id={id}>
                <div className='p-12 bg-slate-200 rounded-2xl text-gray-500 text-start border border-transparent hover:border-gray-400 transition-all duration-300'>
                  {icon}
                  <h4 className='text-xl font-semibold text-gray-800 mt-4'>{service_name}</h4>
                  <p className='text-zinc-600 mt-2'>{service_descripcion}</p>
                </div>
              </ZoomIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Service