import React from "react";
import { useCart } from "../contexts/cart-context";
import { Link } from "react-router-dom";

import {
  decreaseProductQty,
  increaseProductQty,
  removeFromCart,
} from "../helper/cartFunctions";

interface ProductDetailsProps {
  productDetails: {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
    quantity: number;
  };
}

const CartCard = ({ productDetails }: ProductDetailsProps) => {
  const { setCartList } = useCart();
  return (
    <div className="border w-[20%] gap-3 flex relative flex-col justify-between rounded-md  hover:shadow-xl cursor-pointer">
      <div className="">
        <Link to={`/product/${productDetails.id}`}>
          <div className="min-h-[300px] max-h-[300px]  overflow-hidden flex items-center justify-center">
            <img src={productDetails.image} className="w-[200px]" />
          </div>
        </Link>

        <div className="px-4 border-t">
          <h1 className="bg-gray-500 absolute top-2 px-2 py-[2px] rounded font-medium text-xs text-white">
            {productDetails.category}
          </h1>
          <h2 className="text-sm text-gray-500">{productDetails.title}</h2>
          <h3 className="font-semibold">$ {productDetails.price}</h3>
        </div>
      </div>
      <div className="flex  justify-between items-center px-8 text-gray-600">
        <button
          className="text-xl font-semibold px-2 rounded min-w-[40px]"
          onClick={() => increaseProductQty(productDetails.id, setCartList)}
        >
          <span className="material-icons-outlined">add_circle_outline</span>
        </button>
        <span className="text-2xl  font-semibold">
          {productDetails.quantity}
        </span>
        <button
          className={`${
            productDetails.quantity === 1 && "text-gray-300"
          }  text-xl font-semibold px-2 rounded min-w-[40px]`}
          onClick={() => decreaseProductQty(productDetails.id, setCartList)}
          disabled={productDetails.quantity === 1}
        >
          <span className="material-icons-outlined">remove_circle_outline</span>
        </button>
      </div>
      <button
        className="text-center w-full border py-1"
        onClick={() => removeFromCart(productDetails.id, setCartList)}
      >
        REMOVE
      </button>
    </div>
  );
};

export { CartCard };
