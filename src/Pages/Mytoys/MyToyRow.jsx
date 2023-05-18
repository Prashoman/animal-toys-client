import { FaEdit } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const MyToyRow = ({ toys, index, handleDelete }) => {
  const { _id, name, photo, toyName, category, price, quantity } = toys || {};
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img className="w-28 h-14" src={photo} alt="" />
      </td>
      <td>{toyName}</td>
      <td>{category}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <th>
        <button className="btn btn-sm btn-warning ">
          <Link to={`/toyUpdate/${_id}`}>
            <FaEdit></FaEdit>
          </Link>
        </button>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-danger ms-3"
        >
          <HiX></HiX>
        </button>
      </th>
    </tr>
  );
};

export default MyToyRow;
