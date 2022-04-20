import { Home, Search, Trending } from "pages";
import { RoutesProps } from "types";

export const routesDirectory: RoutesProps[] = [
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
