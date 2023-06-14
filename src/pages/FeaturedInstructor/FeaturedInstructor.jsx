import { useEffect, useState } from "react";

const FeaturedInstructor = () => {
   const [instructors, setInstructors] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      fetch('http://localhost:5000/instructors')
         .then((res) => res.json())
         .then((data) => {
            setInstructors(data);
            setLoading(false);
         })
   }, [])

   return (
      <div>
         <h1 className="text-4xl text-center font-mono mt-16">Our Featured Instructor</h1>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 pt-10 py-20" data-aos="zoom-in" data-aos-duration="1000">
            {
               instructors.map(instructor => <div key={instructor._id} className="card w-72 bg-base-100 shadow-md border rounded-md mx-auto">
                  <figure className="px-10 pt-10">
                     <img src={instructor.image} alt="Shoes" className="rounded-full w-40 h-40" />
                  </figure>
                  <div className="card-body items-center text-center">
                     <h2 className="card-title">{instructor.name}</h2>
                     <p>{instructor.email}</p>
                  </div>
               </div>)
            }
         </div>
      </div>
   );
};

export default FeaturedInstructor;