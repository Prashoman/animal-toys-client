import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useLoaderData } from "react-router-dom";
import useTittle from "../../useHooks/useTitle";

const ToyDetails = () => {
  const singleToy = useLoaderData();

  useTittle("Details");
  //console.log(singleToy);
  const {
    name,
    email,
    toyName,
    photo,
    category,
    quantity,
    rating,
    price,
    details,
  } = singleToy || {};
  return (
    <div className="px-4 lg:px-28 py-10 mt-20">
      <div className="card w-full bg-base-100 shadow-xl lg:px-4 py-14">
        <figure>
          <img className="w-full h-96" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-start items-center">
            <h1 className="text-xs lg:text-xl font-bold text-orange-500">
              Author Name : {name}
            </h1>
            <h1 className="text-xs lg:text-xl font-bold ms-5 text-orange-500">
              Email : {email}
            </h1>
          </div>
          <h2 className="card-title">{toyName}</h2>
          <h1>Details:</h1>
          <p>{details}</p>
          <div className="lg:flex justify-between items-center space-y-4">
            <div className="flex justify-between items-center">
              <h1 className="text-xs  lg:text-xl">
                Sub-Category:{" "}
                <span className="text-orange-500 font-bold">{category}</span>
              </h1>
              <p className="text-xs  lg:text-xl ms-6">Quantity: {quantity}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-xs lg:me-8  lg:text-xl text-orange-500 font-bold">
                Price: ${price}
              </p>
              <p className="flex items-center">
                <Rating style={{ maxWidth: 150 }} readOnly value={rating} />

                <span>{rating}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
