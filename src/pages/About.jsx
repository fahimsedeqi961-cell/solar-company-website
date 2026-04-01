import aboutImage from "../assets/aboutImage.jpg";
import { Check } from "lucide-react";

export default function About() {
  return (
    <section className=" bg-gray-50 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[600px]">

        {/* Image Container */}
        <div className="relative w-full h-[400px] lg:h-auto">
          <img
            src={aboutImage}
            alt="Solars panel installation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/10"></div>
        </div>


        {/* content */}

        <div className="flex flex-col justify-center p-8 md:p-16 lg:p-20 space-y-8 ">
          <div>
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm border-l-4 border-blue-600 pl-3">
              About Our Company
            </span>

            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 leading-tight  ">
              10+ Years of Experience In<br className="hidden md:block" /> Solar & Renewable Energy Industry.
            </h1>
          </div>

          <p className="text-lg text-slate-600 font-jakarta leading-relaxed max-w-7xl">
            We provide reliable solar energy solutions, helping homes and businesses reduce costs, increase efficiency, and build a cleaner, sustainable future
          </p>


          {/* Befnifis list */}
          <div className="space-y-4 ">
            {[
              "Reliable solar energy solutions for homes",
              "Industry-leading panel effeciency",
              "4-year performance warranty included"
            ].map((text, index) => (
              <div
                key={index}
                className="flex items-center gap-4 group "
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  <Check size={14} strokeWidht={3} />
                </div>
                <p className="text-base text-slate-700 font-semibold group-hover:text-blue-600 transition-colors">
                  {text}
                </p>
              </div>
            ))}

          </div>
          <button className="btn-primary w-fit px-10 mt-4">
            learn more
          </button>

        </div>
      </div>
    </section>
  )
}