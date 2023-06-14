import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home/Home";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import Instructors from "../pages/Instructors/Instructors";
import Classes from "../pages/Classes/Classes";

const router = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>
         }
      ]
   },
   {
      path: "/",
      element: <LoginLayout></LoginLayout>,
      children: [
         {
            path: "login",
            element: <Login></Login>
         },
         {
            path: "register",
            element: <Register></Register>
         },
         {
            path: "instructors",
            element: <Instructors></Instructors>,
            loader: () => fetch('http://localhost:5000/instructors')
         },
         {
            path: "classes",
            element: <Classes></Classes>,
            loader: () => fetch('http://localhost:5000/classes')
         }
      ],
   },
   {
      path: "*",
      element: <NotFound></NotFound>
   }
]);

export default router;