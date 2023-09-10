import CarCard from "../CarCard/CarCard";
import { Container } from "./Gallery.styled";

const Gallery = ({ cars, setFavorite }) => {
  const carsToShow = cars.filter(
    (obj, index) =>
      cars.findIndex(
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

export default Gallery;
