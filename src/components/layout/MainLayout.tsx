import { Outlet } from "react-router-dom";
import Navbar from "../ui/Navbar/Navbar";
import Footer from "../ui/Footer/Footer";
import ScrollToTop from "../ui/ScrollToTop/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="font-barlow font-medium">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
