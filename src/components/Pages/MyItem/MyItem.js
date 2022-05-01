import axios from "axios";
import React, { useEffect, useState } from "react";
import auth from "./../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const MyItem = () => {
  const [user] = useAuthState(auth);
  const [item, setItem] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      const email = user.email;
      const url = `http://localhost:5000/products?email=${email}`;
      const { data } = await axios.get(url);
      setItem(data);
    };
    getItems();
  }, [user.email]);

  return (
    <div className="py-24">
      <h2 className="text-3xl text-center">{user.email} Added : {item.length}</h2>
    </div>
  );
};

export default MyItem;
