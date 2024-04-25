import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "../App.css";
import Navbar from "../components/shared/Navber";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className="min-h-screen container mx-auto px-4 md:px-8 lg:px-16">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster></Toaster>
    </div>
  );
};

export default MainLayout;
