import { useState } from "react";
import PropTypes from "prop-types";
import CarModal from "../CarModal/CarModal";
import icon from "../../images/svg/sprite.svg";
import {
  CardWrap,
  ImageWrap,
  Image,
  AddFavoriteButton,
  DescriptionWrap,
  TitleWrap,
  Title,
  Description,
  CardButton,
} from "./CarCard.styled";

const CarCard = ({ car, setFavorite }) => {
  const [isOpened, setIsOpen] = useState(false);

  const handleCloseModal = () => {
    setIsOpen(!isOpened);
  };

  const {
    id,
    address,
    rentalCompany,
    type,
    model,
    mileage,
    functionalities,
    img,
    make,
    rentalPrice,
    year,
    favorite,
  } = car;

  const randomFeature = Math.floor(Math.random() * functionalities.length);

  const cardScheme = [
    address.split(", ")[1],
    address.split(", ")[2],
    rentalCompany,
    type,
    model,
    mileage,
    functionalities[randomFeature],
  ];

  return (
    <CardWrap>
      <ImageWrap>
        <Image src={img} alt={`${make} ${model}`}></Image>
        <AddFavoriteButton
          type="button"
          onClick={setFavorite}
          isFavorite={favorite}
          id={id}
        >
          <svg className={`icon ${favorite ? "favorite" : ""}`}>
            <use href={`${icon}#icon-heart`}></use>
          </svg>
        </AddFavoriteButton>
      </ImageWrap>
      <DescriptionWrap>
        <TitleWrap>
          <Title>
            <span className="make">
              {make} <span className="accent">{model}</span>, {year}
            </span>
            <span className="price">{rentalPrice}</span>
          </Title>
        </TitleWrap>
        <Description>{cardScheme.join(" | ").slice(0, 95)}</Description>
      </DescriptionWrap>

      <CardButton
        type="button"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Learn more
      </CardButton>
      {isOpened && <CarModal car={car} onCloseModal={handleCloseModal} />}
    </CardWrap>
  );
};

CarCard.propTypes = {
  car: PropTypes.object.isRequired,
  setFavorite: PropTypes.func.isRequired,
};

export default CarCard;
