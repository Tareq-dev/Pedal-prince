import { useEffect, useState } from "react";

const useInventoryDetails = (id) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    // const url = `https://pure-chamber-87771.herokuapp.com/service/${id}`;
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return  [product, setProduct] ;
};

export default useInventoryDetails;
