import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCategoryCard from "../TabCategoryCard/TabCategoryCard";

const TabCategory = () => {
  const [category, setCategory] = useState("all");

  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/toys/${category}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [category]);
  const handleCategory = (name) => {
    setCategory(name);
  };
  return (
    <div className="px-4 lg:px-28 py-16">
      <div>
        <h1 className="text-4xl font-sans text-orange-500 text-center font-bold mb-8">
          Categories All Toys
        </h1>
      </div>
      <Tabs>
        <TabList>
          <Tab onClick={() => handleCategory("all")}>
            <p className="text-xl font-sans font-bold">All Toys</p>
          </Tab>
          <Tab onClick={() => handleCategory("Teddy bear Toy")}>
            <p className="text-xl font-sans font-bold">Teddy bear Toy</p>
          </Tab>
          <Tab onClick={() => handleCategory("Horse Toy")}>
            <p className="text-xl font-sans font-bold">Horse Toy</p>
          </Tab>
          <Tab onClick={() => handleCategory("Dog toy")}>
            <p className="text-xl font-sans font-bold">Dog toy</p>
          </Tab>
          <Tab onClick={() => handleCategory("Cat Toy")}>
            <p className="text-xl font-sans font-bold">Cat Toy</p>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-8 py-5">
            {toys.map((toy) => (
              <TabCategoryCard toys={toy} key={toy._id}></TabCategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-8 py-5">
            {toys.map((toy) => (
              <TabCategoryCard toys={toy} key={toy._id}></TabCategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-8 py-5">
            {toys.map((toy) => (
              <TabCategoryCard toys={toy} key={toy._id}></TabCategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-8 py-5">
            {toys.map((toy) => (
              <TabCategoryCard toys={toy} key={toy._id}></TabCategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-3 gap-8 py-5">
            {toys.map((toy) => (
              <TabCategoryCard toys={toy} key={toy._id}></TabCategoryCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabCategory;
