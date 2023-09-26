import React from 'react'
const Contacts = ({users, setUsers}) => {

  const handleDelete = (id) => {
    let newUsers = users.filter((user) => {
      return user.id !== id
    })
    setUsers(newUsers)
  }

  return (
    <div className='container'>
      <h2>Список контактів</h2>

      {
        users.length > 0 &&
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      }

      {users.length === 0 &&
        <div>
            Список контактів порожній
        </div>
      }
    </div>
  )
}

export default Contacts


