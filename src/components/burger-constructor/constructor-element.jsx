import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'

const ConstructorElement = () => {
  return (
    <div className="constructor-element-container">
      <div>
        <ConstructorElement
          type="top"
          isLocked
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={img}
        />
      </div>
      <div>
        <ConstructorElement
          text="Краторная булка N-200i (верх)"
          price={50}
          thumbnail={img}
        />
      </div>
      <div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={img}
        />
      </div>
    </div>
  )
}

export default ConstructorElement
