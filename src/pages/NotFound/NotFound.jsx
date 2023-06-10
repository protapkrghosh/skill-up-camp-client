import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../../assets/404_Not-found.png"

const NotFound = () => {
   return (
      <div className="hero min-h-screen bg-sky-100 pb-10">
         <div className="hero-content text-center">
            <div>
               <div className='mb-8'>
                  <img src={image} alt="Page Not Found"/>
               </div>
               <h1 className="text-5xl font-bold">Oops! <br />Page not found</h1>
               <p className="py-6">The page you are looking for could not be found.</p>
               <Link to="/" className="btn btn-outline border-cyan-500 hover:border-cyan-800 hover:bg-[#06a5c5]"> <FaArrowLeft className='mr-2' /> Back to Home</Link>
            </div>
         </div>
      </div>
   );
};

export default NotFound;