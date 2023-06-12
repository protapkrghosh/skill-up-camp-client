import { FcGoogle } from "react-icons/fc";
import photo from "../../assets/register.gif"
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const [passwordShown, setPasswordShown] = useState(false);
   const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);

   const { registerUser, updateUserProfile, googleSign, logOut } = useContext(AuthContext);
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";
   const [error, setError] = useState('');

   const togglePassword = () => {
      setPasswordShown(!passwordShown);
   };

   const toggleConfirmPassword = () => {
      setConfirmPasswordShown(!confirmPasswordShown);
   };

   const onSubmit = data => {
      registerUser(data.email, data.password)
         .then(result => {
            updateUserProfile(data.name, data.photo)
               .then(() => { })
               .catch(error => { console.log(error) })

            toast.success('Registration successful')
            reset();
         })
         .catch(error => {
            setError(error.message);
         })
   };

   const handleGoogleSignIn = () => {
      googleSign()
         .then(() => {
            navigate(from, { replace: true });
         })
         .catch(error => setError(error.message))
   };

   return (
      <div>
         <Helmet>
            <title>Register | Skill Up Camp</title>
         </Helmet>

         <div className="hero min-h-screen pb-10 pt-32">
            <div className="hero-content flex-col lg:flex-row">
               <div className="md:w-1/2 lg:text-left md:mr-10">
                  <img src={photo} alt="" className="w-[900px]" />
               </div>

               <div className="card md:w-1/2 max-w-sm border rounded-md bg-base-200">
                  <h2 className='text-4xl text-stone-700 text-center font-bold mt-5'>Register</h2>
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input {...register("name", { required: true })} type="text" placeholder="Your Name" className="input input-bordered rounded-md" />
                        {errors.name && <small className="text-rose-600 font-semibold">Name is required</small>}
                     </div>

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: true })} type="email" placeholder="Email" className="input input-bordered rounded-md" />
                        {errors.email && <small className="text-rose-600 font-semibold">Email is required</small>}
                     </div>

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <div className="flex justify-center items-center">
                           <input {...register("password", {
                              required: true,
                              minLength: 6,
                              maxLength: 10,
                              pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%*])/
                           })} type={passwordShown ? "text" : "Password"} placeholder="Password" className="input input-bordered rounded-md w-full" />

                           <span onClick={togglePassword} className="absolute right-14 cursor-pointer text-[18px]">{passwordShown ? <FaRegEye /> : <FaRegEyeSlash />}</span>
                        </div>

                        {errors.password?.type === 'required' && <small className="text-rose-500 font-semibold">Password is required</small>}
                        {errors.password?.type === 'minLength' && <small className="text-rose-500 font-semibold">Password must be 6 characters</small>}
                        {errors.password?.type === 'maxLength' && <small className="text-rose-500 font-semibold">Password must be 10 characters</small>}
                        {errors.password?.type === 'pattern' && <small className="text-rose-500 font-semibold">Password must have one uppercase, lowercase, number and special characters</small>}
                     </div>

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Confirm Password</span>
                        </label>
                        <div className="flex justify-center items-center">
                           <input {...register("confirmPassword", { required: true })} type={confirmPasswordShown ? "text" : "Password"} placeholder="Confirm Password" className="input input-bordered rounded-md w-full" />

                           <span onClick={toggleConfirmPassword} className="absolute right-14 cursor-pointer text-[18px]">{confirmPasswordShown ? <FaRegEye /> : <FaRegEyeSlash />}</span>
                        </div>
                        {errors.confirmPassword && <small className="text-rose-600 font-semibold">Confirm Password is required</small>}
                     </div>

                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Photo URL</span>
                        </label>
                        <input {...register("photo", { required: true })} type="text" placeholder="https://photo.jpg" className="input input-bordered rounded-md" />
                        {errors.photo && <small className="text-rose-600 font-semibold">Photo is required</small>}
                     </div>

                     <div className="form-control mt-6">
                        <input type="submit" value="Register" className="btn bg-[#00b4d8] hover:bg-[#06a5c5] capitalize text-[17px] rounded-md" />
                        <ToastContainer />
                        <button onClick={handleGoogleSignIn} className="btn btn-outline border-cyan-500 hover:border-cyan-800 hover:bg-[#06a5c5] rounded-md text-[16px] capitalize mt-5"><FcGoogle className='mr-2 text-2xl' /> Sign in with Google</button>

                        <small className='text-center mt-2'>Already have an account? <Link to="/login" className='text-[#00b4d8] font-semibold'>Login</Link></small>
                     </div>
                  </form>
                  <p className="text-red-500 text-center font-semibold -mt-5 mb-5">{error}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Register;