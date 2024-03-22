import { useLanguage } from "@/LanguageContext";
import React from "react";

const Errors = () => {
  const language = useLanguage();
  return (
    <div>
      <div
        id="error"
        className="relative h-screen min-h-screen bg-cover w-full bg-[black]/20"
      >
        <div className="h-full bg-cover bg-right object-cover animate-bgBlur mix-blend-overlay bg-[linear-gradient(to_bottom,rgba(27,27,27,0.5),rgba(27,27,27,1)),url('assets/clown-gun-zoom.webp')]">
          <h1 className="text-5xl font-extrabold text-center text-red-900 pt-52">
            Error: 404
          </h1>
          <p className="m-8 text-5xl font-extrabold text-center text-red-900">
            {language === "en" ? "Page Not Found!" : "Seite nicht gefunden!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Errors;
