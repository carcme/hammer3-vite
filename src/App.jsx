import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [user, setUser] = useState(null);
  const clientID = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
