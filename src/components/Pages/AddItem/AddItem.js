import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddItem = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState([]);
  const [description, setDescription] = useState([]);
  const [price, setPrice] = useState([]);
  const [qty, setQty] = useState([]);
  const [supplier, setSupplier] = useState([]);
  const [img, setImg] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = {
      email: user.email,
      name,
      img,
      description,
      price,
      qty,
      supplier,
    };
    console.log(item);
    //  post to backend

    fetch("https://agile-plains-67677.herokuapp.com/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        event.target.reset();
        toast("Add one item successfully");
      });
  };

  return (
    <div className="flex justify-center py-20 m-3">
      <form onSubmit={handleSubmit} className="w-3/4">
        <h3 className="text-center text-3xl">Add Item</h3>
        <input
          value={user.email}
          className="border-2 px-3 py-2 mb-3 mt-2 w-full"
          readOnly
        />
        <input
          className="border-2 px-3 py-2 mb-3 mt-2 w-full"
          onBlur={(e) => setName(e.target.value)}
          placeholder="Enter Product Name"
        />
        <br />
        <textarea
          className="border-2 px-3 py-2 mb-3 mt-2 w-full"
          onBlur={(e) => setDescription(e.target.value)}
          placeholder="Enter product description"
        />
        <br />
        <input
          className="border-2 px-3 py-2 mb-3 mt-2 w-full"
          placeholder="Enter product price"
          type="number"
          onBlur={(e) => setPrice(e.target.value)}
        />
        <br />
        <input
          className="border-2 px-3 py-2 mb-3 mt-2 w-full"
          type="number"
          onBlur={(e) => setQty(e.target.value)}
          placeholder="Enter product quantity"
        />
        <br />
        <input
          className="border-2 px-3 py-2 mb-3 mt-2 w-full"
          type="text"
          onBlur={(e) => setSupplier(e.target.value)}
          placeholder="Supplier name"
        />
        <br />
        <input
          className="border-2 px-3 py-2 mb-3 mt-2 w-full"
          type="text"
          onBlur={(e) => setImg(e.target.value)}
          placeholder="Enter photoURL"
        />
        <br />
        <div className="flex justify-center">
          <input
            type="submit"
            className="bg-sky-400 w-full py-2"
            value="Add Item"
          />
        </div>
      </form>
    </div>
  );
};

export default AddItem;
