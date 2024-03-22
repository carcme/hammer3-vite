import React, { createContext, useState } from "react";

const LanguageContext = createContext();
const LanguageChangeContext = createContext();

export function getLanguage(script) {
  const language = React.useContext(LanguageContext);
  return language === "en" ? script.en : script.de;
}

export function useLanguage() {
  return React.useContext(LanguageContext);
}

export function useLanguageChange() {
  return React.useContext(LanguageChangeContext);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  function changeLanguage() {
    setLanguage(language === "en" ? "de" : "en");
  }

  return (
    <LanguageContext.Provider value={language}>
      <LanguageChangeContext.Provider value={changeLanguage}>
        {children}
      </LanguageChangeContext.Provider>
    </LanguageContext.Provider>
  );
}
