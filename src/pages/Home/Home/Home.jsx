import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Testimonial from "../../Testimonial/Testimonial";
import FeaturedInstructor from "../../FeaturedInstructor/FeaturedInstructor";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>Skill Up - Home</title>
         </Helmet>

         <Banner />
         <FeaturedInstructor />
         <Testimonial />
      </div>
   );
};

export default Home;