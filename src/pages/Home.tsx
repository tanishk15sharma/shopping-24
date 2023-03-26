import React from "react";
import { ProductCard } from "../components/ProductCard";
import { useProducts } from "../contexts/products-context";
import { getFilteredProduct } from "../helper/filters";

const Home = () => {
  const { productList, searchProduct, loading } = useProducts();

  // console.log(productList, searchProduct);

  const filteredProducts = getFilteredProduct(productList, searchProduct);

  if (loading) {
    return (
      <h1 className="flex justify-center items-center h-[80vh] text-4xl font-semibold">
        Loading....
      </h1>
    );
  }

  return (
    <div className="flex flex-wrap gap-8 justify-center my-10">
      {filteredProducts?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export { Home };
