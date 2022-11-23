import React from 'react';
// import { connect } from 'react-redux'

function PeopleList(props) {
  const { data, handleDeleting, handleChange } = props;
  console.log('DATA: ', data);
  
  if (data.length > 0) {
    const listItems = data.map((val, index) => (
      <li key={index} id={index}>
        <b>Name:</b>
        <input
          value={val['name']}
          className="changeContacts"
          onChange={(e) => handleChange(e, index, 'name')}
        />
        <br />
        <span>
          <b>Age:</b>
          <input
            value={val['age']}
            className="changeContacts"
            onChange={(e) => handleChange(e, index, 'age')}
          />
        </span>
        <br />
        <span>
          <b>Location:</b>{' '}
          <input
            value={val['location']}
            className="changeContacts"
            onChange={(e) => handleChange(e, index, 'location')}
          />
        </span>
        <br />
        <span>
          <b>Phone:</b>{' '}
          <input
            value={val['phone']}
            className="changeContacts"
            onChange={(e) => handleChange(e, index, 'phone')}
          />
        </span>
        <button className="close" onClick={() => handleDeleting(index)}>
          <b>&#10006;</b>
        </button>
      </li>
    ));
    return <container className="contact-list">
      <span id="allContacts"><b>All Contacts</b></span>
      <ul>{listItems}</ul>
      </container>;
  } else {
    return <ul className="no_contacts">No Contacts found</ul>;
  }
}

export default PeopleList;