import React from 'react';

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="confirmation-modal">
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-buttons">
          <button onClick={onConfirm}>Підтвердити</button>
          <button onClick={onCancel}>Скасувати</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
