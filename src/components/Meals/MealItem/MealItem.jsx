import AddMeal from './AddMeal'
import classes from './MealItem.module.css'

const MealItem = props => {
  
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meals.name}</h3>
        <div className={classes.description}>{props.meals.description}</div>
        <div className={classes.price}>${props.meals.price}</div>
      </div>
      <div>
        <AddMeal meal={props.meals} />
      </div>
    </li>
  )
}

export default MealItem