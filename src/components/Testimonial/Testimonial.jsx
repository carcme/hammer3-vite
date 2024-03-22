import React, { useRef, useState, useEffect } from "react";
import useIsVisible from "@/hooks/useIsVisible";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import data from "@/data/TestimonialData";
import TestimonialItem from "./TestimonialItem";
import { getLanguage } from "@/LanguageContext";

/**
 * https://ui.shadcn.com/docs/components/carousel
 *
 * maybe find alternative - this aint great :/
 *
 * @returns
 */
const Testimonial = () => {
  const [animate, setAnimate] = useState(true);
  const refTestimonial = useRef();
  const isVisible1 = useIsVisible(refTestimonial);

  const text = getLanguage(data);

  useEffect(() => {
    let timeoutId;
    if (isVisible1) {
      timeoutId = setTimeout(() => {
        setAnimate(false);
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [isVisible1]);

  return (
    <div>
      <section className="section-divider h-fit bg-[url('assets/clown-gun-zoom.webp')] bg-cover w-full py-32">
        <div className="bg-[url('assets/clown-gun-zoom.webp')] h-full bg-cover w-full sm:bg-right bg-center object-cover animate-bgBlur z-10">
          <div className="lg:p-10 ">
            <h1
              ref={refTestimonial}
              className={`text-white lg:text-5xl text-2xl font-bold font-Montserrat leading-2 pb-10
            ${isVisible1 && animate ? "sm:animate-txtBlur" : {}}`}
            >
              {text.sectionHeading}
              {/* What Others Have Said */}
            </h1>
            <div className="flex justify-center ">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 5000,
                  }),
                ]}
                className="w-full max-w-5xl"
              >
                <CarouselContent className="w-full -ml-1">
                  {text.testimonials.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1">
                        <TestimonialItem
                          key={index}
                          image={item.image}
                          name={item.name}
                          title={item.title}
                          comment={item.text}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious
                  className="hidden lg:inline-flex bg-red-800 rounded-3xl text-white 
                hover:text-red-700 hover:border-red-700 hover:shadow-[inset_14rem_0_0_0] hover:shadow-neutral-200 
                duration-300 transition-[color,box-shadow]"
                />
                <CarouselNext
                  className="hidden lg:inline-flex bg-red-800 rounded-3xl text-white 
                hover:text-red-700 hover:border-red-700  duration-800 transition-[color]"
                />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
