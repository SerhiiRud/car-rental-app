import { useEffect, useState } from "react";
import { fetchAPI, limit } from "../../services/API";

import Gallery from "../../components/Gallery";
import { Container, Button } from "./Catalog.styled";

const Catalog = ({ cars, setCars, favoriteToggle }) => {
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const ERROR_MSG = "Error happend";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const favoriteCars = localStorage.getItem("favs")
          ? JSON.parse(localStorage.getItem("favs")).map((fav) => fav.id)
          : [];
        const res = await fetchAPI(page);
        const favoritedCars = res.data.map((car) => ({
          ...car,
          favorite: favoriteCars.includes(car.id) ? true : false,
        }));

        setCars((prev) => [...prev, ...favoritedCars]);
      } catch (error) {
        setError(ERROR_MSG);
      } finally {
        setIsLoading(false);
        setIsLoaded(true);
      }
    };
    fetchData();
  }, [page, setCars]);

  return (
    <Container>
      <Gallery cars={cars} setFavorite={favoriteToggle} />
      {cars.length > 0 && cars.length % limit === 0 && (
        <Button
          type="button"
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Load more
        </Button>
      )}
    </Container>
  );
};

export default Catalog;
