import { useContext } from 'react'
import CartContext from '../../store/Context/cart-context'
import Button from '../UI/Button/Button'
import Modal from '../UI/Modal/Modal'
import classes from './Cart.module.css'
import CartItems from './CartItems'

const Cart = props => {

  const cartCtx = useContext(CartContext)
  
  const removeItem = item => {
    cartCtx.removeItem(item)
  }
  
  const addItem = item => {
    item.count = +item.count + 1
    cartCtx.addItem(item)
  }

  const cartItem = cartCtx.items.map(item => 
    <CartItems {...item} key={item.id} onAdd={addItem.bind(null, item)} onRemove={removeItem.bind(null, item)} />
  )

  return (
    <Modal closeModal={props.showCart}>
      {cartCtx.items.length > 0 && cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${ cartCtx.totalAmount }</span>
      </div>
      <div className={classes.actions}>
        <Button className={classes['button--alt']} buttonName='Close' onClick={()=>props.showCart(false)} />
        <Button className={classes.button} buttonName='Order' />
      </div>
    </Modal>
  )
}

export default Cart