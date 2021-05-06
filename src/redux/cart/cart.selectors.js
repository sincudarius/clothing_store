import { createSelector } from 'reselect'

const selectCart = state => state.cart

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems?.reduce((accumulator, cartItem) => {
    //here is some bug the accumulator return Nan in some cases
    console.log(cartItem);
    return accumulator + cartItem.quantity;
  }, 0),
)

export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems?.reduce((accumulator, cartItem) => {
    return (accumulator + cartItem.quantity) * cartItem.price;
  }, 0),

)
