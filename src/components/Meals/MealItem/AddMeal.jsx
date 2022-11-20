import Button from '../../UI/Button/Button'
import classes from './MealItem.module.css'

const AddMeal = props => {
  return (
    <form className={classes.form}>
      <div className={classes.input}>
        <label> Amount </label>
        <input type='number' id={'amount_' + props.meal.id} min='1' max='5' step='1' defaultValue='1' />
      </div>
      <Button type='submit' buttonName='Add' />
    </form>
  )
}

export default AddMeal