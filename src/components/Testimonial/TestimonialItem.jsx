import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialItem = ({ image, name, title, comment }) => {
  return (
    <div>
      <div className="p-1">
        <Card className="bg-transparent border-0">
          <CardContent className="flex items-center justify-center aspect-square ">
            <div className="shadow-xl rounded-xl border-2 max-w-72 border-[rgb(64,64,64)]">
              <blockquote className="flex flex-col h-full pt-4 align-middle shadow min-h-96 lg:min-w-64 text-neutral-300 bg-neutral-900/40 backdrop-blur-md rounded-xl">
                <header className="flex flex-col justify-center flex-1">
                  {comment.map((text, index) => (
                    <p
                      key={index}
                      className="pb-4 px-4 text-left md:text-[16px] text-[14px]"
                    >
                      {text}
                    </p>
                  ))}
                </header>

                <footer className="flex items-center px-6 py-4 space-x-4 text-white bg-neutral-900/40">
                  <img
                    className="w-10 h-10 rounded-full ring-2 ring-neutral-400"
                    loading="lazy"
                    src={image}
                    alt={name}
                    width="460"
                    height="460"
                  />

                  <div>
                    <p className="text-lg font-bold">{name}</p>
                    <a href="" rel="noopener" className="text-sm text-red-700">
                      {title}
                    </a>
                  </div>
                </footer>
              </blockquote>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TestimonialItem;
