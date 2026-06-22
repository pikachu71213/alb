import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  "/images/ab1.png",
  "/images/ab2.png",
  "/images/ab3.png",
  "/images/ab1.png",
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[140px] lg:h-[600px] overflow-hidden mt-20">
      
      {/* Slider Track */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {banners.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex-shrink-0"
          >
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Prev */}
      <button
        onClick={prevSlide}
        className="hidden cursor-pointer md:block p-[10px] absolute left-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center"
      >
        <ChevronLeft />
      </button>

      {/* Next */}
      <button
        onClick={nextSlide}
        className="hidden cursor-pointer md:block p-[10px] absolute right-5 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              current === index
                ? "bg-[#ff403a]"
                : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}