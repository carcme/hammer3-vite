import React, { useEffect } from "react";
import GridGallery from "@/components/gallery/GridGallery";
import galleryVenueData from "@/data/galleryVenueData";

const Gallery = () => {
  const galleryImages = [
    {
      img: "https://source.unsplash.com/ztpUS4N1xhY",
      text: "Lorem ipsum dolor sit amet",
    },
    {
      img: "https://source.unsplash.com/mPFSPqZOO7s",
      text: "Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur",
    },
    {
      img: "https://images.pexels.com/photos/1712/sunglasses-apple-iphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      img: "https://source.unsplash.com/uPEnxrdSKIw",
      text: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      img: "https://source.unsplash.com/hFKZ5-OT9Ys",
      text: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      img: "https://source.unsplash.com/xoTt2fjs7d0",
      text: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      img: "https://source.unsplash.com/hqnQWmIt3cY",
      text: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      img: "https://source.unsplash.com/qAaGXj-AOv4",
      text: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      img: "https://source.unsplash.com/0qnRfgnZIsI",
      text: "Lorem ipsum ",
    },
    {
      img: "https://source.unsplash.com/LV-NvIcA-Gg",
      text: "Lorem ipsum ",
    },
    {
      img: "https://source.unsplash.com/uyX3qAQhZVA",
      text: "Lorem ipsum ",
    },
    {
      img: "https://source.unsplash.com/qAaGXj-AOv4",
      text: "Lorem ipsum ",
    },
    {
      img: "https://source.unsplash.com/8KtqjrskUg8",
      text: "Lorem ipsum ",
    },
    {
      img: "https://source.unsplash.com/mpwF3Mv2UaU",
      text: "Lorem ipsum ",
    },
    {
      img: "https://source.unsplash.com/gfMWhkDCwYM",
      text: "Lorem ipsum ",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="bg-[#171717]">
        <div className="flex flex-col w-full px-4 pt-40 text-center text-white section-divider lg:px-40">
          <h1 className="mb-4 text-2xl font-bold sm:text-5xl animate-bgBlur">
            {galleryVenueData.sectionHeading}
          </h1>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3 animate-bgBlur">
            {galleryVenueData.sectionSubHeading}
          </p>
        </div>
      </div>
      <GridGallery galleryImages={galleryVenueData.listItems} />
    </>
  );
};

export default Gallery;
