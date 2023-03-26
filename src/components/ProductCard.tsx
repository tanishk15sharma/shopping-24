import React from "react";
import { ProductDetails } from "../contexts/products-context";
import { useCart } from "../contexts/cart-context";
import { addProductToCart } from "../helper/cartFunctions";
import { Link, useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: ProductDetails;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { cartList, setCartList } = useCart();
  const navigate = useNavigate();

  return (
    <div className="border w-[20%] gap-3 flex relative flex-col justify-between rounded-md  hover:shadow-xl cursor-pointer">
      <div className="">
        <Link to={`/product/${product.id}`}>
          <div className=" min-h-[350px]  overflow-hidden flex items-center justify-center">
            <img src={product.image} className="w-[200px]" />
          </div>
        </Link>
        <div className="px-4 border-t">
          <h1 className="bg-gray-500 absolute top-2 px-2 py-[2px] rounded font-medium text-xs text-white">
            {product.category}
          </h1>
          <h2 className="text-sm text-gray-500">{product.title}</h2>
          <h3 className="font-semibold">$ {product.price}</h3>
        </div>
      </div>
      {cartList.find(({ id }) => id === product.id) ? (
        <button
          className="text-center w-full border py-1"
          onClick={() => navigate("/cart")}
        >
          GO TO CART
        </button>
      ) : (
        <button
          className="text-center w-full border py-1"
          onClick={() => addProductToCart(setCartList, product)}
        >
          ADD TO CART
        </button>
      )}
    </div>
  );
};

export { ProductCard };
