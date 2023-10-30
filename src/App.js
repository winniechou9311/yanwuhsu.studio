import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  useLocation,
} from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Introduction from "./pages/Introduction";
import Project from "./pages/Project";
// import RootLayout from "./pages/Root";
import Error from "./pages/Error";
import CallbackPage from "./pages/callback-page";
import RootLayout from "./pages/Root";
import Footer from "./footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/about", element: <About /> },
      { path: "/booking", element: <Booking /> },
      { path: "/contact", element: <Contact /> },
      { path: "/introduction", element: <Introduction /> },
      { path: "/project", element: <Project /> },
      { path: "/callback", element: <CallbackPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <div className="row">
        <RouterProvider router={router}>
          <RootLayout />
          <Footer />
        </RouterProvider>
      </div>
    </>
  );
}

export default App;
