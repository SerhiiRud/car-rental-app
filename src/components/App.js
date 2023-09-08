import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import Loader from "./Loader";

const Home = lazy(() => import("../pages/Home"));
const Sidebar = lazy(() => import("../components/Sidebar"));
const Catalog = lazy(() => import("../pages/Catalog"));
const Favorites = lazy(() => import("../pages/Favorites"));
// const Loader = lazy(() => import("../components/Loader"));
// const CarCard = lazy(() => import("../components/CarCard"));
// const CarModal = lazy(() => import("../components/CarModal"));

export const App = () => {
  const [cars, setCars] = useState([]);

  const favoriteToggle = (e) => {
    const id = Number(e.currentTarget.id);

    const updatedCars = cars.map((car) => ({
      ...car,
      favorite: car.id === id ? !car.favorite : car.favorite,
    }));
    setCars(updatedCars);
  };

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route index element={<Home />} />
          <Route
            path="cars"
            element={
              <Catalog
                cars={cars}
                setCars={setCars}
                favoriteToggle={favoriteToggle}
              />
            }
          />
          <Route
            path="favorites"
            element={
              <Favorites
                cars={cars}
                setCars={setCars}
                favoriteToggle={favoriteToggle}
              />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
