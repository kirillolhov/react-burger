import React from 'react'
import { useState } from 'react'
import IngredientDetails from '../ingredient-details/ingredient-details'

const ModalOverlay = ({ onClose }) => {
  const [showIngredientDetails, setShowIngredientDetails] = useState(false)

  const handleShowIngredientDetails = () => {
    setShowIngredientDetails(true)
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Modal Overlay</h2>
        <button onClick={onClose}>Close</button>
        <button onClick={handleShowIngredientDetails}>
          Show Ingredient Details
        </button>
        {showIngredientDetails && <IngredientDetails />}
      </div>
    </div>
  )
}

export default ModalOverlay
