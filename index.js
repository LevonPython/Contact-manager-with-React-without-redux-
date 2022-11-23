import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import PeopleList from './components/PeopleList';
import AddPersonForm from './components/AddPersonForm';

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addContact(name, age, location, phone) {
    setContacts([
      ...contacts,
      {
        name: name,
        age: age,
        location: location,
        phone: phone,
        id: contacts.length,
      },
    ]);
  }
  function delContact(userID) {
    var item = contacts.find((obj) => obj.id === userID);
    const array = [...contacts];
    const indexOfDelete = array.indexOf(item);
    array.splice(indexOfDelete, 1);
    setContacts(array);
  }

  function changeContact(e, userID, type) {
    const array = [...contacts];
    const newName = e.target.value;
    array[userID][type] = newName;
    setContacts(array);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addContact} />
      <PeopleList
        data={contacts}
        handleDeleting={delContact}
        handleChange={changeContact}
      />
    </div>
  );
}
const contacts = [
  {
    name: 'James Smith',
    age: 28,
    location: 'Frankfurt',
    phone: +492213128449,
    id: 0,
  },
  {
    name: 'Bruce Wayne',
    age: 43,
    location: 'New York',
    phone: +4812342349902,
    id: 1,
  },
  {
    name: 'Thomas Anderson',
    age: 39,
    location: 'Yerevan',
    phone: +37494998877,
    id: 2,
  },
];

ReactDOM.render(
  <ContactManager data={contacts} />,
  document.getElementById('root')
);
