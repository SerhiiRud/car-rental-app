import { useEffect, useState } from "react";
import { fetchCars, limit } from "../../services/API";
import Filterbar from "../../components/Filterbar";
import Gallery from "../../components/Gallery";

const Catalog = ({ cars, setCars }) => {
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const ERROR_MSG = "Error happend";

  const favoriteToggle = (e) => {
    const id = Number(e.currentTarget.id);

    const updatedCars = cars.map((car) => ({
      ...car,
      favorite: car.id === id ? !car.favorite : car.favorite,
    }));
    setCars(updatedCars);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchCars(page);
        const favoritedCars = res.data.map((car) => ({
          ...car,
          favorite: false,
        }));

        setCars(favoritedCars);
        console.log(cars);
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setIsLoading(false);
        setIsLoaded(true);
      }
    };
    fetchData();
  }, [page]);

  return (
    <>
      <Filterbar />
      <Gallery cars={cars} setFavorite={favoriteToggle} />
      {cars.length > 0 && cars.length % limit === 0 && (
        <button
          type="button"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Load more
        </button>
      )}
    </>
  );
};

export default Catalog;
