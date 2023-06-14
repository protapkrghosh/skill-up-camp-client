import { useEffect, useState } from "react";
import { BsBookmarkCheckFill, BsClockFill } from "react-icons/bs";
import { MdPeopleAlt } from "react-icons/md";

const FeaturedClass = () => {
   const [classes, setClasses] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      fetch('https://skill-up-camp-server-protap9ghosh.vercel.app/featured_classes')
         .then((res) => res.json())
         .then((data) => {
            setClasses(data);
            setLoading(false);
         })
   }, [])

   return (
      <div>
         <h2 className="text-4xl text-center font-mono">Popular Classes</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 pt-10 py-20">
            {
               classes.map(classes => <div key={classes._id} className="card w-96 bg-base-100 shadow-xl mx-auto rounded-md border" data-aos="zoom-in" data-aos-duration="1000">
                  <figure><img src={classes.image} alt="Shoes" /></figure>
                  <div className="card-body">
                     <h2 className="card-title text-[24px]">{classes.name}</h2>
                     <p className="text-[17px] text-slate-500">Instructor: {classes.instructor}</p>

                     <div className="flex items-center">
                        <MdPeopleAlt className="text-xl text-slate-400 mr-2" />
                        <p className="text-[17px] text-slate-500">Enrolled Students: {classes.enrolled_students}</p>
                     </div>

                     <div className="flex items-center">
                        <BsClockFill className="text-xl text-slate-400 mr-2" />
                        <p className="text-[17px] text-slate-500">Course Time: {classes.course_time}</p>
                     </div>

                     <div className="flex items-center">
                        <BsBookmarkCheckFill className="text-xl text-slate-400 mr-2" />
                        <p className="text-[17px] text-slate-500">Available Sets: {classes.available_seats}</p>
                     </div>

                     <div className="card-actions justify-between">
                        <p className="text-2xl font-semibold">${classes.price}</p>
                        <div className="btn btn-sm badge-outline rounded-md border-[#00b4d8] hover:border-cyan-600 hover:bg-[#00b4d8]">Select</div>
                     </div>
                  </div>
               </div>)
            }
         </div>
      </div>
   );
};

export default FeaturedClass;