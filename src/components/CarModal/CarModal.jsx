const CarModal = ({ onCloseModal }) => {
  return (
    <>
      <div>Car modal</div>
      <button type="button" onClick={onCloseModal}>
        X
      </button>
    </>
  );
};

export default CarModal;
