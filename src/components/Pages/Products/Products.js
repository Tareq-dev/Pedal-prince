import { useNavigate } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import Product from "../Product/Product";

const Products = () => {
  const [products] = useProducts([]);
  const navigate = useNavigate();

  return (
    <div className="py-10 bg-slate-100">
      <h1 className="text-center text-3xl">Our Products</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 m-5 p-5 gap-5">
        {products.slice(0, 6).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/login")}
          className="border border-black px-3 py-2 rounded-lg hover:bg-black hover:text-white font-semibold duration-1000"
        >
          See more products
        </button>
      </div>
    </div>
  );
};

export default Products;
