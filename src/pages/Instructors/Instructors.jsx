import { useLoaderData } from "react-router-dom";
import InstructorsCard from "./InstructorsCard";
import { Helmet } from "react-helmet-async";

const Instructors = () => {
   const instructors = useLoaderData();

   return (
      <div>
         <Helmet>
            <title>Skill Up Camp - Instructors</title>
         </Helmet>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 pt-10 py-20" data-aos="zoom-in" data-aos-duration="1000">
            {
               instructors.map(instructor => <InstructorsCard
                  key={instructor._id}
                  instructor={instructor}
               ></InstructorsCard>)
            }
         </div>
      </div>
   );
};

export default Instructors;