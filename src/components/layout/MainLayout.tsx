import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar/Navbar";
import Footer from "../ui/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="font-barlow font-medium">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
