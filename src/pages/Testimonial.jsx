import clientInfo from "../data/data.json"
import { motion } from "framer-motion";
import { Quote, ChevronRight, ChevronLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/autoplay";




const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.4
    }
  }
};

const item = {
  hidden: { y: 40, opacity: 0, scale: 0.96 },
  show: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};


export default function Testimonial() {

  return (
    <>
      <section id="testimonial"
        className="py-16 md:py-24 px-6 max-w-7xl mx-auto bg-white">
        {/* Testimonial section title */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="text-center mb-16 md:mb-24"
        >
          <motion.h2 variants={item} className="text-sm font-bold uppercase text-blue-600 border-b-2 border-blue-600 pb-2 mb-4 tracking-[0.2em]">
            Testimonial
          </motion.h2>
          <motion.h1
            variants={item}
            className="text-3xl md:text-5xl max-w-3xl mx-auto font-extrabold tracking-wider text-slate-900 leading-tight"
          >
            What Our Clients Say
          </motion.h1>
        </motion.div>


        <div className="relative group max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".button-next", // Link to custom class
              prevEl: ".button-prev",
            }}
            autoplay={{
              delay: 3000, // Moves every 3 seconds
              disableOnInteraction: false, // Keeps playing after user clicks
            }}
            spaceBetween={50}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            className="my-swiper py-12"
            breakpoints={{
              640: { slidesPerView: 1 },
              1024: { slidesPerView: 2.2 }, // Adjust for wider screens
            }}
          >
            {clientInfo.Testimonial.map((client, i) => (
              <SwiperSlide key={i} className="">
                {({ isActive }) => (
                  <div className={`
                   flex flex-col items-center justify-center transition-all duration-700 ease-in-out
                  ${isActive ? "scale-100 opacity-100 blur-0" : "scale-90 opacity-40 blur-[2px]"}`}
                  >
                    <div className="relative w-28 h-28 rounded-full mb-6">
                      <img
                        src={client.profile}
                        alt={client.name}
                        className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div className="absolute top-30 left-10 -translate-y-3/4 text-white rounded-full w-10 h-10 flex items-center justify-center bg-blue-600">
                        <Quote size={18} className="fill-current rotate-180" />
                      </div>
                    </div>

                    {/* Content */}

                    <div className="p-8 text-center bg-white shadow-xl rounded-2xl max-w-lg mx-auto space-y-4 pt-6"
                    >
                      <p className="text-base text-slate-600 font-jakarta italic mb-6 leading-relaxed line-clamp-3">
                        {client.comment}
                      </p>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">
                        {client.clientName}
                      </h4>
                      <p className="text-sm font-bold uppercase text-blue-600 font-jakarta tracking-widest">
                        {client.profession}
                      </p>
                    </div>
                  </div>
                )}

              </SwiperSlide>
            ))}

          </Swiper>

          <button className="hidden button-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-blue-600 hover:text-blue-800 transition-colors">
            <ChevronLeft size={32} />
          </button>

          <button className="hidden button-next absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-blue-600 hover:text-blue-800 transition-colors">
            <ChevronRight size={32} />
          </button>

        </div>
      </section >
    </>
  )
}