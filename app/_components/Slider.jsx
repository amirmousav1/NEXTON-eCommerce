"use client";

import slide1 from "@/public/slide1.jpg";
import slide2 from "@/public/slide2.jpg";
import slide3 from "@/public/slide3.jpg";
import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    description: "Starting from: $49.99",
    title: "Exclusive collection for everyone",
    url: "#",
    image: slide1,
  },
  {
    id: 2,
    description: "Starting from: $39.99",
    title: "Exclusive collection for everyone",
    url: "#",
    image: slide2,
  },
  {
    id: 3,
    description: "Starting from: $29.99",
    title: "Exclusive collection for everyone",
    url: "#",
    image: slide3,
  },
];

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(1);
  function showSlide(slide) {
    setCurrentSlide(slide);
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((cur) => (cur === 3 ? 1 : cur + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F3F3F3] dark:bg-bodyColor relative w-full h-[550px] md:h-[400px] lg:h-[500px] xl:h-[600px] flex items-center overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          style={{
            transform: `translateX(${(i - (currentSlide - 1)) * 100}%)`,
          }}
          className="absolute duration-300 top-0 h-full w-full"
        >
          <div className="relative flex h-full items-center justify-center">
            <div className="container px-4 top-1/2 -translate-y-1/2 absolute">
              <div className="md:w-2/3">
                <span className="md:text-lg dark:text-[#e5e7eb] block dark:md:text-bodyColor mb-2 md:mb-6 text-sm xl:text-xl text-bodyColor font-medium">
                  {slide.description}
                </span>
                <h3 className="lg:text-[50px] dark:font-medium dark:md:font-semibold dark:text-[#e5e7eb] dark:md:text-primary md:text-[40px] text-3xl mb-10 md:mb-6 leading-[38px] md:leading-[55px] lg:leading-[72px] xl:text-[64px] text-primary font-semibold">
                  {slide.title}
                </h3>
                <a
                  href={slide.url}
                  className="bg-primary text-sm lg:text-base font-medium w-auto inline-flex gap-2 lg:gap-[10px] items-center text-white py-3 lg:py-5 px-6 lg:px-9 rounded-full shadow-[0px_20px_25px_-5px_rgba(0,_0,_0,_0.1)]"
                >
                  <span>Explore now</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 20 20"
                    className="size-4 lg:size-5"
                  >
                    <path
                      stroke="#F8FAFC"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.25"
                      d="M9.583 17.5a7.917 7.917 0 1 0 0-15.833 7.917 7.917 0 0 0 0 15.833M18.333 18.333l-1.666-1.666"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <Image
              className="object-cover hidden object-top md:block h-full"
              src={slide.image}
              alt={slide.title}
            />
          </div>
        </div>
      ))}
      <div className="absolute flex gap-3 bottom-8 left-6 md:left-1/2 md:-translate-x-1/2">
        {slides.map((slide, i) => (
          <button key={slide.id} onClick={() => showSlide(i + 1)}>
            {currentSlide === i + 1 ? (
              <svg
                width="40"
                height="8"
                viewBox="0 0 40 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="8" rx="4" fill="#111827" />
              </svg>
            ) : (
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.8"
                  width="8"
                  height="8"
                  rx="4"
                  fill="#111827"
                />
              </svg>
            )}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Slider;
