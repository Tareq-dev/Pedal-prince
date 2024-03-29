import { useEffect, useState } from "react";

const useInventoryDetails = (id) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `https://pedal-prince.onrender.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  return [product, setProduct];
};

export default useInventoryDetails;
