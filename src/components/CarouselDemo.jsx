import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo() {
  const name = "name";
  const title = "CEO";
  const comment = ["some commnet here"];

  return (
    <div className="flex justify-center p-40 bg-slate-700">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-5xl"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="bg-transparent border-0">
                  <CardContent className="flex aspect-square items-center justify-center ">
                    <div className="shadow-xl rounded-xl border-2 border-[rgb(64,64,64)]">
                      <blockquote
                        className="h-full min-h-96 lg:min-w-64 pt-4 text-neutral-300 
              flex flex-col bg-neutral-900/40 backdrop-blur-md shadow rounded-xl  align-middle"
                      >
                        <header className="flex flex-col flex-1 justify-center">
                          {comment.map((text, index) => (
                            <p
                              key={index}
                              className="pb-4 px-2 md:text-[16px] text-[14px]"
                            >
                              {text}
                            </p>
                          ))}
                        </header>

                        <footer className="flex items-center px-6 py-4 space-x-4 text-white bg-neutral-900/40">
                          <img
                            className="w-10 h-10 rounded-full ring-2 ring-neutral-400"
                            loading="lazy"
                            src="https://picsum.photos/192"
                            alt={name}
                            width="460"
                            height="460"
                          />

                          <div>
                            <p className="text-lg font-bold">{name}</p>
                            <a
                              href=""
                              rel="noopener"
                              className="text-sm text-red-700"
                            >
                              {title}
                            </a>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
