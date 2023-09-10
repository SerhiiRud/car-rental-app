import PropTypes from "prop-types";
import { useState } from "react";
import brands from "../../services/brands.json";
import price from "../../services/price.json";
//import icon from "../../images/sprite.svg";
import {
  Container,
  InputWrap,
  Label,
  Input,
  Select,
  SelectContainer,
  Button,
} from "./Filterbar.styled";

const Filterbar = ({ filterValues }) => {
  const [brand, setBrand] = useState(false);
  const [price, setPrice] = useState(false);

  const filterData = (e) => {
    e.preventDefault();

    const { brand, price, mileage, endMileage } = e.target;

    const values = {
      make: brand.value,
      rentalPrice: Number(price.value.trim()),
      minMileage: Number(mileage.value.trim()),
      maxMileage: Number(endMileage.value.trim()),
    };

    filterValues(filterValues);
  };

  return <div>Filterbar</div>;
};

export default Filterbar;
