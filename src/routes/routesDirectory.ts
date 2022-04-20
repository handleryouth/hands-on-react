import { Home, Search, Trending } from "pages";
import { RoutesProps } from "types";

export const routesDirectory: RoutesProps[] = [
  {
    path: "/",
    component: Home,
    exact: true,
    name: "Home",
  },
  {
    path: "/search",
    component: Search,
    name: "Search",
  },
  {
    path: "/trending",
    component: Trending,
    name: "Trending",
  },
];
