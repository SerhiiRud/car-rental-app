import { useEffect } from "react";
import { makeSelection, priceSelection } from "../../services/filters";

const FilterBar = ({ setVisibleCars, cars }) => {
  const handleSearch = (evt) => {
    evt.preventDefault();

    const makeSearch =
      evt.target.make.value === "All" ? "" : evt.target.make.value;

    const priceSearch =
      evt.target.price.value === "All" ? 500 : Number(evt.target.price.value);

    const carsToShow = cars.filter(
      (car) =>
        car.make.toLowerCase().indexOf(makeSearch.toLowerCase()) !== -1 &&
        Number(car.rentalPrice.slice(1)) <= priceSearch
    );

    setVisibleCars(carsToShow);
  };

  useEffect(() => {
    setVisibleCars(cars);
  }, [cars, setVisibleCars]);

  return (
    <form
      onSubmit={(evt) => {
        handleSearch(evt);
      }}
    >
      <select id="make">
        <option defaultValue>All</option>
        {makeSelection(cars).map((make) => (
          <option value={make} key={make}>
            {make}
          </option>
        ))}
      </select>
      <select id="price">
        <option defaultValue>All</option>
        {priceSelection(30, 500, 10).map((price) => (
          <option value={price} key={price}>
            {price}
          </option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FilterBar;
