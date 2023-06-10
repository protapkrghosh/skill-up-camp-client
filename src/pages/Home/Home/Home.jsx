import { Helmet } from "react-helmet-async";

const Home = () => {
   return (
      <div>
         <Helmet>
            <title>Skill Up Camp</title>
         </Helmet>

         <h1>This is Home page</h1>
      </div>
   );
};

export default Home;