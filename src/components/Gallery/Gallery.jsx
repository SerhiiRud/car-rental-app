import CarCard from "../CarCard/CarCard";

const Gallery = ({ cars, setFavorite }) => {
  return (
    <>
      <div>Cars for rent</div>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <CarCard car={car} setFavorite={setFavorite} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Gallery;
