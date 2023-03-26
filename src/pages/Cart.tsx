import React from "react";
import { CartCard } from "../components/CartCard";
import { useCart } from "../contexts/cart-context";
import { getTotalPrice } from "../helper/cartFunctions";

const Cart = () => {
  const { cartList, setCartList } = useCart();
  console.log(cartList);

  return (
    <section className="m-4 px-8">
      <div className="flex justify-between my-4">
        <h1 className="font-semibold text-2xl">
          TOTAL PRICE:
          <span> ${getTotalPrice(cartList)} </span>
        </h1>
        <button
          onClick={() => setCartList([])}
          className="bg-slate-300 py-1 px-3"
        >
          REMOVE ALL
        </button>
      </div>
      <div className="flex gap-4  flex-wrap">
        {cartList.map((product) => (
          <CartCard key={product.id} productDetails={product} />
        ))}
      </div>
    </section>
  );
};

export { Cart };
