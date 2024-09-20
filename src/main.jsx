import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Pages } from "./pages/index.jsx";

const router = createBrowserRouter([
  {
    path: "/Platform",
    element: <App />,
    children: [
      // student
      {
        path: "student/dashboard",
        element: <Pages.Student.Dashboard />,
      },
      {
        path: "student/my-courses",
        element: <Pages.Student.MyCourses />,
      },
      {
        path: "student/my-courses/catalog",
        element: <Pages.Student.Catalog />,
      },
      {
        path: "student/my-courses/catalog/courses",
        element: <Pages.Student.CoursesLists />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
