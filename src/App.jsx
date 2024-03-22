import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { LanguageProvider } from "./LanguageContext";

function App() {
  const [user, setUser] = useState(null);
  const clientID = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;

  return (
    <>
      <LanguageProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
