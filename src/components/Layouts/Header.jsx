/* eslint-disable jsx-a11y/img-redundant-alt */
import { Fragment } from 'react'
import classes from './Header.module.css'
import mealImg from '../../assets/meals.jpg'
import Button from '../UI/Button/Button'

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Food Order</h1>
        <Button cart={true} value='Your Cart' onClick={()=>props.showCart(true)} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealImg} alt="A meal image" />
      </div>
    </Fragment>
  )
}

export default Header