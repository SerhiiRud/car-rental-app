import { useState } from "react";
import CarModal from "../CarModal/CarModal";

const CarCard = ({ car }) => {
  const [isOpened, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    console.log(1);
    setIsOpen(!isOpened);
  };

  const { id, img, make, year, rentalPrice } = car;
  return (
    <div>
      <img src={img}></img>
      <div>
        <span>{make}, </span>
        <span>{year}</span>
        <span>{rentalPrice}</span>
      </div>

      <button
        type="button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Learn more
      </button>
      {isOpened && <CarModal onCloseModal={handleCloseModal} />}
    </div>
  );
};

export default CarCard;
