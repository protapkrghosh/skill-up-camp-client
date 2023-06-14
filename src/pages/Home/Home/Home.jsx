import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Testimonial from "../../Testimonial/Testimonial";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>Skill Up Camp - Home</title>
         </Helmet>

         <Banner />
         <Testimonial />
      </div>
   );
};

export default Home;