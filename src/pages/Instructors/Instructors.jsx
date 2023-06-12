import Swal from "sweetalert2";

const Instructors = () => {
   const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const photo = form.photo.value;
      const newInstructor = { name, email, photo }

      // send toy data to the server
      fetch('http://localhost:5000/instructor', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(newInstructor)
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
         })

      // Image Upload
      // const image = form.image.files[0];
      // const formData = new FormData();
      // formData.append('image', image);
      // const url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_KEY}`

      // fetch(url, {
      //    method: 'POST',
      //    body: formData,
      // })
      //    .then(() => {

      //    })
      //    .catch((error) => console.log(error))
   };

   return (
      <div>
         <div className="min-h-screen bg-base-200">
            <h1 className="text-3xl text-center text-zinc-700 font-bold py-5">Add New instructors</h1>
            <div className="rounded-md w-full max-w-sm shadow-xl mx-auto bg-base-100">
               <form onSubmit={handleSubmit} className="card-body">
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Instructor Name</span>
                     </label>
                     <input type="text" name="name" placeholder="Name" required className="input input-bordered w-full" />
                  </div>

                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Instructor Email</span>
                     </label>
                     <input type="text" name="email" placeholder="Email" required className="input input-bordered w-full" />
                  </div>

                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Image</span>
                     </label>
                     <input type="text" name="photo" placeholder="Image URL" required className="input input-bordered w-full" />
                  </div>

                  {/* <div className="form-control mt-2">
                     <label htmlFor='image' className='block mb-2 text-sm'>
                        Select Image:
                     </label>
                     <input
                        required
                        type='file'
                        id='image'
                        name='image'
                        accept='image/*'
                        className="file:bg-gradient-to-b file:from-blue-400 file:to-blue-500 file:px-3 file:py-1 file:m-3 file:border-none file:rounded-full file:text-white file:cursor-pointer file:shadow-lg file:shadow-blue-600/50 bg-gradient-to-br from-slate-200 to-slate-300 text-zinc-600/80 rounded-full cursor-pointer shadow-xl shadow-gray-400/60"
                     />
                  </div> */}

                  <div className="form-control mt-6">
                     <input type="submit" value="Add Instructor" className="btn bg-[#00b4d8] hover:bg-[#06a5c5] capitalize text-[16px] text-white rounded-md" />
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Instructors;