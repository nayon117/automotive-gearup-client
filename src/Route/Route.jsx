import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Gallery from "../pages/Gallery/Gallery";
import Blogs from "../pages/Blogs/Blogs";
import Contact from "../pages/Contact/Contact";
import CardDetails from "../pages/DetailsPage/CardDetails";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Dashboard/Common/Profile";
import OrderList from "../pages/Dashboard/User/OrderList";
import WishList from "../pages/Dashboard/User/WishList";
import AddCar from "../pages/Dashboard/Seller/AddCar";
import SellerRequest from "../pages/Dashboard/Admin/SellerRequest";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import AllCar from "../pages/Dashboard/Admin/AllCar";
import ManageCars from "../pages/Dashboard/Seller/ManageCars";
import UpdateCar from "../pages/Dashboard/Seller/UpdateCar";

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
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/details/:id",
        element: <CardDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/cars/${params.id}`),
      },
    ],
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
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      // common routes
      {
        path: "profile",
        element: <Profile />,
      },
      // user routes
      {
        path: "order-list",
        element: <OrderList />,
      },
      {
        path: "wish-list",
        element: <WishList />,
      },
      // seller routes
      {
        path: "add-car",
        element: <AddCar />,
      },
      {
        path: "manage-car",
        element: <ManageCars />,
      },
      {
        path: "update-car/:id",
        element: <UpdateCar />,
      },
      // Admin routes
      {
        path: "seller-request",
        element: <SellerRequest />,
      },
      {
        path: "manage-users",
        element: <ManageUsers />,
      },
      {
        path: "all-cars",
        element: <AllCar />,
      },
    ],
  },
]);

export default myCreatedRoute;
