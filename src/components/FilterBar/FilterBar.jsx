import { useEffect, useRef } from "react";

const FilterBar = ({ setVisibleCars, cars }) => {
  //const isFirstRender = useRef(true);

  const makeSelection = (cars) =>
    cars
      .map((car) => car.make)
      .filter((value, index, self) => self.indexOf(value) === index);

  const makeHandler = (evt) => {
    if (evt.target.value === "All") {
      setVisibleCars(cars);
      return;
    }
    const carsByMake = cars.filter((car) => car.make === evt.target.value);
    setVisibleCars(carsByMake);
  };

  useEffect(() => {
    setVisibleCars(cars);
  }, [cars, setVisibleCars]);

  return (
    <>
      <div>FilterBar</div>
      <select onChange={makeHandler}>
        <option defaultValue>All</option>
        {makeSelection(cars).map((make) => (
          <option key={make}>{make}</option>
        ))}
      </select>
    </>
  );
};

export default FilterBar;
