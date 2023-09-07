import CarCard from "../CarCard/CarCard";

const Gallery = ({ cars }) => {
  return (
    <>
      <div>Cars for rent</div>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <CarCard car={car} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Gallery;
