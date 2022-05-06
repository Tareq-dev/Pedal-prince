import axios from "axios";
import React, { useEffect, useState } from "react";
import auth from "./../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const email = user?.email;
      const url = `https://agile-plains-67677.herokuapp.com/myproducts?email=${email}`;
      const { data } = await axios.get(url);
      setItems(data);
    };
    getItems();
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      // const url = `https://pure-chamber-87771.herokuapp.com/service/${id}`;

      //Delete from DB

      fetch(`https://agile-plains-67677.herokuapp.com//products/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((product) => product._id !== id);
          setItems(remaining);
        });
    }
  };
  return (
    <div className="py-14">
      <h2 className="text-3xl mb-2 text-center">
        {user.email} Added : {items.length}
      </h2>
      <hr />
      {items.map((item) => (
        <div
          key={item._id}
          className="bg-white sm:w-full md:w-1/2 mx-auto mt-2 h-36 py-5 rounded shadow-md flex justify-evenly text-grey-darkest"
        >
          <img
            className="h-28 flex-auto w-32 rounded-l-sm p-2"
            src={item.img}
            alt=""
          />
          <div className="flex-auto w-64">
            <h3 className="mb-1 text-grey-darkest font-bold">{item.name}</h3>
            <div className="text-xs flex items-center mb-2">
              <i className="fas fa-map-marker-alt mr-1 text-grey-dark"></i>
              Supplier : {item.supplier}
            </div>
            <span className="text-xl text-grey-darkest">${item.price}</span>
            <div className="flex items-center mt-1">
              <div className="pr-2 text-xs">
                <i className="fas fa-wifi text-green"></i> Quantity :{item.qty}
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => handleDelete(item._id)}
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

export default MyItem;
