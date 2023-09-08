import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Backdrop,
  CloseButton,
  ModalContainer,
  MyCloseIcon,
} from "./CarModal.styled";

const modalRoot = document.querySelector("#modal-root");

const CarModal = ({ car, onCloseModal }) => {
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
      <ModalContainer>
        <div>Car modal {car.id}</div>
        <CloseButton onClick={onCloseModal}>
          <MyCloseIcon></MyCloseIcon>
        </CloseButton>
      </ModalContainer>
    </Backdrop>,
    modalRoot
  );
};

export default CarModal;
