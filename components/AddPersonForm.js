import React, { useState } from 'react';
// import { connect } from 'react-redux'

function AddPersonForm(props) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');

  function handleChangeName(name) {
    setName(name.target.value);
  }
  function handleChangeAge(age) {
    setAge(age.target.value);
  }
  function handleChangeLoc(location) {
    setLocation(location.target.value);
  }
  function handleChangePhone(phone) {
    setPhone(phone.target.value);
  }

  function handleSubmit(e) {
    if (name !== '' && age != '' && location != '' && phone != '') {
      props.handleSubmit(name, age, location, phone);
      setName('');
      setAge('');
      setLocation('');
      setPhone('');
    } else {
      alert("You can't submit a empty field(s)!");
    }
    e.preventDefault();
  }
  function Reset(e) {
    setName('');
    setAge('');
    setLocation('');
    setPhone('');
    e.preventDefault();
  }
  return (
    <form className="Create">
      {/* onSubmit={handleSubmit} */}
      <label><b>Create</b></label><br/>
      <input
        type="text"
        placeholder="Add contact name"
        onChange={handleChangeName}
        value={name}
      />
      <br />
      <input
        type="text"
        placeholder="Add Age"
        onChange={handleChangeAge}
        value={age}
      />
      <br />
      <input
        type="text"
        placeholder="Add location"
        onChange={handleChangeLoc}
        value={location}
      />
      <br />
      <input
        type="text"
        placeholder="Add phone"
        onChange={handleChangePhone}
        value={phone}
      />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
      <button type="submit" onClick={Reset}>
        Reset
      </button>
    </form>
  );
}

export default AddPersonForm;