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
        element:<Gallery/>
      },
      {
        path:"/blogs",
        element:<Blogs/>
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path:"/details/:id",
        element:<CardDetails/>,
        loader:({params})=>fetch(`http://localhost:5000/cars/${params.id}`)
      }
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
]);

export default myCreatedRoute;
