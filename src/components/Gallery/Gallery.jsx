const Gallery = ({ cars }) => {
  return (
    <>
      <div>Cars for rent</div>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <div>
              {car.make} {car.id}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Gallery;
