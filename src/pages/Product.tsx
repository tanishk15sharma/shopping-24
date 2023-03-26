import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ProductDetails } from "../contexts/products-context";
import { addProductToCart } from "../helper/cartFunctions";
import { useCart } from "../contexts/cart-context";
import { Link, useNavigate } from "react-router-dom";

interface SingleProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

const Product = () => {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState<SingleProduct | null>(
    null
  );
  const { cartList, setCartList } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data, status } = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        if (status === 200) {
          setSelectedProduct(data);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return (
    <div className="border m-10 p-4 py-10  items-start  gap-3 flex justify-center rounded-md  ">
      <div className=" grow	basis-0	max-w-full overflow-hidden flex items-center justify-center">
        <img src={selectedProduct?.image} className="w-[200px]" />
      </div>

      <div className="px-4 grow	basis-0	max-w-full">
        <h1 className="bg-gray-500  px-2 py-[2px] rounded font-medium text-xs text-white">
          {selectedProduct?.category}
        </h1>

        <h2 className=" text-gray-500 text-xl mt-2 font-semibold">
          {selectedProduct?.title}
        </h2>

        <h3 className="font-semibold">$ {selectedProduct?.price}</h3>

        <div className="flex items-center gap-2 bg-yellow-100 mt-5 max-w-fit px-2 rounded">
          <span className="text-yellow-400 material-icons-outlined text-xl">
            star
          </span>
          <span className="font-semibold">{selectedProduct?.rating.rate}</span>
        </div>
        <h4 className="text-sm text-gray-400">
          Sold out: {selectedProduct?.rating.count}
        </h4>

        <p className="text-sm text-gray-500 my-3">
          {selectedProduct?.description}
        </p>
        {cartList.find(({ id }) => id === selectedProduct?.id) ? (
          <button
            className="text-center w-full border py-1"
            onClick={() => navigate("/cart")}
          >
            GO TO CART
          </button>
        ) : (
          <button
            className="text-center w-full border py-1 mt-6"
            onClick={() => addProductToCart(setCartList, selectedProduct)}
          >
            ADD TO CART
          </button>
        )}
      </div>
    </div>
  );
};

export { Product };
