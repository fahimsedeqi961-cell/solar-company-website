import WhyChooseImage from '../assets/solarHero2.jpg'
import { Check, MessageCircle, UserCheck, Headphones, Award } from "lucide-react";

const iconMap = {
  Check,
  MessageCircle,
  UserCheck,
  Headphones,
  Award
}


export default function WhyChoose() {

  const trustSignals = [
    {
      "icon": "Check",
      "value": "Quality",
      "title": "Services"
    },

    {
      "icon": "UserCheck",
      "value": "Expert",
      "title": "Workers",
    },

    {
      "icon": "MessageCircle",
      "value": "Free",
      "title": "Consultation",
    },

    {
      "icon": "Headphones",
      "value": "Customer",
      "title": "Support",
    },
  ]


  return (
    <>
      <section className=" bg-slate-100 overflow-hidden ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[600px]">

          {/* content Container */}
          <div className="flex flex-col justify-center p-8 md:p-16 lg:p-20 space-y-8 ">
            <div>
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm border-l-4 border-blue-600 pl-3">
                Why Choose US
              </span>

              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 leading-tight  ">
                Complete Commercial & <br className="hidden md:block" /> Residential Solar System.
              </h1>
            </div>

            <p className="text-lg text-slate-600 font-jakarta leading-relaxed max-w-7xl">
              We provide reliable solar energy solutions, helping homes and businesses reduce costs, increase efficiency, and build a cleaner, sustainable future
            </p>


            {/* Befnifis list */}
            <div className="grid grid-cols-2 gap-8 items-center">
              {trustSignals.map((item, i) => {
                const Icon = iconMap[item.icon];
                return (
                  <div
                    key={i}
                    className='flex gap-6 items-center'>
                    {/* Icon Container */}
                    <div className='w-12 h-12 md:w-14 md:h-14 text-white font-bold rounded-full flex items-center justify-center bg-blue-600 '>
                      <Icon size={32} />
                    </div>
                    {/* Content container */}
                    <div>
                      <p className='text-sm md:text-base text-gray-500 tracking-wider'>{item.value}</p>
                      <h3 className='text-xl md:text-2xl font-bold text-slate-800 tracking-wide'>{item.title}</h3>
                    </div>

                  </div>
                )
              })}
            </div>
          </div>

          {/* Image Container */}
          <div className="relative w-full h-[400px] lg:h-auto">
            <img
              src={WhyChooseImage}
              alt="Solars panel installation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/10"></div>
          </div>
        </div>
      </section>
    </>
  )
}