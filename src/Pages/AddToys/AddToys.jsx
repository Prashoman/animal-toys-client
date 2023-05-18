import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "react-toastify";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const [disable, setDisable] = useState(false);

  const handleFoucs = () => {
    setDisable(true);
  };

  const handleInsert = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const toyName = form.toyName.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const details = form.details.value;

    const toys = {
      name,
      email,
      toyName,
      photo,
      category,
      quantity,
      rating,
      price,
      details,
    };
    console.log(toys);

    fetch("http://localhost:5000/insert/toys", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(toys),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          form.reset();

          toast.success("Inserted successfully");
        }
      });
  };

  return (
    <div className="px-4 lg:px-28 py-14">
      <div>
        <h1 className="text-center font-sans text-4xl mb-11 font-bold text-orange-500">
          Added a Toys
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <form onSubmit={handleInsert} className="w-full max-w-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">
                Seller Name
              </label>
              <input
                defaultValue={user?.displayName}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="name"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">
                Seller Email
              </label>
              <input
                defaultValue={user?.email}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="email"
                type="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">
                Toy name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                name="toyName"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">
                Picture URl
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="photo"
                type="url"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">
                Sub Category
              </label>
              <select
                name="category"
                onFocus={handleFoucs}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="default" disabled={disable}>
                  -----Selected Category---
                </option>
                <option value="Teddy bear Toy">Teddy bear Toy</option>
                <option value="Horse Toy">Horse Toy</option>
                <option value="Dog toy">Dog toy</option>
                <option value="Cat Toy">Cat Toy</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">
                Quantity
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="quantity"
                type="number"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">
                Rating
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="rating"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">
                Price
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                name="price"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">
                Details
              </label>
              <textarea
                name="details"
                className="appearance-none block w-full h-28 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></textarea>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <input
              className="btn w-full text-white btn-success"
              type="submit"
              value="Insert Toy"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddToys;
