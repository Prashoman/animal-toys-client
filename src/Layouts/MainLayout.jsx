import { Outlet } from "react-router-dom";
import Header from "../Pages/Shareing/Header/Header";
import Footer from "../Pages/Shareing/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="mb-32">
        <Header></Header>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
