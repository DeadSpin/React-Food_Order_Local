import classes from './Meals.module.css'
import mealsData from '../../store/Meals'
import Card from '../UI/Card/Card'
import MealItem from './MealItem/MealItem'

const AvailableMeals = () => {

  const mealsList = mealsData.map(meal => <MealItem key={meal.id} meals={meal} />)
  return (
    <Card className={classes.meals}>
      <ul>
        {mealsList}
      </ul>
    </Card>
  )
}

export default AvailableMeals