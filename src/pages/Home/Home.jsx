import { Title, Text, Container, Hero } from "./Home.styled";
import hero from "../../images/png/hero.png";

const Home = () => {
  return (
    <Container>
      <Title>Get a car with ease!</Title>
      <Text>
        We offer a wide selection of rental cars to suit your travel needs. Our
        small hatchback cars are economical and ideal for around town driving or
        short day trips, with 1-3 passengers fitting comfortably. We also have
        larger hatchbacks and wagons, which provide extra space and power, that
        comfortably fit four passengers. Whether you're travelling somewhat for
        the ultimate driving holiday, or a local needing a rental car for
        business or leisure, we have the right rental car for you at the best
        price.
      </Text>
      <Hero>
        <img src={hero} alt="cars banner" />
      </Hero>
    </Container>
  );
};

export default Home;
