import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const {_id, name, img, description, price, qty, supplier } = product;
  const navigate = useNavigate();
  const navigateToInventoryDetails= (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="border rounded-3xl shadow-lg bg-white">
      <div className="flex justify-center">
        <img className="w-4/5 me-6 p-2" src={img} alt="" />
      </div>
      <div className="bg-sky-200 hover:bg-sky-300 transition ease-out delay-150 duration-300 p-5 mt-1 rounded-lg">
        <h2 className="font-bold text-xl">{name}</h2>
        <p>
          <small>{description.slice(0, 50)}</small>
        </p>
        <h2 className="font-bold">$ {price}</h2>
        <h6> Quantity : {qty}</h6>
        <p>
          <small>Supplies: {supplier}</small>
        </p>
        <button
          onClick={()=>navigateToInventoryDetails(_id)}
          className="bg-amber-500 px-3 py-2 mt-2 rounded-3xl font-semibold"
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Product;
