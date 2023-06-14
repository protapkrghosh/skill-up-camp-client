import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Testimonial = () => {
   return (
      <div className='bg-slate-100 py-14 px-5'>
         <div>
            <h6 className='font-medium text-center'>What we offer for you</h6>
            <h1 className='text-6xl font-medium text-center mb-14'> <span className='text-orange-500'>New</span> Products</h1>
         </div>
         <div className='flex items-center justify-center container mx-auto'>
            <div className='grid gap-6 grid-cole-1 lg:grid-cols-2'>

               <div className='rounded-xl shadow-xl bg-white'>
                  <div className='p-5 flex flex-col'>
                     <div className='rounded-xl overflow-hidden flex'>
                        <div className='w-[25%]'>
                           <img className='m-auto' src="https://rb.gy/py18s" alt="" />
                        </div>
                        <div className='w-[75%] ml-8'>
                           <h1 className='text-2xl font-medium mb-6 text-green-500'>Pet Sitting</h1>
                           <p className='font-medium'>Event time you check your cat or pet, we will definitely check and groom your animal at the some time</p>
                           <div className='flex'>
                              <p className='mt-5 font-bold'>Read More</p>
                              <p className='mt-6 ml-3'><FaArrowRight></FaArrowRight></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className='rounded-xl shadow-xl bg-white'>
                  <div className='p-5 flex flex-col'>
                     <div className='rounded-xl overflow-hidden flex'>
                        <div className='w-[25%]'>
                           <img className='m-auto' src="https://rb.gy/utjsm" alt="" />
                        </div>
                        <div className='w-[75%] ml-8'>
                           <h1 className='text-2xl font-medium mb-6 text-green-500'>Pet Grooming</h1>
                           <p className='font-medium'>Event time you check your cat or pet, we will definitely check and groom your animal at the some time</p>
                           <div className='flex'>
                              <p className='mt-5 font-bold'>Read More</p>
                              <p className='mt-6 ml-3'><FaArrowRight></FaArrowRight></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className='rounded-xl shadow-xl bg-white'>
                  <div className='p-5 flex flex-col'>
                     <div className='rounded-xl overflow-hidden flex'>
                        <div className='w-[25%]'>
                           <img className='m-auto' src="https://rb.gy/k5ho8" alt="" />
                        </div>
                        <div className='w-[75%] ml-8'>
                           <h1 className='text-2xl font-medium mb-6 text-green-500'>Pet Adoption</h1>
                           <p className='font-medium'>Event time you check your cat or pet, we will definitely check and groom your animal at the some time</p>
                           <div className='flex'>
                              <p className='mt-5 font-bold'>Read More</p>
                              <p className='mt-6 ml-3'><FaArrowRight></FaArrowRight></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className='rounded-xl shadow-xl bg-white'>
                  <div className='p-5 flex flex-col'>
                     <div className='rounded-xl overflow-hidden flex'>
                        <div className='w-[25%]'>
                           <img className='m-auto' src="https://rb.gy/ig0pg" alt="" />
                        </div>
                        <div className='w-[75%] ml-8'>
                           <h1 className='text-2xl font-medium mb-6 text-green-500'>Natural Products</h1>
                           <p className='font-medium'>Event time you check your cat or pet, we will definitely check and groom your animal at the some time</p>
                           <div className='flex'>
                              <p className='mt-5 font-bold'>Read More</p>
                              <p className='mt-6 ml-3'><FaArrowRight></FaArrowRight></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className='rounded-xl shadow-xl bg-white'>
                  <div className='p-5 flex flex-col'>
                     <div className='rounded-xl overflow-hidden flex'>
                        <div className='w-[25%]'>
                           <img className='m-auto' src="https://rb.gy/wpsde" alt="" />
                        </div>
                        <div className='w-[75%] ml-8'>
                           <h1 className='text-2xl font-medium mb-6 text-green-500'>Pet Vaccination</h1>
                           <p className='font-medium'>Event time you check your cat or pet, we will definitely check and groom your animal at the some time</p>
                           <div className='flex'>
                              <p className='mt-5 font-bold'>Read More</p>
                              <p className='mt-6 ml-3'><FaArrowRight></FaArrowRight></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className='rounded-xl shadow-xl bg-white'>
                  <div className='p-5 flex flex-col'>
                     <div className='rounded-xl overflow-hidden flex'>
                        <div className='w-[25%]'>
                           <img className='m-auto' src="https://rb.gy/11ec6" alt="" />
                        </div>
                        <div className='w-[75%] ml-8'>
                           <h1 className='text-2xl font-medium mb-6 text-green-500'>Pet Foods</h1>
                           <p className='font-medium'>Event time you check your cat or pet, we will definitely check and groom your animal at the some time</p>
                           <div className='flex'>
                              <p className='mt-5 font-bold'>Read More</p>
                              <p className='mt-6 ml-3'><FaArrowRight></FaArrowRight></p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Testimonial;