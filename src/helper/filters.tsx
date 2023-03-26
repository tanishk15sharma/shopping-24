import { ProductDetails } from "../contexts/products-context";

const getFilteredProduct = (
  productList: ProductDetails[],
  searchInput: string
) => {
  return productList.filter(
    (product) =>
      product.category.toLowerCase().includes(searchInput.toLowerCase()) ||
      product.title.toLowerCase().includes(searchInput.toLowerCase())
  );
};

export { getFilteredProduct };
