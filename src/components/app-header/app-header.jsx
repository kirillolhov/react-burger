import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons'
import styles from './app-header.module.css'

function AppHeader(props) {
  return (
    <header
      style={{ backgroundColor: '#000000', color: 'white' }}
      className="p-1"
    >
      <BurgerIcon type="primary">
        <p className="text text_type_main-default panel-item">Конструктор</p>
      </BurgerIcon>

      <ListIcon type="secondary">
        <p className="text text_type_main-default">Лента заказов</p>
      </ListIcon>

      <Logo />

      <ProfileIcon type="secondary" />
      <p className="text text_type_main-default">Личный кабинет</p>
    </header>
  )
}

export default AppHeader
