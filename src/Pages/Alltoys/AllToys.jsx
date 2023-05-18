import { useLoaderData } from "react-router-dom";
import ToysRow from "./ToysRow";

const AllToys = () => {
  const allToys = useLoaderData();
  console.log(allToys);
  return (
    <div className="space-y-7 py-7 px-4 lg:px-28">
      <div>
        <h1 className="text-4xl font-sans font-bold text-orange-500 text-center">
          All Toys
        </h1>
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
              {allToys?.map((toy, index) => (
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
