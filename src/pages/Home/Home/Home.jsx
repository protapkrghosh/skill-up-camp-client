import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>Skill Up Camp</title>
         </Helmet>

         <Banner />
      </div>
   );
};

export default Home;