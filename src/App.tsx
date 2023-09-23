import React from 'react'
import logo from './logo.svg'
import './App.css'
import AppHeader from './components/app-header/app-header'
import BurgerConstructor from './components/burger-constructor/burger-constructor'
import ConstructorElement from './components/burger-constructor/constructor-element'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <BurgerConstructor />
    </div>
  )
}

export default App
