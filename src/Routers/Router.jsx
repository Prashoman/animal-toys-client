import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import Error from "../Pages/error/Error";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/Alltoys/AllToys";
import ToyDetails from "../Pages/ToyDetails/ToyDetails";
import MyToys from "../Pages/Mytoys/MyToys";
import ToyUpdate from "../Pages/ToyUpdate/ToyUpdate";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "addToys",
        element: (
          <PrivateRoute>
            <AddToys></AddToys>
          </PrivateRoute>
        ),
      },
      {
        path: "allToys",
        element: <AllToys></AllToys>,
        loader: () =>
          fetch("https://animal-toys-server-site.vercel.app/allToys"),
      },
      {
        path: "toy/:id",
        element: (
          <PrivateRoute>
            <ToyDetails></ToyDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://animal-toys-server-site.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "toyUpdate/:id",
        element: (
          <PrivateRoute>
            <ToyUpdate></ToyUpdate>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://animal-toys-server-site.vercel.app/toy/${params.id}`),
      },
      {
        path: "myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
