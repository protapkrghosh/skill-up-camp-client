import { FaFacebook, FaLinkedin, FaMapMarkerAlt, FaMobileAlt, FaYoutube } from 'react-icons/fa';
import { AiOutlineMail } from "react-icons/ai";
import { FcGoogle } from 'react-icons/fc';

const Footer = () => {
   return (
      <footer>
         <div className="footer text-white p-20 bg-slate-700">
            <div className='gap-3'>
               <img className="h-24" src="https://i.ibb.co/2YKt3Zt/skill-up-camp.png" alt="" />
               <h1 className="text-2xl font-bold">Skill Up Camp</h1>

               <p className="font-medium">Magical Industries Ltd.<br />Providing reliable tech since 1996</p>
               <div className='flex items-center'>
                  <p className='mr-2 text-[19px]'><FaMapMarkerAlt></FaMapMarkerAlt></p>
                  <p>Uttra, Dhaka, Bangladesh</p>
               </div>
               <div className='flex items-center'>
                  <p className='mr-2 text-[19px]'><FaMobileAlt></FaMobileAlt></p>
                  <p>+0123456789</p>
               </div>
               <div className='flex items-center'>
                  <p className='mr-2 text-[19px]'><AiOutlineMail></AiOutlineMail></p>
                  <p>skillupcamp@gmail.com</p>
               </div>
            </div>

            <div className='gap-7'>
               <span className="footer-title">Services</span>
               <a className="link link-hover">My account</a>
               <a className="link link-hover">Login</a>
               <a className="link link-hover">Terms & Conditions</a>
               <a className="link link-hover">Promotional Offer</a>
               <a className="link link-hover">Order tracking</a>
            </div>

            <div className='gap-7'>
               <span className="footer-title">Company</span>
               <a className="link link-hover">About us</a>
               <a className="link link-hover">Contact</a>
               <a className="link link-hover">Blog</a>
               <a className="link link-hover">All Products</a>
               <a className="link link-hover">Locations Map</a>
            </div>

            <div className='gap-7'>
               <span className="footer-title">Ouick Links</span>
               <a className="link link-hover">Support</a>
               <a className="link link-hover">Helpline</a>
               <a className="link link-hover">Courese</a>
               <a className="link link-hover">About</a>
               <a className="link link-hover">Event</a>
            </div>

            <div className='gap-6'>
               <h1 className="footer-title">Newsletter</h1>
               <div>
                  <h5>Through this email you can communicate very well without any problem.</h5><br />
                  <div className="relative">
                     <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16 text-black" />
                     <button className="btn btn-info absolute top-0 right-0 rounded-l-none">Subscribe</button>
                  </div>
               </div>

               <div>
                  <h5 className='text-xl'>All Social Site</h5>
                  <div className='flex gap-6 text-3xl mt-3'>
                     <a href=""><FcGoogle></FcGoogle></a>
                     <a href=""><FaFacebook className='text-blue-500'></FaFacebook></a>
                     <a href=""><FaYoutube className='text-red-600'></FaYoutube></a>
                     <a href=""><FaLinkedin className='text-sky-600'></FaLinkedin></a>
                  </div>
               </div>

            </div>
         </div>

         <div className='footer-center p-4 bg-slate-300 text-base-content'>
            <p>Copyright © 2023 - All right reserved by Skill Up Camp</p>
         </div>
      </footer>
   );
};

export default Footer;