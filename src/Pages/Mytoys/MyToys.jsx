import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyToyRow from "./MyToyRow";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import useTittle from "../../useHooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [sort, setSort] = useState("");

  useTittle("My Toys");

  const url = `http://localhost:5000/myToys?email=${user?.email}&price=${sort}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toy/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaingToys = toys.filter((toy) => toy._id !== id);
              setToys(remaingToys);
            }
          });
      }
    });
  };

  return (
    <div className="px-4 py-10 lg:px-28 mt-20">
      <div>
        <h1 className="text-center font-sans text-4xl mb-11 font-bold text-orange-500">
          My Toys
        </h1>

        <div className="mb-10">
          <label className="text-xl font-sans font-bold me-5">
            Sorted By Price:
          </label>
          <select
            className="lg:w-64 border border-gray-600 rounded-sm px-3 h-10"
            onChange={(e) => setSort(e.target.value)}
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
              <MyToyRow
                key={toy._id}
                handleDelete={handleDelete}
                index={index}
                toys={toy}
              ></MyToyRow>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
