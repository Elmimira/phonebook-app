import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';
import Contacts from './components/Contacts';
import EditContact from './components/EditContact'; // Додайте імпорт

function App() {
  const API = 'https://jsonplaceholder.typicode.com/users?_limit=5';

  const [page, setPage] = useState('list');
  const [users, setUsers] = useState([]);
  const [editContact, setEditContact] = useState(null); // Додайте стан для редагування запису

  useEffect(() => {
    const fetchAPI = async (api) => {
      const res = await fetch(api);
      const data = await res.json();
      setUsers(data);
    };
    fetchAPI(API);
  }, []);

  const setForm = () => {
    setPage('form');
  };

  const setContact = () => {
    setPage('list');
  };

  // Функція для оновлення контакта після редагування
  const updateUser = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

  return (
    <Router>
      <div>
        <Nav setForm={setForm} />
        <main>
          <Routes>
            <Route path="/" element={<Contacts users={users} setUsers={setUsers} />} />
            <Route path="/form" element={<Form users={users} setUsers={setUsers} />} />
            {/* Додайте маршрут для редагування запису */}
            <Route
              path="/edit/:id"
              element={({ match }) => {
                const userId = match.params.id; // Отримуємо id з URL без parseInt
            
                // Знаходимо користувача за id
                const userToEdit = users.find(user => user.id === userId);
            
                if (!userToEdit) {
                  return <div>Користувача не знайдено.</div>;
                }
            
                return (
                  <EditContact
                    updateUser={updateUser}
                    setEditContact={setEditContact}
                    user={userToEdit} // Передаємо користувача для редагування
                  />
                );
              }}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
