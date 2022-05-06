import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center items-center">
        <img className="w-3/4" src="https://i.ibb.co/RPk6HnV/404.jpg" alt="" />
      </div>
      <div className="flex justify-center items-center">
        <div>
        <h1 className="text-5xl text-red-500 mb-5">Oops!</h1>
        <p>Error 404- Page Not Found</p>
        <p>The page you requested could not be found.</p>
        <button className="bg-sky-400 rounded-md px-3 py-2 mt-5"><Link to="/">Go back to the homepage</Link></button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
