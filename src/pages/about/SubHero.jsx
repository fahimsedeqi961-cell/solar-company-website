import { Link } from "react-router-dom";

export default function Hero({ title, bgImage, currentPage }) {
    return (
        <>
            <section className="relative w-full h-[350px] md:h-[450px] overflow-hidden">

                {/* Background Image */}
                <img
                    src={bgImage}
                    alt={title}
                    className=" w-full h-full absolute inset-0 object-cover"
                />
                <div className="absolute inset-0 z-10 bg-slate-900/60 backdrop:blur-[2px]"></div>

                {/* Content container */}
                <div className="relative max-w-7xl mx-auto w-full h-full z-20 px-6 flex flex-col justify-center">
                    <nav className="flex items-center gap-2 text-xs text-blue-400 font-bold uppercase tracking-widest mb-4">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span></span>
                        <span className="text-slate-300">{currentPage}</span>
                    </nav>

                    <h1 className="text-4xl md:text-6xl font-bold font-outfit text-white leading-tight">
                        {title}
                        <span className="text-blue-500"></span>
                    </h1>
                    <div className="w-20 h-1.5 bg-blue-600 mt-6 rounded-full"></div>
                </div>
            </section>
        </>
    )
}