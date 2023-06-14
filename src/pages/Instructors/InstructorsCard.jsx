
const InstructorsCard = ({ instructor }) => {
   const { image, name, email } = instructor;

   return (
      <div>
         <div className="card w-72 bg-base-100 shadow-md border rounded-md mx-auto">
            <figure className="px-10 pt-10">
               <img src={image} alt="Shoes" className="rounded-full w-40 h-40" />
            </figure>
            <div className="card-body items-center text-center">
               <h2 className="card-title">{name}</h2>
               <p>{email}</p>
            </div>
         </div>
      </div>
   );
};

export default InstructorsCard;