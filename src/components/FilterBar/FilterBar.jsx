import { useEffect } from "react";

const FilterBar = ({ setVisibleCars, cars }) => {
  const makeSelection = (cars) =>
    cars
      .map((car) => car.make)
      .filter((value, index, self) => self.indexOf(value) === index);

  const makeHandler = () => {};

  return (
    <>
      <div>FilterBar</div>
      <select onSelect={makeHandler}>
        {makeSelection(cars).map((make) => (
          <option key={make}>{make}</option>
        ))}
      </select>
    </>
  );
};

export default FilterBar;
