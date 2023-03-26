import React from "react";
import { useCart } from "../contexts/cart-context";
import { useProducts } from "../contexts/products-context";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const { setSearchProduct } = useProducts();
  const { cartList } = useCart();
  const navigate = useNavigate();

  return (
    <nav className="relative px-14 py-4 items-center border flex justify-between">
      <div className="flex gap-1 cursor-pointer" onClick={() => navigate("/")}>
        <h2 className="cursive">SHOP</h2>
        <span className="material-icons-outlined">local_convenience_store</span>
      </div>
      <div className="flex items-center px-2 py-1 rounded-md justify-between border min-w-[30%]">
        <input
          className="focus:outline-none min-w-[90%]"
          onChange={(e) => setSearchProduct(e.target.value.trim())}
        />
        <span className="material-icons-outlined">search</span>
      </div>
      <button className="flex gap-1" onClick={() => navigate("/cart")}>
        {cartList.length >= 1 && (
          <span className="absolute right-9 top-1 font-semibold bg-gray-200 px-[8px] rounded-full py-[2px] ">
            {cartList.length}
          </span>
        )}
        <span className="material-icons-outlined">shopping_cart</span>
        <span className="">Cart</span>
      </button>
    </nav>
  );
};

export { Nav };
