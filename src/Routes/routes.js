import Home from "../pages/Home";
import UnitDetail from "../pages/UnitDetail";
import Units from "../pages/Units";

export const routes = [
  {
    path: "/",
    exact: true,
    component: <Home />,
    title: "Home"
  },
  {
    path: "/units",
    exact: false,
    component: <Units />,
    title: "units"
  },
  {
    path: "/unit/:id",
    exact: true,
    component: <UnitDetail />,
    title: "unit details"
  }
];
