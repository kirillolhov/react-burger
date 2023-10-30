import { Logo } from '@ya.praktikum/react-developer-burger-ui-components'
import { BurgerIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons'
import { ListIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons'
import { ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons'
import styles from './app-header.module.css'
import PropTypes from 'prop-types'

function AppHeader(props) {
  return (
    <div className="main-container">
      <header className="p-1">
        <div className="left-container">
          <div className="burger-icon">
            <a>
              <div className="icon-with-text">
                <BurgerIcon type="primary" />
                <p className="text text_type_main-default panel-item">
                  Конструктор
                </p>
              </div>
            </a>
          </div>

          <div>
            <a>
              <div className="icon-with-text">
                <ListIcon type="secondary" />
                <p className="text text_type_main-default">Лента заказов</p>
              </div>
            </a>
          </div>
        </div>

        <div className="central-container">
          <div className="logo-container">
            <a>
              <Logo />
            </a>
          </div>
        </div>

        <div className="right-container">
          <div className="profile">
            <a>
              <div className="icon-with-text">
                <ProfileIcon type="secondary" />
                <p className="text text_type_main-default">Личный кабинет</p>
              </div>
            </a>
          </div>
        </div>
      </header>
    </div>
  )

  AppHeader.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
  }
}

export default AppHeader
