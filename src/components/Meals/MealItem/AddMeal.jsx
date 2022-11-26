import { useContext, useState } from 'react'
import CartContext from '../../../store/Context/cart-context'
import Button from '../../UI/Button/Button'
import classes from './MealItem.module.css'

const AddMeal = props => {

  const cartCtx = useContext(CartContext)
  const [countState, setCount] = useState(false)
  const index = cartCtx.items.findIndex((item) => item.id === props.meal.id)

  let itemCount = 0
  if(cartCtx.items[index] && cartCtx.items[index].count)
    itemCount = cartCtx.items[index].count.toString()

  const onSubmitHandler = event => {
    event.preventDefault()
    const index = cartCtx.items.findIndex((item) => item.id === props.meal.id)
    let count = 1

    if(index > -1) {
      let oldCount = cartCtx.items[index].count
      count = count+oldCount
    }

    if(count >= 0 && count <= 5) {
      itemCount = count
      cartCtx.addItem({...props.meal, count: count})
    }
    else
      setCount(true)
  }

  return (
    <form className={classes.form} onSubmit={onSubmitHandler} >
      <div className={classes.input}>
        <label> Amount </label>
        <input type='number' value={itemCount} id={'amount_' + props.meal.id} min='0' max='5' step='1' readOnly />
      </div>
      <Button type='submit' buttonName='Add' />
      {countState && (<div> Not more than 5 item </div>)}
    </form>
  )
}

export default AddMeal