import { useLoaderData } from "react-router-dom";
import ToysRow from "./ToysRow";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import useTittle from "../../useHooks/useTitle";

const AllToys = () => {
  const [search, setSearch] = useState("");
  const [toysAll, setToysAll] = useState([]);
  const allToys = useLoaderData();
  useTittle("All Toys");

  useEffect(() => {
    if (allToys) {
      setToysAll(allToys);
    }
  }, []);
  let url = "";
  if (search) {
    url = `https://animal-toys-server-site.vercel.app/getToys/${search}`;
  } else {
    url = "https://animal-toys-server-site.vercel.app/allToys";
  }

  // const handleSearch = () => {
  //   fetch(`https://animal-toys-server-site.vercel.app/getToys/${search}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setToysAll(data);
  //     });
  // };
  //console.log(toysAll);

  //console.log(search);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToysAll(data);
      });
  }, [search]);
  return (
    <div className="space-y-7 py-7 px-4 lg:px-28 mt-20">
      <div>
        <h1 className="text-4xl font-sans font-bold text-orange-500 text-center">
          All Toys
        </h1>

        <div className="flex justify-center items-center my-5">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className="w-80 h-10 border px-4 border-gray-500 rounded-lg"
            placeholder="search by toy name"
          />
          <button className="ms-2">
            {" "}
            <FaSearch className="w-10 h-8"></FaSearch>
          </button>
        </div>
      </div>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>SI</th>
                <th>Seller Name</th>
                <th>Toy Name</th>
                <th>Sub Category</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {toysAll?.map((toy, index) => (
                <ToysRow key={toy._id} allToys={toy} id={index}></ToysRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToys;
