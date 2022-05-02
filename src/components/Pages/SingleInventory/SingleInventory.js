import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useInventoryDetails from "../../Hooks/useInventoryDetails";

const SingleInventory = () => {
  const { id } = useParams();
  const [stock, setStock] = useState({});
  const [product] = useInventoryDetails(id);
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setStock(data);
      });
  });

  const handleDelivered = (event) => {
    event.preventDefault();
    const num = parseInt(stock.qty);
    const qty = num - 1;
    const updateItem = { qty };
    // sending data for decrease data by One Click
    // const url = `https://tranquil-escarpment-61810.herokuapp.com/item/${id}`;
    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateItem),
    })
      .then((res) => res.json())
      .then((data) => {
        setStock(data)
        console.log("success", data);
      });
  };
  const handleIncreateByInput = (event) => {
    event.preventDefault();
    const qty = stock.qty;
    const quantity = event.target.qty.value;
    const AddedQuantity = parseInt(quantity) + qty;
    console.log(AddedQuantity);
    setStock(AddedQuantity);
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
                  Quantity in Stock : {product.qty} Pcs
                </h2>
              </div>
              <div className="flex mt-5">
                <button
                  onClick={handleDelivered}
                  className="flex text-black bg-sky-500 border-0 py-2 px-6 focus:outline-none rounded"
                >
                  Delivered One
                </button>
                <form onSubmit={handleIncreateByInput}>
                  <input
                    onBlur={(event) => setStock(event.target.value)}
                    type="number"
                    name="qty"
                    className="border-2 w-14 text-center mx-3"
                    placeholder="Qty"
                  />
                  <input
                    className="flex mx-3 text-black bg-sky-500 border-0 py-2 px-6 focus:outline-none rounded"
                    type="submit"
                    value="Add"
                  />
                </form>
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
