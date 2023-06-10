import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/skill-up-camp.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const NavBar = () => {
   const { users, userLogOut } = useContext(AuthContext)

   const handleLogOut = () => {
      userLogOut()
         .then()
         .catch((error) => {
            console.log(error)
         });
   }

   const navItems = <>
      <NavLink to="/" className='text-[18px] mr-5' style={({ isActive, isPending }) => {
         return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#06a5c5", };
      }}> Home </NavLink>

      <NavLink to="/instructors" className='text-[18px] mr-5' style={({ isActive, isPending }) => {
         return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#06a5c5", };
      }}>  Instructors </NavLink>

      <NavLink to="/classes" className='text-[18px] mr-5' style={({ isActive, isPending }) => {
         return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#06a5c5", };
      }}>  Classes </NavLink>

      {users && <>
         <NavLink to="/dashboard" className='text-[18px] mr-5' style={({ isActive, isPending }) => {
            return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#06a5c5", };
         }}> Dashboard </NavLink>
      </>}
   </>

   return (
      <div>
         <div className="navbar bg-base-100 border-b-2 shadow-sm">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                     {navItems}
                  </ul>
               </div>
               <Link to="/"><img src={logo} alt="Logo" className="w-16" /></Link>
               <Link to="/" className="text-2xl font-bold ml-2">Skill Up</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1">
                  {navItems}
               </ul>
            </div>

            <div className="navbar-end">

               {users &&
                  <div className="avatar online rounded-full ring mr-3">
                     <div className="w-10 rounded-full">
                        <img src={users?.photoURL} />
                     </div>
                  </div>
               }


               {users ?
                  <button onClick={handleLogOut} className='btn btn-outline border-[#00b4d8] hover:border-cyan-700 hover:bg-[#06a5c5] rounded-md capitalize text-[16px]'>Log Out</button> :
                  <Link to="/login">
                     <button className='btn btn-outline border-[#00b4d8] hover:border-cyan-700 hover:bg-[#06a5c5] rounded-md capitalize text-[16px]'>Log In</button>
                  </Link>
               }

            </div>
         </div>
      </div>
   );
};

export default NavBar;