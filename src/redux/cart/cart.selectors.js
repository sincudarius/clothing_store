import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((accumulator, cartItem) => {
    //here is some bug the accumulator return Nan in some cases
    console.log(cartItem.quantity);
    return accumulator + (cartItem.quantity || 0);
  }, 0),
)
