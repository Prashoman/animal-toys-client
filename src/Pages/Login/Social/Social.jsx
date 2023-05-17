import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProvider";

const Social = () => {
  const { logInGoogle } = useContext(AuthContext);

  const handleGoogle = () => {
    logInGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={handleGoogle} className=" text-white btn btn-warning">
        <FaGoogle className="me-4 text-cyan-600"></FaGoogle> Google
      </button>
    </div>
  );
};

export default Social;
