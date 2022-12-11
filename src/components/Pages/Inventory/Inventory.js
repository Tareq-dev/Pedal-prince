import React from "react";
import useProducts from "../../Hooks/useProducts";
import Product from "../Product/Product";

const Inventory = () => {
  const [products] = useProducts([]);
  return (
    <div className="py-10 bg-slate-100">
      <h1 className="text-center font-bold text-3xl">Our Products</h1>
      <div className="flex justify-center">
        <input
          className="border w-1/3 px-4 py-2 rounded-l-lg"
          type="text"
          placeholder="search..."
        />
        <button className="bg-sky-500 px-4 py-2 font-semibold rounded-r-lg text-white">
          Search
        </button>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 m-3 md:m-5 md:p-5 gap-5">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Inventory;
