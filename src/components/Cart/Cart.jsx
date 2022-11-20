import Button from '../UI/Button/Button'
import Modal from '../UI/Modal/Modal'
import classes from './Cart.module.css'

const Cart = props => {
  return (
    <Modal>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$12.35</span>
      </div>
      <div className={classes.actions}>
        <Button className={classes['button--alt']} buttonName='Close' onClick={()=>props.showCart(false)} />
        <Button className={classes.button} buttonName='Order' />
      </div>
    </Modal>
  )
}

export default Cart