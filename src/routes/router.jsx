import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Faq from "../pages/Faq";
import Booking from "../pages/Booking";
import Errors from "../pages/Errors";
import Mystery from "../pages/Mystery";
import Gallery from "../pages/Gallery";
import PrivacyPolicy from "../pages/PrivacyPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
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
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "*",
        element: <Errors />,
      },
    ],
  },
]);
export default router;
