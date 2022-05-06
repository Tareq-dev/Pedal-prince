import React from "react";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";

const ManageItem = () => {
  const [products, setProducts] = useProducts();

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {

      //Delete from DB

      fetch(`https://agile-plains-67677.herokuapp.com/products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };
  return (
    <div>
      <h2 className="text-2xl text-center mt-5 mb-5 bg-sky-300 py-3">
        Manage Item : {products.length}
      </h2>
      <div className="flex justify-center">
        <Link
          className="flex border border-b-4 border-black rounded-lg hover:bg-sky-300 py-1 px-2 mb-10"
          to="/addItem"
        >
          <img
            className="w-14"
            src="https://i.ibb.co/2qR7DwV/addicon.png"
            alt=""
          />
          <span className="mt-1">Add Item</span>
        </Link>
      </div>
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-white sm:w-full md:w-1/2 mx-auto mt-2 h-50 py-5 rounded shadow-md flex card text-grey-darkest"
        >
          <img
            className="w-1/2 h-48 rounded-l-sm p-2"
            src={product.img}
            alt=""
          />
          <div className="w-full flex flex-col mx-6">
            <div className="p-4 pb-0 flex-1">
              <h3 className="mb-1 text-grey-darkest font-bold">
                {product.name}
              </h3>
              <div className="text-xs flex items-center mb-2">
                <i className="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
                Supplier : {product.supplier}
              </div>
              <span className="text-xl text-grey-darkest">
                ${product.price}
              </span>
              <div className="flex items-center mt-1">
                <div className="pr-2 text-xs">
                  <i className="fas fa-wifi text-green"></i> Quantity :{" "}
                  {product.qty}
                </div>
              </div>
            </div>
            <button
              onClick={() => handleDelete(product._id)}
              className="rounded py-1 bg-red-500 w-14 mb-3 mx-4"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManageItem;
