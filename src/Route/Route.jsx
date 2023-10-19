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
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/mycart",
        element: <MyCart></MyCart>,
        loader:()=>fetch('http://localhost:5000/carts')
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
            `http://localhost:5000/cars/${params.brand}`
          ),
      },
      {
        path: "/details/:id",
        element: <BrandDetails></BrandDetails>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/details/${params.id}`
          ),
      },
      {
        path: "/update/:id",
        element: <UpdateCar></UpdateCar>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/update/${params.id}`
          ),
      },
    ],
  },
]);

export default myCreatedRoute;
