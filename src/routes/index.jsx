import Home from "@/pages/home";
import { SignUp } from "@/pages/register/sign-up";
import Design from "@/design";
import Layout from "@/layout";
import Register from "@/pages/register";
import { SignIn } from "@/pages/register/sign-in";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/design",
        element: <Design />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
        children: [
          {
            path: "sign-in",
            element: <SignIn />,
          },
          {
            path: "sign-up",
            element: <SignUp />,
          },
        ],
      },
    ],
  },
];

export { routes };
