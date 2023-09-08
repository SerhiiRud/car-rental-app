import Filterbar from "../../components/Filterbar";
import Gallery from "../../components/Gallery";

const Favorites = ({ cars, setCars }) => {
  const favoriteCars = cars.filter((car) => car.favorite === true);

  const favoriteToggle = (e) => {
    const id = Number(e.currentTarget.id);

    const updatedCars = cars.map((car) => ({
      ...car,
      favorite: car.id === id ? !car.favorite : car.favorite,
    }));
    setCars(updatedCars);
  };

  return (
    <>
      <Filterbar />
      <Gallery cars={favoriteCars} setFavorite={favoriteToggle} />
    </>
  );
};

export default Favorites;
