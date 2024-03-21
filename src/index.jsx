import React from "react";
import ReactDOM from "react-dom/client";
import "@/styles/base.scss";
import "@/styles/main.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "@/routes/index";

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
