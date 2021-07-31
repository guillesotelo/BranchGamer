import axios from "axios";

export const addOneToQuantity = (arr, id) =>
  arr.map((item) => {
    if (item.productId === id) {
      return { ...item, quantity: item.quantity + 1 };
    }
    return item;
  });

export const removeOneFromQuantity = (arr, id) =>
  arr.map((item) => {
    if (item.productId === id) {
      return { ...item, quantity: item.quantity - 1 };
    }
    return item;
  });

export const isInCarItems = (carItems, id) => {
  return carItems.some((item) => {
    return item.productId === id;
  });
};

export const getProductFromDbAndSetQuantities = async (array) => {
  const products = await Promise.all(
    array.map((x) => axios.get(`/api/products/${x.productId}`))
  );

  const r = products.map((x) => x.data);

  r.forEach((product, i) => {
    product.quantity = array[i].quantity;
  });

  return r;
};

export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const getCartItems = (id, token) => {
  return axios.get(`/api/cart/items/${id}`, {
    headers: { authorization: token },
  }).then(res => res.data)
}
