import { CartDetails } from "../contexts/cart-context";
import { ProductDetails } from "../contexts/products-context";

const addProductToCart = (
  setCart: React.Dispatch<React.SetStateAction<CartDetails[]>>,
  product: any
) => {
  setCart((previousData: any) => [
    ...previousData,
    { ...product, quantity: 1 },
  ]);
};

const removeFromCart = (
  Id: number,
  setCart: React.Dispatch<React.SetStateAction<CartDetails[]>>
) => {
  setCart((preiousData) => preiousData.filter((product) => product.id !== Id));
};

const getTotalPrice = (cartList: CartDetails[]) => {
  let totalAmount = cartList?.reduce(
    (sum, curr) => sum + curr.quantity * curr.price,
    0
  );
  return totalAmount.toFixed(2);
};

const increaseProductQty = (
  productId: number,
  setCart: React.Dispatch<React.SetStateAction<CartDetails[]>>
) => {
  setCart((previousList) =>
    previousList.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    )
  );
};

const decreaseProductQty = (
  productId: number,
  setCart: React.Dispatch<React.SetStateAction<CartDetails[]>>
) => {
  setCart((previousList) =>
    previousList.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
    )
  );
};

export {
  addProductToCart,
  removeFromCart,
  getTotalPrice,
  increaseProductQty,
  decreaseProductQty,
};
