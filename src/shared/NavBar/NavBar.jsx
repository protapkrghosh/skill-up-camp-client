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
         return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#006d77", };
      }}> Home </NavLink>

      <NavLink to="/all-toy" className='text-[18px] mr-5' style={({ isActive, isPending }) => {
         return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#006d77", };
      }}>  Instructors </NavLink>

      <NavLink to="/all-toy" className='text-[18px] mr-5' style={({ isActive, isPending }) => {
         return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#006d77", };
      }}>  Classes </NavLink>

      {users && <>
         <NavLink to="/add-toy" className='text-[18px] mr-5' style={({ isActive, isPending }) => {
            return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#006d77", };
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
                  <div className="avatar online">
                     <div className="w-10 rounded-full">
                        <img src={users?.photoURL} />
                     </div>
                  </div>
               }


               {users ?
                  <button onClick={handleLogOut} className='btn bg-zinc-500 border-none rounded-sm'>Log Out</button> :
                  <Link to="/login">
                     <button className='btn  bg-zinc-500 border-none rounded-sm'>Log In</button>
                  </Link>
               }

            </div>
         </div>
      </div>
   );
};

export default NavBar;