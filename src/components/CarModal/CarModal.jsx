import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { formatNumber } from "../../services/formatNumber";
import {
  Backdrop,
  Modal,
  ModalContainer,
  ImageWrap,
  Image,
  Title,
  Description,
  DescriptionText,
  FunctionalitiesWrap,
  SubTitle,
  Wrap,
  FunctionalitiesDescription,
  ConditionsWrap,
  ConditionText,
  CardButton,
  CloseButton,
} from "./CarModal.styled";
import icon from "../../images/svg/sprite.svg";

const modalRoot = document.querySelector("#modal-root");

const CarModal = ({ car, onCloseModal }) => {
  const {
    id,
    address,
    fuelConsumption,
    type,
    model,
    img,
    make,
    year,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalConditions,
    mileage,
    rentalPrice,
  } = car;

  const descriptionScheme = [
    address.split(", ")[1],
    address.split(", ")[2],
    `Id: ${id}`,
    `Year: ${year}`,
    `Type: ${type.charAt(0).toUpperCase()}${type.slice(1).toLowerCase()}`,
    `Fuel Consumption: ${fuelConsumption}`,
    `Engine Size: ${engineSize}`,
  ];

  const phoneNumber = "+380730000000";
  const personeConditions = rentalConditions.split("\n");
  const personAge = personeConditions[0].split(": ")[1];

  const onEsc = useCallback(
    (event) => {
      if (event.code === "Escape") onCloseModal();
    },
    [onCloseModal]
  );

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) onCloseModal();
  };

  useEffect(() => {
    window.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "auto";
    };
  }, [onEsc]);

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Modal>
        <ModalContainer>
          <CloseButton onClick={onCloseModal}>
            <svg className="icon">
              <use href={`${icon}#icon-close`}></use>
            </svg>
          </CloseButton>
          <ImageWrap>
            <Image src={img} alt={`${make} ${model}`} />
          </ImageWrap>
          <Title>
            {make} <span className="accent">{model}</span>, {year}
          </Title>
          <Description>{descriptionScheme.join(" | ")}</Description>
          <DescriptionText>{description}</DescriptionText>
          <Wrap>
            <SubTitle>Accessories and functionalities:</SubTitle>
            <FunctionalitiesWrap>
              <FunctionalitiesDescription>
                {accessories.join(" | ")}
              </FunctionalitiesDescription>
              <FunctionalitiesDescription>
                {functionalities.join(" | ")}
              </FunctionalitiesDescription>
            </FunctionalitiesWrap>
          </Wrap>
          <Wrap>
            <SubTitle>Rental Conditions:</SubTitle>
            <ConditionsWrap>
              <ConditionText>
                Minimum age: <span>{personAge}</span>
              </ConditionText>
              <ConditionText>{personeConditions[1]}</ConditionText>
              <ConditionText>{personeConditions[2]}</ConditionText>
              <ConditionText>
                Mileage: <span>{formatNumber(mileage)}</span>
              </ConditionText>
              <ConditionText>
                Price: <span>{rentalPrice.slice(1)}$</span>
              </ConditionText>
            </ConditionsWrap>
          </Wrap>
          <CardButton href={`tel:${phoneNumber}`}>Rental car</CardButton>
        </ModalContainer>
      </Modal>
    </Backdrop>,
    modalRoot
  );
};

CarModal.propTypes = {
  car: PropTypes.object.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default CarModal;
