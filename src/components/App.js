import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("../pages/Home"));
const Sidebar = lazy(() => import("../components/Sidebar"));
const Catalog = lazy(() => import("../pages/Catalog"));
const Favorites = lazy(() => import("../pages/Favorites"));
const Loader = lazy(() => import("../components/Loader"));
const CarCard = lazy(() => import("../components/CarCard"));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route path="cars" element={<Catalog />} />
          <Route path="cars/:carId" element={<CarCard />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
