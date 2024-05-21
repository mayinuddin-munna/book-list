import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import AboutUs from "../pages/AboutUs/AboutUs";
import Service from "../pages/Steps/Service";
import AboutInstructor from "../pages/AboutInstructor/AboutInstructor";
import Instructors from "../pages/Instructors/Instructors";
import ApplyOnline from "../pages/ApplyOnline/ApplyOnline";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/instructor",
        element: <Instructors />,
      },
      {
        path: "/about-instructor",
        element: <AboutInstructor />,
      },
      {
        path: "/apply-online",
        element: <ApplyOnline />,
      },
      {
        path: "contact-us",
        element: <Contact />,
      },
    ],
  },
]);
