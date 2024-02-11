import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Errors from "./pages/Errors";
import Mystery from "./pages/Mystery";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";

// const About = React.lazy(() => import("./pages/About"));
// const Gallery = React.lazy(() => import("./pages/Gallery"));
// const Errors = React.lazy(() => import("./pages/Errors"));
// const Mystery = React.lazy(() => import("./pages/Mystery"));
// const Contact = React.lazy(() => import("./pages/Contact"));

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="mystery" element={<Mystery />} />
        <Route path="faq" element={<Faq />} />

        {/* 
        <Route path="login" element={<Login setUser={setUser} />} />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute user={user}>
              <Dashboard user={user} />
            </ProtectedRoute>
          }
        /> */}
        <Route path="*" element={<Errors />} />
      </Routes>
    </>
  );
}

export default App;
