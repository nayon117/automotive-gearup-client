import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import BrandPage from "../components/BrandPage";
import BrandDetails from "../components/BrandDetails";
import UpdateCar from "../components/UpdateCar";
import PrivateRoute from "./PrivateRoute";

const myCreatedRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/addproduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/mycart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch("https://automotive-gearup-server.vercel.app/carts"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/cars/:brand",
        element: <BrandPage></BrandPage>,
        loader: ({ params }) =>
          fetch(
            `https://automotive-gearup-server.vercel.app/cars/${params.brand}`
          ),
      },
      {
        path: "/details/:id",
        element: (
          <PrivateRoute>
            <BrandDetails></BrandDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://automotive-gearup-server.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            {" "}
            <UpdateCar></UpdateCar>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://automotive-gearup-server.vercel.app/update/${params.id}`
          ),
      },
    ],
  },
]);

export default myCreatedRoute;
