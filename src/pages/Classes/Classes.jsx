import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import ClassesInfo from "./ClassesInfo";

const Classes = () => {
   const classes = useLoaderData();

   return (
      <div>
         <Helmet>
            <title>Skill Up Camp - Classes</title>
         </Helmet>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 pt-10 py-20">
            {classes.map(classesInfo => <ClassesInfo
               key={classesInfo._id}
               classesInfo={classesInfo}
            ></ClassesInfo>)}
         </div>
      </div>
   );
};

export default Classes;