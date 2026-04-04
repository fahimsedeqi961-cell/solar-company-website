// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import teamMembers from "../../data/data.json";
import { Link } from "react-router-dom";

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


export default function TeamMembers() {
  return (
    <>
      <section id="project"
        className="py-16 md:py-24 px-6 max-w-7xl mx-auto bg-white">
        {/* Projects section title */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          className="text-center mb-16 md:mb-24"
        >
          <motion.h2 variants={item} className="text-sm font-bold uppercase text-blue-600 border-b-2 border-blue-600 pb-2 mb-4 tracking-[0.2em]">
            Team Member
          </motion.h2>
          <motion.h1
            variants={item}
            className="text-3xl md:text-5xl max-w-3xl mx-auto font-extrabold tracking-wider text-slate-900 leading-tight"
          >
            Experienced Team Members
          </motion.h1>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {teamMembers.TeamMembers.map((member, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group relative bg-white shadow-md transition-all duration-500 rounded-sm overflow-hidden"
            >
              <div className="relative bg-white w-full h-72 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-t-md"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* Content */}

              <div className="p-6 space-y-4 pt-6"
              >
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h2>
                <p className="text-base text-slate-600 font-jakarta leading-relaxed line-clamp-3">
                  {member.introduction}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </>
  )
}