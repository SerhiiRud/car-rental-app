import Filterbar from "../../components/Filterbar";
import Gallery from "../../components/Gallery";

const Favorites = ({ cars, setCars, favoriteToggle }) => {
  const favoriteCars = cars.filter((car) => car.favorite === true);

  return (
    <>
      <Filterbar />
      <Gallery cars={favoriteCars} setFavorite={favoriteToggle} />
    </>
  );
};

export default Favorites;
