import { useState } from "react";
import { useLoaderData, useParams, Link } from "react-router-dom"

const EditContact = ({onSaveContact}) => {
    const params = useParams();
    const loaderData = useLoaderData();

    const [editContact, setEditContact] = useState({
        id: loaderData.id,
        name: loaderData.name,
        surname: '',
        phone: loaderData.phone,
      });
      console.log(loaderData.id)

      const editInputChange = (e) => {
        const { name, value } = e.target;
        setEditContact({ ...editContact, [name]: value });
      };

      const handleEditContact = () => {
        onSaveContact(editContact)
        };
    // console.log(loaderData.name)
  return  (
    <div className="edit-contact-container">
      <div>EditContact</div>
      <div>
        <label className="edit-contact-label">Ім'я:</label>
        <input
          type="text"
          name="name"
          value={editContact.name}
          onChange={editInputChange}
          className="edit-contact-input"
        />
      </div>
      <div>
        <label className="edit-contact-label">Телефон:</label>
        <input
          type="text"
          name="phone"
          value={editContact.phone}
          onChange={editInputChange}
          className="edit-contact-input"
        />
      </div>
      <div>
        <button className="edit-contact-button" onClick={handleEditContact}>
          <Link to="/">Зберегти</Link>
        </button>
      </div>
    </div>
  );
}

export default EditContact
