import { useState } from "react";
import { FaXmark, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export default function GridGallery({ galleryImages }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0
      ? setSlideNumber(galleryImages.length - 1)
      : setSlideNumber(slideNumber - 1);
  };

  // Next Image
  const nextSlide = () => {
    slideNumber + 1 === galleryImages.length
      ? setSlideNumber(0)
      : setSlideNumber(slideNumber + 1);
  };

  console.log("galleryImages: ", galleryImages);

  return (
    <div>
      {openModal && (
        <div className="fixed inset-0 z-20 flex items-center justify-center w-full h-full bg-black/80">
          <div className="fixed z-20 -translate-y-1/2 rounded-full cursor-pointer bg-black/50 size-12 text-neutral-300 top-[60px] right-9"></div>
          <FaXmark
            className="fixed z-20 cursor-pointer text-neutral-300 size-10 top-10 right-10 hover:fill-red-700"
            onClick={handleCloseModal}
          />
          <div className="fixed z-20 -translate-y-1/2 rounded-full cursor-pointer bg-black/50 size-10 text-neutral-300 top-1/2 left-8"></div>
          <FaChevronLeft
            className="fixed z-20 -translate-y-1/2 rounded-full cursor-pointer text-neutral-300 size-6 top-1/2 left-10 hover:fill-red-700"
            onClick={prevSlide}
          />
          <div className="fixed z-20 -translate-y-1/2 rounded-full cursor-pointer bg-black/50 size-10 text-neutral-300 top-1/2 right-8"></div>
          <FaChevronRight
            className="fixed z-20 -translate-y-1/2 cursor-pointer size-6 text-neutral-300 top-1/2 right-10 hover:fill-red-700"
            onClick={nextSlide}
          />

          <div className="relative flex items-center justify-center w-[calc(100%-40px)] h-[calc(100%-40px)]">
            <img
              className="object-contain w-full h-full bg-contain cursor-pointer"
              src={galleryImages[slideNumber].img}
              alt=""
              onClick={nextSlide}
            />
            {galleryImages[slideNumber].text !== "" && (
              <div class="absolute flex justify-center items-center left-0 bottom-0 w-full p-8 bg-black/60 ">
                <h3 className="w-3/4 text-xl font-semibold text-center text-white font-Montserrat">
                  {galleryImages[slideNumber].text}
                </h3>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8 p-10 pt-20 bg-[#171717]">
        {galleryImages &&
          galleryImages.map((slide, index) => {
            return (
              <div className="relative " key={index}>
                <div
                  className="h-full cursor-pointer hover:z-20"
                  key={index}
                  onClick={() => handleOpenModal(index)}
                >
                  <img src={slide.img} alt="" className="object-cover h-full" />
                </div>
                <div
                  className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0"
                  onClick={() => handleOpenModal(index)}
                >
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                  <div className="absolute bottom-0 z-10 self-center p-2 mx-2 text-sm font-bold tracking-widest text-white font-Montserrat">
                    {slide.text}
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
