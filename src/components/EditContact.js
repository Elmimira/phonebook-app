import React, { useRef } from 'react';

const EditContact = ({ user, updateUser, setEditContact }) => {
  const nameRef = useRef(null);
  const userNameRef = useRef(null);
  const phoneRef = useRef(null);

  const handleSave = () => {
    const updatedUser = {
      ...user,
      name: nameRef.current.value,
      username: userNameRef.current.value,
      phone: phoneRef.current.value,
    };

    updateUser(updatedUser);
    setEditContact(null);
  };

  const handleCancel = () => {
    setEditContact(null);
  };

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div className='wrapper'>
      <h2>Редагувати контакт</h2>

      <form className='form'>
        <label>
          Ім'я:<br />
          <input type="text" ref={nameRef} defaultValue={user.name} required />
        </label>

        <label>
          Ім'я користувача:<br />
          <input type="text" ref={userNameRef} defaultValue={user.username} required />
        </label>

        <label>
          Телефон:<br />
          <input type='tel' ref={phoneRef} defaultValue={user.phone} required />
        </label>

        <div className='btns'>
          <button onClick={handleSave}>Зберегти</button>
          <button onClick={handleCancel}>Скасувати</button>
        </div>
      </form>
    </div>
  );
};

export default EditContact;

