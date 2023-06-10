import { Outlet } from "react-router-dom";
import NavBar from "../shared/NavBar/NavBar";
import Footer from "../shared/Footer/Footer";

const LoginLayout = () => {
   return (
      <div>
         <NavBar />
         <Outlet />
         <Footer />
      </div>
   );
};

export default LoginLayout;