import DATA from '../../utils/data'
import styles from './ingredient-details.module.css'
function IngredientDetails(props) {
  return (
    <div className={styles.soverflow}>
      <div>
        <p>Калории, ккал {props.calories}</p>
        <p>Белки, г {props.proteins}</p>
        <p>Жиры, г {props.fats}</p>
        <p>Углеводы, г{props.carbohydrates}</p>
      </div>
    </div>
  )
}

export default IngredientDetails
