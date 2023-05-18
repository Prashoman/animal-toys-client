import useTittle from "../../useHooks/useTitle";
import Slider from "./Slider/Slider";

const Home = () => {
  useTittle("Home");
  return (
    <div>
      <Slider></Slider>
    </div>
  );
};

export default Home;
