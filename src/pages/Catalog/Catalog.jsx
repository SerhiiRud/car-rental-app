import { useEffect, useState } from "react";
import { fetchCars, limit } from "../../services/API";
import Filterbar from "../../components/Filterbar";
import Gallery from "../../components/Gallery";

const Catalog = () => {
  const [cars, setCars] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const ERROR_MSG = "Error happend";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchCars(page);
        const favoritedCars = res.data.map((car) => ({
          ...car,
          favorite: false,
        }));
        console.log(cars);
        setCars((cars) => [...cars, ...favoritedCars]);
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setIsLoading(false);
        setIsLoaded(true);
      }
    };
    fetchData();
  }, [page, cars]);

  return (
    <>
      <Filterbar />
      <Gallery cars={cars} />
      {cars.length > 0 && cars.length % limit === 0 && (
        <button type="button" onClick={() => setPage(page + 1)}>
          Load more
        </button>
      )}
    </>
  );
};

export default Catalog;
