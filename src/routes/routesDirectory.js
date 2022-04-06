import { Home, Search, Trending } from "pages";

export const routesDirectory = [
  {
    path: "/",
    component: Home,
    exact: true,
  },
  {
    path: "/search",
    component: Search,
  },
  {
    path: "/trending",
    component: Trending,
  },
];
