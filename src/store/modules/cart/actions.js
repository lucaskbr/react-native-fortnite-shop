export function addToCart(id) {
  return {
    type: '@cart/ADD_TO_CART',
    id,
  };
}
