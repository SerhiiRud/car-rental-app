export const makeSelection = (cars) =>
  cars
    .map((car) => car.make)
    .filter((value, index, self) => self.indexOf(value) === index);

export const priceSelection = (min, max, step) => {
  const priceChart = [];
  for (let i = min; i <= max; i += step) {
    priceChart.push(i);
  }
  return priceChart;
};
