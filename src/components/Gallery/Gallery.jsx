import CarCard from "../CarCard/CarCard";
import { Container } from "./Gallery.styled";

const Gallery = ({ cars, setFavorite }) => {
  const carsIndexes = cars
    .map((car) => car.id)
    .filter((value, index, self) => self.indexOf(value) === index);
  const carsToShow = cars.filter((car) => carsIndexes.includes(car.id));
  console.log(carsIndexes);

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
