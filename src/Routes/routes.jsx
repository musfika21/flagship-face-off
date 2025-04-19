import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import MainLayout from "../layouts/MainLayout/MainLayout";
import About from "../pages/About/About";
import PhoneDetails from "../pages/phone-details/PhoneDetails";
import ErrorPage from "../pages/Error/ErrorPage";
import Favorites from "../pages/Favorites/Favorites";

export const router = createBrowserRouter([
    {
      path: '/',
      Component: MainLayout,
      errorElement: ErrorPage,
      children: [
        {
            // default children can be write like this or path '/' like this.
            // index: true,
            path: '/',
            Component: Home
        },
        {
            path: '/about',
            Component: About
        },
        {
            path: '/phone-details',
            Component: PhoneDetails
        },
        {
            path: '/favorites',
            Component: Favorites
        }
      ]
    },
   
  ])