import About from "@/pages/about";
import Home from "@/pages/home";
import {
  type RouteObject,
  createBrowserRouter,
  createMemoryRouter,
} from "react-router-dom";

export const defaultRoutes: RouteObject[] = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];

const defaultRouter = createBrowserRouter(defaultRoutes);
export const defaultMemoryRouter = createMemoryRouter(defaultRoutes);

export default defaultRouter;
