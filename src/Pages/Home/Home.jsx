import useTittle from "../../useHooks/useTitle";
import Discounts from "./Discount/Discounts";
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
      <Discounts></Discounts>
    </div>
  );
};

export default Home;
