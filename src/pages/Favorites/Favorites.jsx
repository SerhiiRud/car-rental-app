import Filterbar from "../../components/Filterbar";
import Gallery from "../../components/Gallery";

const Favorites = ({ cars, setCars, favs, setFavs, favoriteToggle }) => {
  const favoriteCars = localStorage.getItem("favs")
    ? JSON.parse(localStorage.getItem("favs"))
    : [];

  return (
    <>
      <Filterbar />
      <Gallery cars={favoriteCars} setFavorite={favoriteToggle} />
    </>
  );
};

export default Favorites;
