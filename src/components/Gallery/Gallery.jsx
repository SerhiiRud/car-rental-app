import PropTypes from "prop-types";
import CarCard from "../CarCard/CarCard";
import { Container } from "./Gallery.styled";

const Gallery = ({ cars, visibleCars, setFavorite }) => {
  const carsToShow = visibleCars.filter(
    (obj, index) =>
      visibleCars.findIndex(
        (item) => item.location === obj.location && item.id === obj.id
      ) === index
  );

  return (
    <>
      <Container>
        {carsToShow.map((car) => (
          <li key={car.id}>
            <CarCard car={car} setFavorite={setFavorite} />
          </li>
        ))}
      </Container>
    </>
  );
};

Gallery.propTypes = {
  cars: PropTypes.array.isRequired,
  setFavorite: PropTypes.func.isRequired,
};

export default Gallery;
