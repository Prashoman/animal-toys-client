import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import useTittle from "../../useHooks/useTitle";

const ToyUpdate = () => {
  const [disable, setDisable] = useState(false);

  const handleFoucs = () => {
    setDisable(true);
  };
  useTittle("Update  a Toy");
  const toy = useLoaderData();
  const { _id, details, photo, toyName, category, price, quantity } = toy || {};
  //   console.log(toy);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const toyName = form.toyName.value;
    const photo = form.photo.value;
    const category = form.category.value;
    const quantity = form.quantity.value;
    const price = form.price.value;
    const details = form.details.value;

    const toys = {
      toyName,
      photo,
      category,
      quantity,
      price,
      details,
    };
    //console.log(toys);
    fetch(`http://localhost:5000/toy/${_id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(toys),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Toy Updated Successfully");
        }
      });
  };
  return (
    <div>
      <div className="px-4 lg:px-28 py-14 mt-20">
        <div>
          <h1 className="text-center font-sans text-4xl mb-11 font-bold text-orange-500">
            Update a Toy
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <form onSubmit={handleUpdate} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6"></div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">
                  Toy name
                </label>
                <input
                  defaultValue={toyName}
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
                  defaultValue={photo}
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
                  defaultValue={category}
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
                  defaultValue={quantity}
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  name="quantity"
                  type="number"
                />
              </div>

              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xl font-bold mb-2">
                  Price
                </label>
                <input
                  defaultValue={price}
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
                  defaultValue={details}
                  name="details"
                  className="appearance-none block w-full h-28 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                ></textarea>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <input
                className="btn w-full text-white btn-success"
                type="submit"
                value="Update Toy"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ToyUpdate;
