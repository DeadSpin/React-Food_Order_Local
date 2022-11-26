/* eslint-disable jsx-a11y/img-redundant-alt */
import { Fragment, useContext, useEffect, useState } from 'react'
import classes from './Header.module.css'
import mealImg from '../../assets/meals.jpg'
import Button from '../UI/Button/Button'
import CartContext from '../../store/Context/cart-context'

const Header = props => {

  const [showBump, setShowBump] = useState(false)
  const cartCtx = useContext(CartContext)

  useEffect(() => {
    if(cartCtx.items.length === 0)
      return
    
    setShowBump(true)

    const bumpTimer = setTimeout(() => {
      setShowBump(false)
    }, 300);

    return (() => {
      clearTimeout(bumpTimer)
    })
  }, [cartCtx.items])

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Order</h1>
        <Button cart={true} value='Your Cart' bump={showBump} badge={cartCtx.count} onClick={()=>props.showCart(true)} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealImg} alt="A meal image" />
      </div>
    </Fragment>
  )
}

export default Header