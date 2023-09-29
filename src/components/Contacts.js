import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConfirmationModal from './ConfirmationModal';

const Contacts = ({ users, setUsers }) => {
  const [showModal, setShowModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const handleDelete = (id) => {
    let newUsers = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(newUsers);
    setContactToDelete(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (contactToDelete !== null) {
      // Видалення контакту
      const newUsers = users.filter((user) => user.id !== contactToDelete);
      setUsers(newUsers);
    }

    // Сховати модальне вікно та скинути контакт для видалення
    setShowModal(false);
    setContactToDelete(null);
  };

  const cancelDelete = () => {
    // Сховати модальне вікно та скинути контакт для видалення
    setShowModal(false);
    setContactToDelete(null);
  };

  return (
    <div className='container'>
      <h2>Список контактів</h2>

      {users.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Ім'я</th>
              <th>Ім'я користувача</th>
              <th>Телефон</th>
              <th>Дії</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.phone}</td>
                <td>
                  <button onClick={() => handleDelete(user.id)}>Скасувати</button>
                  {/* Додайте посилання на редагування запису */}
                  <Link to={`/edit/${user.id}`}>Редагувати</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {users.length === 0 && <div>Список контактів порожній</div>}

      {users.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <button onClick={() => handleDelete(user.id)}>Видалити</button>
        </div>
      ))}

      {showModal && (
        <ConfirmationModal
          message="Ви впевнені, що хочете видалити цей запис?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}
    </div>
  );
};

export default Contacts;


