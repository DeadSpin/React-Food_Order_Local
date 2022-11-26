import React from "react";

const cartContextDefault = {
  items: '',
  totalAmount: '',
  addItem: () => {},
  removeItem: () => {}
}

const CartContext = React.createContext(cartContextDefault)

export default CartContext;