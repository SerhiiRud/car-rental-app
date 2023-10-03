import { useEffect } from "react";
import { makeSelection, priceSelection } from "../../services/filters";

const MAXPRICE = 500;
const MAXMILEAGE = 1000000;

const FilterBar = ({ setVisibleCars, cars }) => {
  const handleSearch = (evt) => {
    evt.preventDefault();
    const makeSearch =
      evt.target.make.value === "All" ? "" : evt.target.make.value;

    const priceSearch =
      evt.target.price.value === "All"
        ? MAXPRICE
        : Number(evt.target.price.value);

    const mileageFrom =
      evt.target.mileageFrom.value === 0
        ? 0
        : Number(evt.target.mileageFrom.value);

    const mileageTo =
      evt.target.mileageTo.value === 0
        ? MAXMILEAGE
        : Number(evt.target.mileageTo.value);

    const carsToShow = cars.filter(
      (car) =>
        car.make.toLowerCase().indexOf(makeSearch.toLowerCase()) !== -1 &&
        Number(car.rentalPrice.slice(1)) <= priceSearch &&
        car.mileage >= mileageFrom &&
        car.mileage <= mileageTo
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
        {priceSelection(30, MAXPRICE, 10).map((price) => (
          <option value={price} key={price}>
            {price}
          </option>
        ))}
      </select>
      <input name="mileageFrom" placeholder="From" type="number"></input>
      <input name="mileageTo" placeholder="To" type="number"></input>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FilterBar;
