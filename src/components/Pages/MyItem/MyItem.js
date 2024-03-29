import React, { useEffect, useState } from "react";
import auth from "./../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { Navigate } from "react-router-dom";
import axiosSecret from "../../../API/axiosSecret";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const email = user?.email;
      const url = `https://pedal-prince.onrender.com/myproducts?email=${email}`;
      try {
        const { data } = await axiosSecret.get(url, {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setItems(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          Navigate("/login");
        }
      }
    };
    getItems();
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      //Delete from DB

      fetch(`https://pedal-prince.onrender.com/products/${id}`, {
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
    <div className="py-14 px-4">
      <h2 className="md:text-3xl mb-2 text-center">
        {user.email} Added : {items.length} {items.length === 1 ? "item" : "items"}
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
