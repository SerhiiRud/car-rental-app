import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { lazy, Suspense } from "react";
import Loader from "./Loader";

const Home = lazy(() => import("../pages/Home"));
const Sidebar = lazy(() => import("../components/Sidebar"));
const Catalog = lazy(() => import("../pages/Catalog"));
const Favorites = lazy(() => import("../pages/Favorites"));

export const App = () => {
  const [cars, setCars] = useState([]);
  const [favs, setFavs] = useState([]);

  // useEffect(() => {

  // setFavs(
  //   localStorage.getItem("favs")
  //     ? JSON.parse(localStorage.getItem("favs"))
  //     : []
  // );
  // }, []);

  // useEffect(() => {
  //   const favsArray = favs.map((fav) => fav.id);
  //   const updatedCars = cars.map((car) => ({
  //     ...car,
  //     favorite: favsArray.includes(car.id) ? true : false,
  //   }));
  //   setCars(updatedCars);
  // }, [favs]);

  const favoriteToggle = (e) => {
    const id = Number(e.currentTarget.id);

    const updatedCars = cars.map((car) => ({
      ...car,
      favorite: car.id === id ? !car.favorite : car.favorite,
    }));
    setCars(updatedCars);
    const favoriteCars = updatedCars.filter((car) => car.favorite === true);
    console.log(favoriteCars);
    localStorage.setItem("favs", JSON.stringify(favoriteCars));
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
                favs={favs}
                setFavs={setFavs}
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
                favs={favs}
                setFavs={setFavs}
                favoriteToggle={favoriteToggle}
              />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
};
