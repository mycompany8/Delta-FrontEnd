// components/common/Carousel.jsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({
  items = [],
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [current, setCurrent] = useState(0);

  const prev = () => {
    setCurrent((current) => (current === 0 ? items.length - 1 : current - 1));
  };

  const next = () => {
    setCurrent((current) => (current === items.length - 1 ? 0 : current + 1));
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div className="relative w-full min-w-[] max-w-3xl overflow-hidden">
      <div className="flex items-center justify-between absolute top-1/2 w-full px-8 z-10">
        <button
          onClick={prev}
          className="p-2 bg-white/70 rounded-full shadow hover:bg-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={next}
          className="p-2 bg-white/70 rounded-full shadow hover:bg-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      <div className=" max-w-full   h-[361px] sm:h-[568px]  w-full   max-h-[560px] relative">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={items[current]}
            alt={`slide-${current}`}
            className="w-full h-full object-cover rounded-2xl shadow"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      {/* Dots indicator */}
      <div className="flex w-full justify-center mt-4 gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === i ? "bg-black" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
