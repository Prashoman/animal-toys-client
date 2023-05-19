import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router-dom";
const TabCategoryCard = ({ toys }) => {
  const { _id, photo, toyName, price, rating } = toys || {};
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-60" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{toyName}</h2>
        <div className="flex justify-between items-center">
          <p className="text-xs   lg:text-xl text-orange-500 font-bold">
            Price: ${price}
          </p>
          <p className="flex items-center">
            <Rating style={{ maxWidth: 100 }} readOnly value={rating} />

            <span>{rating}</span>
          </p>
        </div>
        <div className="card-actions justify-end">
          <Link to={`/toy/${_id}`}>
            <button className="btn btn-success text-white">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabCategoryCard;
