import useTittle from "../../useHooks/useTitle";
import Discounts from "./Discount/Discounts";
// import CategoryTab from "../CategoryTabs/CategoryTab";
import Gallery from "./Gallery/Gallery";
import Shipping from "./Shipping/Shipping";
import Slider from "./Slider/Slider";
import TabCategory from "./TabCategory/TabCategory";
import ToysBlogs from "./ToysBlogs/ToysBlogs";

const Home = () => {
  useTittle("Home");
  return (
    <div>
      <Slider></Slider>
      <Gallery></Gallery>
      <TabCategory></TabCategory>
      <Discounts></Discounts>
      <Shipping></Shipping>
      <ToysBlogs></ToysBlogs>
    </div>
  );
};

export default Home;
