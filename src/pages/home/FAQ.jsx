import FreeQouteImage from "../../assets/solarHero2.jpg";
import { ChevronDown } from "lucide-react";


export default function GetAqoute() {
  return (
    <>
      <section
        id="qoute"
        className=" bg-slate-100 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch min-h-[600px]">

          {/* Image Container */}
          <div className="relative w-full h-[400px] lg:h-auto">
            <img
              src={FreeQouteImage}
              alt="Solars panel installation"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/10"></div>
          </div>

          {/* content */}

          <div className="flex flex-col justify-center p-8 md:p-16 lg:p-20 space-y-8 ">
            <div>
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm border-l-4 border-blue-600 pl-3">
                Free Qoute
              </span>

              <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-4 leading-tight  ">
                Get A Free Qoute<br className="hidden md:block" />
              </h1>
            </div>

            <p className="text-lg text-slate-600 font-jakarta leading-relaxed max-w-7xl">
              Get a free quote tailored to your needs and budget.
              Tell us about your project and our experts will get back to you quickly
            </p>


            {/* Contact form */}
            <form action="" className="w-full max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 rounded-md bg-white shadow-sm text-lg  text-slate-700 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-4 w-full rounded-md bg-white border border-slate-100 shadow-sm text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                />
                <input
                  type="phone"
                  placeholder="Mobile"
                  className="p-4 w-full rounded-md bg-white border border-slate-100 shadow-sm text-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                />

                <div className="relative">
                  <select name="" id="" className="w-full text-slate-500 text-lg bg-white border border-slate-100 shadow-sm rounded-md p-4 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
                    <option value="" className="">Select a service</option>
                    <option value="" className="">service 1</option>
                    <option value="" className="">select 2</option>
                    <option value="" className="">service 3</option>
                  </select>
                  <ChevronDown className="absolute top-1/2 right-4 -translate-y-1/2 text-slate-500 pointer-events-none" />

                </div>

                <textarea name="" id=""
                  placeholder="Special Notes"
                  rows={4}
                  className="p-2 w-full col-span-2 text-slate-700 rounded-xl shadow-sm border border-slate-100 bg-white focus:outline-none  focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all "
                >
                </textarea>
              </div>
            </form>

            <button
              type="submit"
              className="btn-primary w-fit px-10 ">
              submit
            </button>

          </div>
        </div >
      </section >
    </>
  )
}