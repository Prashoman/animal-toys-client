import useTittle from "../../useHooks/useTitle";
// import CategoryTab from "../CategoryTabs/CategoryTab";
import Gallery from "./Gallery/Gallery";
import Slider from "./Slider/Slider";
import TabCategory from "./TabCategory/TabCategory";

const Home = () => {
  useTittle("Home");
  return (
    <div>
      <Slider></Slider>
      <Gallery></Gallery>
      <TabCategory></TabCategory>
    </div>
  );
};

export default Home;
