import React from 'react'

import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Lines from '../tab/tab'
import AppHeader from '../app-header/app-header'
import BurgerConstructor from '../burger-constructor/burger-constructor'
import { Button } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../modal/modal'
import ModalOverlay from '../modal-overlay/modal-overlay'

function App() {
  const BURGER_API = 'https://norma.nomoreparties.space/api/ingredients'

  const [data, setData] = useState(null)
  console.log(data)
  useEffect(() => {
    fetch(BURGER_API)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error))
  }, [])

  const [showModal, setShowModal] = useState(false)
  const [showModalOverlay, setShowModalOverlay] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }

  const openModalOverlay = () => {
    setShowModalOverlay(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  const closeModalOverlay = () => {
    setShowModalOverlay(false)
  }

  return (
    <>
      <div className="App">
        <AppHeader />
        <div className="lower-container">
          {data && <BurgerConstructor data={data} />}
          <p className="text text_type_main-large">Соберите бургер</p>
          <Lines />
        </div>

        <button onClick={openModal}>Open Modal</button>
        <button onClick={openModalOverlay}>Open Modal Overlay</button>

        {showModal &&
          ReactDOM.createPortal(
            <Modal onClose={closeModal} />,
            document.getElementById('modal-root') as Element
          )}

        {showModalOverlay &&
          ReactDOM.createPortal(
            <ModalOverlay onClose={closeModalOverlay} />,
            document.getElementById('modal-root') as Element
          )}
      </div>
    </>
  )
}

export default App
