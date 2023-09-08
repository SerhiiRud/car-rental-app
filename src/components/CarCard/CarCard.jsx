import { useState } from "react";
import CarModal from "../CarModal/CarModal";
import { FavoriteButton } from "./CarCard.styled";

const CarCard = ({ car, setFavorite }) => {
  const [isOpened, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    console.log(1);
    setIsOpen(!isOpened);
  };

  const { id, favorite, img, make, year, rentalPrice } = car;
  return (
    <div>
      <span>{favorite}</span>
      <img src={img}></img>
      <div>
        <span>{make}, </span>
        <span>{year}</span>
        <span>{rentalPrice}</span>
      </div>
      <FavoriteButton
        type="button"
        id={id}
        onClick={setFavorite}
        isFavorite={favorite}
      >
        Favorite
      </FavoriteButton>
      <button
        type="button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Learn more
      </button>
      {isOpened && <CarModal car={car} onCloseModal={handleCloseModal} />}
    </div>
  );
};

export default CarCard;
