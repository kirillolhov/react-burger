import {
  CurrencyIcon,
  LockIcon,
  DeleteIcon,
  Counter,
  ConstructorElement,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './burger-constructor.module.css'

const BurgerConstructor = (props) => {
  const { data } = props
  console.log(data.data[0]._id)
  const dataArray = Object.values(data)
  console.log(dataArray)

  return (
    <div className={styles.mainContainer}>
      <ul>
        {dataArray.map((item) => (
          <li key={data.data._id}>
            <ConstructorElement data={data.data.name}></ConstructorElement>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BurgerConstructor
