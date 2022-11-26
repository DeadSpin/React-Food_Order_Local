import { useReducer } from "react"
import CartContext from "./cart-context"

const cartContextDefault = {
  items: [],
  totalAmount: 0,
  count: 0,
  amount: 0
}

const contextStateHandler = (state, action) => {
  if(action.type === 'ITEM_ADD') {
    const newState = {totalAmount : state.totalAmount}
    const index = state.items.findIndex((item) => item.id === action.addData.id)
    if(index >= 0) {
      newState.items = state.items
      newState.items[index].count = action.addData.count
    }
    else
      newState.items = state.items.concat(action.addData)
    
    newState.count = newState.items.length
    newState.items.map(item => {
      return item.amount = (item.price * item.count).toFixed(2)
    })
    newState.totalAmount = newState.items.reduce((total, item) => { 
      return (+total + +item.amount).toFixed(2)
    }, 0)
    
    return newState
  }
  else if(action.type === 'ITEM_REMOVE') {
    let newState = state.items
    const index = newState.findIndex((item) => item.id === action.id)
    if(index >= 0) {
      const removeItem = newState[index]
      if(removeItem.count === 1) {
        const newItems = newState.filter(item => {
          return item.id !== newState[index].id
        })
        newState = newItems
      }
      else {
        newState[index].count = +newState[index].count - 1
        newState.map(item => {
          return item.amount = (item.price * item.count).toFixed(2)
        })
      }
    }
    const count = newState.length
    const total = newState.reduce((total, item) => { 
      return (+total + +item.amount).toFixed(2)
    }, 0)

    return {
      count: count,
      totalAmount: total,
      items: newState
    }
  }
  else
    return cartContextDefault
}

const CartProvider = props => {
  
  const [cartContextState, dispatchContextState] = useReducer(contextStateHandler, cartContextDefault)

  const addItemHandler = item => {
    dispatchContextState({type: 'ITEM_ADD', addData: item})
  }

  const removeItemHandler = item => {
    dispatchContextState({type: 'ITEM_REMOVE', id: item.id})
  }

  const cartContext = {
    items: cartContextState.items,
    totalAmount: cartContextState.totalAmount,
    count: cartContextState.count,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  }
  
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider