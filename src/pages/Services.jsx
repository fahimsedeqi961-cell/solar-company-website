import services from "../data/data.json";
import { Link } from "react-router-dom";
import { ArrowRight, UserCog } from "lucide-react";
import { motion } from "framer-motion";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};
const item = {
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

// Container for grid cards
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This creates the "one after another" effect
      delayChildren: 0.3,
    },
  },
};

// 2. Define the Card (The Item)
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,   // Start 60px below its final position
    scale: 1 // Optional: slightly smaller for a "pop-in" feel
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] // Custom "Ease Out" for a smooth solar-tech feel
    }
  },
}

export default function Services() {
  return (
    <section className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white">
      {/* Services section title */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        className="text-center mb-16 md:mb-24"
      >
        <motion.h2 variants={item} className="text-sm font-bold uppercase text-blue-600 border-b-2 border-blue-600 pb-2 mb-4 tracking-[0.2em]">
          Our Services
        </motion.h2>
        <motion.h1
          variants={item}
          className="text-3xl md:text-5xl max-w-3xl mx-auto font-extrabold tracking-tight text-slate-900 leading-tight"
        >
          We Are Poineers In The World of <br className="hidden md:block" /> the Renewable Energy.
        </motion.h1>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">

        {services.Services.map((service, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            className="group relative bg-white  bordre-slate-50 shadow-sm hover:-translate-y-2 transition-all duration-500 hover:shadow-xl rounded-2xl overflow-hidden"
          >
            <div className="relative bg-white w-full h-auto overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-t-md transition-transform  duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
            </div>

            <div className="w-24 h-24 flex items-center justify-center absolute top-1/2  left-28 -translate-y-3/4 rounded-full text-blue-600  shadow-lg group-hover:text-white bg-white group-hover:bg-blue-600 transition-all duration-300 z-10 cursor-pointer">
              <UserCog size={32} strokeWidth={2.5} />
            </div>

            {/* Content */}
            <div className="p-4 space-y-4 pt-12">
              <h2 className="text-2xl  font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h2>
              <p className="text-base text-slate-600 font-jakarta leading-relaxed line-clamp-3">
                {service.description}
              </p>
            </div>

            <div className="pt-4">
              <Link to="/" className="inline-flex gap-2 text-sm font-bols uppercase tracking-widest items-center group/link p-4 text-blue-600 hover:text-blue-700 ">
                <span>Learn</span>
                <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform duration-300 " />
              </Link>
            </div>

          </motion.div>
        ))}

      </motion.div>
    </section>
  )
}

