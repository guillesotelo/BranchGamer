import useLocalStorage from "../hooks/useLocalStorage";

const useCarrito = () => {
  const [cart, dispatch] = useLocalStorage("cart-items-no-log", []);

  const addToCart = (id) => {
    dispatch({ type: "add", payload: { productId: id, quantity: 1 } });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "remove", payload: { id } });
  };

  const addOneToCart = (id) => {
    dispatch({ type: "quantityAdd", payload: { id } });
  };

  const removeOneFromCart = (id) => {
    dispatch({ type: "quantityRemove", payload: { id } });
  };

  return { cart, addToCart, removeFromCart, addOneToCart, removeOneFromCart };
};

export default useCarrito;
