import { Link } from "react-router-dom";

const ToysRow = ({ allToys, id }) => {
  const { _id, name, toyName, category, price, quantity } = allToys || {};
  return (
    <tr>
      <th>{id + 1}</th>
      <td>{name}</td>
      <td>{toyName}</td>
      <td>{category}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <button className="btn btn-sm btn-success text-white">
          <Link to={`/toy/${_id}`}>view Details</Link>
        </button>
      </td>
    </tr>
  );
};

export default ToysRow;
