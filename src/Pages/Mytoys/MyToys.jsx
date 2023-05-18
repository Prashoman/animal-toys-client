import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToyRow from "./MyToyRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);

  const url = `http://localhost:5000/myToys?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [url]);

  return (
    <div className="px-28">
      <div>
        <h1 className="text-center font-sans text-4xl mb-11 font-bold text-orange-500">
          My Toys
        </h1>

        <div className="mb-10">
          <label className="text-xl font-sans font-bold me-5">
            Sorted By Price:
          </label>
          <select
            className="w-64 border border-gray-600 rounded-sm px-3 h-10"
            name="sorted"
          >
            <option value="all">All</option>
            <option value="ascending ">Ascending </option>
            <option value="descending">Descending</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>SI</th>
              <th>Photo</th>
              <th>ToyName</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Available quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys?.map((toy, index) => (
              <MyToyRow key={toy._id} index={index} toys={toy}></MyToyRow>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
