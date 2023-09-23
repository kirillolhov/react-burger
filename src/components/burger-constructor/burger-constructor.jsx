import {
  CurrencyIcon,
  LockIcon,
  DeleteIcon,
  Counter,
  ConstructorElement,
} from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerConstructor() {
  return (
    <div>
      <CurrencyIcon type="primary" />
      <LockIcon type="secondary" />
      <DeleteIcon type="primary" />
      <Counter count={1} size="default" extraClass="m-1" />
      <Counter count={1} size="default" extraClass="m-1" />
      <Counter count={1} size="default" extraClass="m-1" />
      <Counter count={1} size="default" extraClass="m-1" />
      <Counter count={1} size="default" extraClass="m-1" />
      <Counter count={1} size="default" extraClass="m-1" />
      <Counter count={1} size="default" extraClass="m-1" />
    </div>
  )
}

export default BurgerConstructor
