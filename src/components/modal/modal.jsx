import React from 'react'
import OrderDetails from '../order-details/order-details'

const Modal = ({ onClose }) => {
  const [showOrderDetails, setShowOrderDetails] = React.useState(false)

  const handleShowOrderDetails = () => {
    setShowOrderDetails(true)
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Modal</h2>
        <button onClick={handleShowOrderDetails}>Show Order Details</button>
        <button onClick={onClose}>Close</button>

        {showOrderDetails && <OrderDetails />}
      </div>
    </div>
  )
}

export default Modal
