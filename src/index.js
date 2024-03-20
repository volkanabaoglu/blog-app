import React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage";
import BlogListPage from "./components/BlogListPage.js";
import BlogDetailsPage from "./components/BlogDetailPage";
import ContactPage from "./components/ContactPage";
import NotFoundPage from "./components/NotFoundPage";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/blogs",
    element: <BlogListPage />,
  },
  {
    path: "/blogs/:id",
    element: <BlogDetailsPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
