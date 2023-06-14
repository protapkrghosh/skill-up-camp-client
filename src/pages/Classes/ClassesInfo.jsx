import { MdPeopleAlt } from "react-icons/md"
import { BsClockFill, BsBookmarkCheckFill } from "react-icons/bs"

const ClassesInfo = ({ classesInfo }) => {
   const { image, name, instructor, enrolled_students, course_time, available_seats, price } = classesInfo;

   return (
      <div className="card w-96 bg-base-100 shadow-xl mx-auto rounded-md border" data-aos="zoom-in" data-aos-duration="1000">
         <figure><img src={image} alt="Shoes" /></figure>
         <div className="card-body">
            <h2 className="card-title text-[24px]">{name}</h2>
            <p className="text-[17px] text-slate-500">Instructor: {instructor}</p>

            <div className="flex items-center">
               <MdPeopleAlt className="text-xl text-slate-400 mr-2"/>
               <p className="text-[17px] text-slate-500">Enrolled Students: {enrolled_students}</p>
            </div>

            <div className="flex items-center">
               <BsClockFill className="text-xl text-slate-400 mr-2"/>
               <p className="text-[17px] text-slate-500">Course Time: {course_time}</p>
            </div>

            <div className="flex items-center">
               <BsBookmarkCheckFill className="text-xl text-slate-400 mr-2"/>
               <p className="text-[17px] text-slate-500">Available Sets: {available_seats}</p>
            </div>

            <div className="card-actions justify-between">
               <p className="text-2xl font-semibold">${price}</p>
               <div className="btn btn-sm badge-outline rounded-md border-[#00b4d8] hover:border-cyan-600 hover:bg-[#00b4d8]">Select</div>
            </div>
         </div>
      </div>
   );
};

export default ClassesInfo;