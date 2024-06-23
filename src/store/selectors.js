// store/selectors.js
export const selectCartCount = (state) => (state.cart ? state.cart.length : 0);
