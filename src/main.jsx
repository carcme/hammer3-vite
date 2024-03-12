import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Booking from "./pages/Booking";
import Errors from "./pages/Errors";
import Mystery from "./pages/Mystery";
import Gallery from "./pages/Gallery";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/mystery",
        element: <Mystery />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "*",
        element: <Errors />,
      },
    ],
  },
]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router}>
//       <App />
//     </RouterProvider>
//   </React.StrictMode>
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter router={router}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
