import axios from "axios";

export default async function mergeCarritos(cartDb, cartLocal, token, cartId) {
  const productsIds = cartDb.map((x) => x.productId);
  let promises = [];

  cartLocal.forEach((x) => {
    let cantidad = x.quantity;
    if (!productsIds.includes(x.productId)) {
      const body = {
        carritoId: cartId,
        productId: x.productId,
      };
      promises.push(
        axios.post("/api/cart/add", body, {
          headers: { authorization: token },
        })
      );
      cantidad--;
    }

    for (let i = 0; i < cantidad; i++) {
      const body = {
        carritoId: cartId,
        productId: x.productId,
        type: "add",
      };

      promises.push(
        axios.put(`/api/cart`, body, {
          headers: { authorization: token },
        })
      );
    }
  });

  await Promise.all(promises);

  const req = await axios.get(`/api/cart/items/${cartId}`, {
    headers: { authorization: token },
  });

  window.localStorage.setItem("cart-items-no-log", JSON.stringify([]));
  return req.data;
}
