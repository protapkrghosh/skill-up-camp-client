import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Testimonial from "../../Testimonial/Testimonial";
import FeaturedInstructor from "../../FeaturedInstructor/FeaturedInstructor";
import FeaturedClass from "../../FeaturedClass/FeaturedClass";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>Skill Up - Home</title>
         </Helmet>

         <Banner />
         <FeaturedInstructor />
         <FeaturedClass />
         <Testimonial />
      </div>
   );
};

export default Home;