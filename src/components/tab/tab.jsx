import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import { useState } from 'react'
import styles from './tab.module.css'

const Lines = () => {
  const [current, setCurrent] = useState('one')
  return (
    <div
      style={{ display: 'flex', position: 'relative', top: '-600px' }}
      className="tabContainer"
    >
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        One
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Two
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Three
      </Tab>
    </div>
  )
}

export default Lines
