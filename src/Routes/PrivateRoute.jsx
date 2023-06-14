import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Circles } from 'react-loader-spinner';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children }) => {
   const location = useLocation();
   const { users, loading } = useContext(AuthContext);

   if (loading) {
      return (
         <div className='min-h-screen bg-slate-200'>
            <Circles
               height="90"
               width="100%"
               color="#00b4d8"
               ariaLabel="circles-loading"
               wrapperStyle={{}}
               wrapperClass=""
               visible={true}
            />
         </div>);
   }

   if (users) {
      return children;
   }

   return (
      <Navigate state={{ from: location }} to="/login" replace>
         {children}
      </Navigate>
   );
};

export default PrivateRoute;