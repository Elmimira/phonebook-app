import { useState } from "react";
import { Link } from "react-router-dom";

const AddContact = ({onAddContact}) => {
    const [newContact, setNewContact] = useState({
      name: '',
      surname: '',
      phone: '',
    });
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewContact({ ...newContact, [name]: value });
    };
  
    const handleSaveContact = () => {
        onAddContact(newContact);
        setNewContact({
        name: '',
        surname: '',
        phone: '',
      });
    };
   
    return (
      <div className="add-contact-container">
        <h2>Додати новий контакт</h2>
        <div>
          <label className="add-contact-label">Ім'я:</label>
          <input
            type="text"
            name="name"
            value={newContact.name}
            onChange={handleInputChange}
            className="add-contact-input"
          />
        </div>
        <div>
          <label className="add-contact-label">Прізвище:</label>
          <input
            type="text"
            name="surname"
            value={newContact.surname}
            onChange={handleInputChange}
            className="add-contact-input"
          />
        </div>
        <div>
          <label className="add-contact-label">Телефон:</label>
          <input
            type="text"
            name="phone"
            value={newContact.phone}
            onChange={handleInputChange}
            className="add-contact-input"
          />
        </div>
        <div>
          <button className="add-contact-button" onClick={handleSaveContact}>
            <Link to='/'>Зберегти</Link>
          </button>
        </div>
      </div>
    );
  }

export default AddContact