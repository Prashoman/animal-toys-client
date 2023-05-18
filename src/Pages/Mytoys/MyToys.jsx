import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const MyToys = () => {
  const { user } = useContext(AuthContext);

  return <div></div>;
};

export default MyToys;
