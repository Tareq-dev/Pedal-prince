import React from "react";
import { Link } from "react-router-dom";

const Factory = () => {
  return (
    <section className="text-gray-600 body-font">
    <h1 className="text-4xl text-center mt-6">Our Factory</h1>
      <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://pbs.twimg.com/media/EmCJoY6UcAEq0FN.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-10 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Before we sold out
          </h1>
          <p className="mb-8 leading-relaxed text-justify">
          Pedal-prince shops is your destination for the latest bikes, Electronics bikes and accessories, Bontrager cycling gear, service and tune-ups for bikes of any brand, and professional bike fit services through Trek Precision Fit. Whether you visit a pedal-owned shop or one of our outstanding independent partners, you’ll find amazing service, knowledgeable staff and top-quality bikes and gear that you’ll enjoy for years to come. Use our interactive retailer locator to find all the Pedal and Prince bike shops near you.
          </p>
          <div className="flex justify-center">
            <Link to="/factory" className="text-white bg-sky-500 border-0 py-2 px-6 rounded text-lg">
             Visit factory
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Factory;
