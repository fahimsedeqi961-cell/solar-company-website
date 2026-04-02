import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import projects from "../data/data.json";

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


export default function Projects() {
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
            Our Projects
          </motion.h2>
          <motion.h1
            variants={item}
            className="text-3xl md:text-5xl max-w-3xl mx-auto font-extrabold tracking-wider text-slate-900 leading-tight"
          >
            Wisit our latest solar and<br className="hidden md:block" />  Renewable energy projects
          </motion.h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {projects.Projects.map((project, i) => (
            <div
              key={i}
              className="group relative bg-white transition-all duration-500 rounded-2xl overflow-hidden"
            >
              <div className="relative bg-white w-full h-auto overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
              </div>

              {/* Content */}

              <div className="p-2 space-y-4 pt-6">
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {project.name}
                </h2>
                <p className="text-base text-slate-600 font-jakarta leading-relaxed line-clamp-3">
                  {project.projectDesc}
                </p>
              </div>
            </div>
          ))}

        </div>

        <div className="pt-8 text-center ">
          <Link to="/projects" className="inline-flex gap-2 text-sm border-b-2 font-bold uppercase tracking-widest items-center group/link p-2 text-blue-600 hover:text-blue-700 ">
            <span>Projects</span>
            <ArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform duration-300 " />
          </Link>
        </div>
      </section>

    </>
  )
}