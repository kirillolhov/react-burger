import { Counter } from '@ya.praktikum/react-developer-burger-ui-components'

function BurgerIngredients(props) {
  return (
    <div>
      <p className="text text_type_main-medium">Булки</p>

      <div className="crator-bulka">
        <p className="text text_type_main-medium">20</p>
        <CurrencyIcon type="primary" />
        <p className="text text_type_main-small">Краторая булка N-200i</p>
      </div>

      <div className="crator-bulka">
        <p className="text text_type_main-medium">20</p>
        <CurrencyIcon type="primary" />
        <p className="text text_type_main-small">Флюресцентная булка R2-D3</p>
      </div>

      <p className="text text_type_main-medium">Соусы</p>

      <div className="crator-bulka">
        <p className="text text_type_main-medium">30</p>
        <CurrencyIcon type="primary" />
        <p className="text text_type_main-small">Соус Spicy-X</p>
      </div>

      <div className="crator-bulka">
        <p className="text text_type_main-medium">30</p>
        <CurrencyIcon type="primary" />
        <p className="text text_type_main-small">Соус фирменный Space Souce</p>
      </div>
    </div>
  )
}

export default BurgerIngredients
