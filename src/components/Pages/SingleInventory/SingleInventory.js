import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useInventoryDetails from "../../Hooks/useInventoryDetails";

const SingleInventory = () => {
  const { id } = useParams();
  const [product] = useInventoryDetails(id);
  const [count, setCount] = useState(20);
  const [quantity, setQuantity] = useState(1);
  if (count < 1) {
   setCount(0);
  }
  const handleIncreateByInput = () => {
    const qty = quantity;
    const addedQty = parseInt(qty) + count;
    setCount(addedQty);
  };
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-14 mx-auto">
        <div className="lg:w-full mx-auto flex flex-wrap">
          <div className="lg:w-1/2  lg:h-auto h-80">
            <img
              alt="ecommerce"
              className="w-full lg:h-auto h-80 object-cover object-center rounded"
              src={product.img}
            />
          </div>
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 mb-3 tracking-widest">
              Supplier: {product.supplier}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.name}
            </h1>

            <p className="leading-relaxed">{product.description}</p>
            <div className="mt-4 pb-5 border-b-2 border-gray-100 mb-5">
              <span className="title-font mb-6 block font-medium text-2xl text-gray-900">
                $ {product.price}
              </span>
              <div className="flex mb-4">
                <h2
                  className="text-xl text-sky-600 font-semibold"
                  name="number"
                >
                  Quantity in Stock : {count} Pcs
                </h2>
              </div>
              <div className="flex mt-5">
                <button
                  onClick={() => setCount(count - 1)}
                  className="flex text-black bg-sky-500 border-0 py-2 px-6 focus:outline-none rounded"
                >
                  Delivered One
                </button>
                <input
                  onBlur={(event) => setQuantity(event.target.value)}
                  type="text"
                  name="qty"
                  className="border-2 w-14 text-center mx-3"
                  placeholder="Qty"
                />
                <button
                  onClick={handleIncreateByInput}
                  className="flex mx-3 text-black bg-sky-500 border-0 py-2 px-6 focus:outline-none rounded"
                >
                  Add Qty
                </button>
              </div>
            </div>
            <div className="flex">
              <Link
                to="/inventory"
                className="flex mx-auto  text-black bg-sky-500 border-0 py-2 px-6 focus:outline-none rounded"
              >
                Go to Inventory
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleInventory;
