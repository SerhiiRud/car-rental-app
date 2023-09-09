import Filterbar from "../../components/Filterbar";
import Gallery from "../../components/Gallery";

const Favorites = ({ cars, setCars, favs, setFavs, favoriteToggle }) => {
  //const favoriteCars = cars.filter((car) => car.favorite === true);

  return (
    <>
      <Filterbar />
      <Gallery cars={favs} setFavorite={favoriteToggle} />
    </>
  );
};

export default Favorites;
