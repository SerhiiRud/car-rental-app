import { useEffect, useState } from "react";
import { makeSelection, priceSelection } from "../../services/filters";
import icon from "../../images/svg/sprite.svg";
import {
  Container,
  Form,
  Select,
  SelectContainer,
  Label,
  InputWrapper,
  Input,
  SearchButton,
} from "./FilterBar.styled";

const MAXPRICE = 500;
const MAXMILEAGE = 1000000;

const FilterBar = ({ setVisibleCars, cars }) => {
  const [brandSelectOpen, setBrandSelectOpen] = useState(false);
  const [priceSelectOpen, setPriceSelectOpen] = useState(false);

  const handleBrandSelectFocus = () => {
    setBrandSelectOpen(true);
  };

  const handleBrandSelectChange = () => {
    setBrandSelectOpen(false);
  };

  const handlePriceSelectFocus = () => {
    setPriceSelectOpen(true);
  };

  const handlePriceSelectChange = () => {
    setPriceSelectOpen(false);
  };

  const handleSearch = (evt) => {
    evt.preventDefault();
    const makeSearch =
      evt.target.make.value === "All" ? "" : evt.target.make.value;

    const priceSearch =
      evt.target.price.value === "All"
        ? MAXPRICE
        : Number(evt.target.price.value);

    const mileageFrom =
      evt.target.mileageFrom.value.length === 0
        ? 0
        : Number(evt.target.mileageFrom.value);

    const mileageTo =
      evt.target.mileageTo.value.length === 0
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
    <Container>
      <Form
        onSubmit={(evt) => {
          handleSearch(evt);
        }}
      >
        <SelectContainer>
          <Label>
            Car brand
            <Select
              id="make"
              onFocus={handleBrandSelectFocus}
              onBlur={handleBrandSelectChange}
              onChange={handleBrandSelectChange}
            >
              <option defaultValue>All</option>
              {makeSelection(cars).map((make) => (
                <option value={make} key={make}>
                  {make}
                </option>
              ))}
            </Select>
          </Label>
          <svg className="icon">
            <use
              href={`${icon}${
                brandSelectOpen ? "#icon-chevron-top" : "#icon-chevron-down"
              }`}
            ></use>
          </svg>
        </SelectContainer>
        <SelectContainer>
          <Label>
            Price/ 1 hour
            <Select
              id="price"
              onFocus={handlePriceSelectFocus}
              onBlur={handlePriceSelectChange}
              onChange={handlePriceSelectChange}
            >
              <option defaultValue>All</option>
              {priceSelection(30, MAXPRICE, 10).map((price) => (
                <option value={price} key={price}>
                  To {price}$
                </option>
              ))}
            </Select>
          </Label>
          <svg className="icon">
            <use
              href={`${icon}${
                priceSelectOpen ? "#icon-chevron-top" : "#icon-chevron-down"
              }`}
            ></use>
          </svg>
        </SelectContainer>
        <Label>
          Сar mileage / km
          <InputWrapper>
            <Input
              name="mileageFrom"
              id="mileage"
              placeholder="From"
              type="text"
            ></Input>
            <Input
              name="mileageTo"
              id="endMileage"
              placeholder="To"
              type="text"
            ></Input>
          </InputWrapper>
        </Label>
        <SearchButton type="submit">Search</SearchButton>
      </Form>
    </Container>
  );
};

export default FilterBar;
