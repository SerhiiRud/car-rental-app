import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Loader } from "./Loader/Loader";

const Home = lazy(() => import("pages/Home/Home"));
const Sidebar = lazy(() => import("components/Sidebar/Sidebar"));
const Catalog = lazy(() => import("pages/Catalog/Catalog"));
const Favorites = lazy(() => import("pages/Favorites/Favorites"));

export const App = () => {
  <Suspense fallback={<Loader />}>
    <Routes>
      <Route path="/" element={<Sidebar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </Suspense>;
};
