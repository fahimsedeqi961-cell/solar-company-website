import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs, EffectFade, Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/thumbs';

const slides = [
  { id: 1, title: "Pioneers of Solar Energy", img: "/src/assets/solarHero.jpg" },
  { id: 2, title: "Wind Power Solutions", img: "/src/assets/solarHero2.jpg" },
  { id: 3, title: "Renewable Futures", img: "/src/assets/solarHero3.jpg" },
];

export default function HeroSlider() {
  const navigate = useNavigate();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [direction, setDirection] = useState(window.innerWidth > 768 ? 'vertical' : 'horizontal');

  useEffect(() => {
    const handleResize = () => {
      setDirection(window.innerWidth > 768 ? 'vertical' : 'horizontal');
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative h-[85dvh] md:h-screen w-full overflow-hidden bg-slate-900">
      <Swiper
        modules={[Thumbs, EffectFade, Autoplay, Navigation]}
        effect="fade"
        speed={1000}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full bg-cover bg-center flex items-center justify-center md:justify-start px-6 md:px-20"
              style={{ backgroundImage: `linear-gradient(to right, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.3)), url(${slide.img})` }}
            >
              <div className="max-w-3xl text-center md:text-left mt-[-10vh] md:mt-0">
                <span className="inline-block px-4 py-1 rounded-full bg-solar-sun/20 text-solar-sun text-[10px] md:text-xs font-bold tracking-widest uppercase mb-4 border border-solar-sun/30">
                  Energy for the future
                </span>
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-outfit font-black leading-tight text-white mb-6">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-xl text-slate-200 font-jakarta max-w-xl mx-auto md:mx-0 mb-8">
                  Harness the power of the sun to fuel your home and business with sustainable energy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">

                  <a href="#qoute"
                    className="btn-primary text-sm md:text-base">
                    Free Consultation
                  </a>
                  <button
                    onClick={() => navigate("/projects")}
                    className="px-6 py-3 border border-white/50 text-white rounded-full font-bold text-sm md:text-base hover:bg-white/10 transition-all">
                    Our Projects
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnails Container */}
      <div className="absolute bottom-6 md:bottom-auto left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-10 md:top-1/2 md:-translate-y-1/2 z-40 w-full md:w-24">
        <Swiper
          onSwiper={setThumbsSwiper}
          direction={direction}
          spaceBetween={10}
          slidesPerView={3}
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className="max-w-[200px] md:max-w-none md:h-[300px]"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="flex justify-center items-center cursor-pointer">
              {({ isActive }) => (
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-full border-2 md:border-4 transition-all duration-500 overflow-hidden shadow-xl ${isActive ? "border-blue-600 scale-110 md:scale-125" : "border-white/40 opacity-50 hover:opacity-100"
                  }`}>
                  <img src={slide.img} className="w-full h-full  object-cover" alt="nav" />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
