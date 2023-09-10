import PropTypes from "prop-types";
import Gallery from "../../components/Gallery";
import { Container, Button, Text, Image } from "./Favorites.styled";

const Favorites = ({ cars, favoriteToggle }) => {
  const favoriteCars = localStorage.getItem("favs")
    ? JSON.parse(localStorage.getItem("favs"))
    : [];

  return (
    <Container>
      {favoriteCars.length === 0 ? (
        <Text>You don't have favorite cars</Text>
      ) : (
        <Gallery cars={favoriteCars} setFavorite={favoriteToggle} />
      )}
    </Container>
  );
};

Favorites.propTypes = {
  cars: PropTypes.array.isRequired,
  favoriteToggle: PropTypes.func.isRequired,
};

export default Favorites;
