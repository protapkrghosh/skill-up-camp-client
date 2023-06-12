import { FcGoogle } from "react-icons/fc";
import photo from "../../assets/login.gif"
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const [passwordShown, setPasswordShown] = useState(false);

   const { googleSign, signIn } = useContext(AuthContext);
   const [error, setError] = useState('');
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";

   const togglePassword = () => {
      setPasswordShown(!passwordShown);
   };

   const onSubmit = (data) => {
      signIn(data.email, data.password)
         .then((result) => {
            const user = result.user;
            // console.log(user);
            navigate(from, { replace: true });
         })
         .catch(error => setError(error.message))
   }

   const handleGoogleSignIn = () => {
      googleSign()
         .then(() => {
            navigate(from, { replace: true });
         })
         .catch(error => setError(error.message))
   }

   return (
      <div>
         <Helmet>
            <title>Login | Skill Up Camp</title>
         </Helmet>

         <div className="hero min-h-screen pt-20">
            <div className="hero-content flex-col lg:flex-row">
               <div className="md:w-1/2 lg:text-left md:mr-10">
                  <img src={photo} alt="" className="w-[700px]" />
               </div>

               <div className="card md:w-1/2 max-w-sm border rounded-md bg-base-200">
                  <h2 className='text-4xl text-stone-700 text-center font-bold mt-5'>Login</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered rounded-md" />
                        {errors.email && <small className="text-rose-600 font-semibold">Email field is required</small>}
                     </div>

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <div className="flex justify-center items-center">
                           <input {...register("password", { required: true })} type={passwordShown ? "text" : "password"} placeholder="Password" className="input input-bordered rounded-md w-full" />
                           <span onClick={togglePassword} className="absolute right-14 cursor-pointer text-[18px]">{passwordShown ? <FaRegEye /> : <FaRegEyeSlash />}</span>
                        </div>
                        {errors.password && <small className="text-rose-600 font-semibold">Password field is required</small>}
                     </div>

                     <div className="form-control mt-6">
                        <input type="submit" value="Login" className="btn bg-[#00b4d8] hover:bg-[#06a5c5] capitalize text-[17px] rounded-md" />
                        <ToastContainer />

                        <button onClick={handleGoogleSignIn} className="btn btn-outline border-cyan-500 hover:border-cyan-800 hover:bg-[#06a5c5] rounded-md text-[16px] capitalize mt-5"><FcGoogle className='mr-2 text-2xl' /> Sign in with Google</button>
                     </div>
                     <small className='text-center mt-2'>Don&lsquo;t have account? <Link to="/register" className='text-[#00b4d8] font-semibold'>Register</Link></small>
                  </form>
                  <p className="text-red-500 text-center font-semibold -mt-5 mb-5">{error}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;