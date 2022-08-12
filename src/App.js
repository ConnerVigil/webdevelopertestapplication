import {useEffect, useState} from 'react';
import "./App.css";
import firebase from "./firebase";

function App() {

  const [contacts, setContacts]  = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("contacts");

  function getContacts() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setContacts(items);
      setLoading(false);
    });
  }

  useEffect(() => {
    getContacts();
  }, []);


  function addContact(newContact) {
    ref.doc(newContact.id)
      .set(newContact)
      .catch((err) => {
        console.error(err);
      });
      setNameData("");
      setAddressData("");
      setPhoneNumberData("");
      setEmailData("");
      setCategoryData("");
  }

  function deleteContact(contact) {
    ref.doc(contact.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  function editContact(updatedContact) {
    setLoading(true);
    if (updatedContact.id === "") {
      return;
    }
    ref.doc(updatedContact.id)
      .update(updatedContact)
      .catch((err) => {
        console.error(err);
      });
  }

  const [nameData, setNameData] = useState('');
  const [addressData, setAddressData] = useState('');
  const [phoneNumberData, setPhoneNumberData] = useState('');
  const [emailData, setEmailData] = useState('');
  const [categoryData, setCategoryData] = useState('');

  const handleChangeName = event => {
    setNameData(event.target.value);
  };

  const handleChangeAddress = event => {
    setAddressData(event.target.value);
  };

  const handleChangePhoneNumber = event => {
    setPhoneNumberData(event.target.value);
  };

  const handleChangeEmail = event => {
    setEmailData(event.target.value);
  };

  const handleChangeCategory = event => {
    setCategoryData(event.target.value);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className='container'>
      <div className='inputContainer'>

        <div className='formContainer'>

          <div className='individualInputs'>

            <div className='inputTitlesContainer'>
              <p className='buttons'>Name:</p>
              <p className='buttons'>Address:</p>
              <p className='buttons'>Phone Number:</p>
              <p className='buttons'>Email:</p>
              <p className='buttons'>Category:</p>
            </div>

            <div className='inputFieldsContainer'>
              <input type="text" id='nameField' name='name' value={nameData} className='inputFields' onChange={handleChangeName} />
              <input type="text" id='addressField' name='address' value={addressData} className='inputFields' onChange={handleChangeAddress}/>
              <input type="text" id='phoneNumberField' name='phoneNumber' value={phoneNumberData} className='inputFields' onChange={handleChangePhoneNumber}/>
              <input type="text" id='emailField' name='email' value={emailData} className='inputFields' onChange={handleChangeEmail}/>
              <input type="text" id='categoryField' name='category' value={categoryData} className='inputFields' onChange={handleChangeCategory}/>
            </div>

          </div>

        <button className='addContactButton' onClick={() => addContact({Name: nameData,
                  Address: addressData, 
                  Email: emailData, 
                  Category: categoryData, 
                  PhoneNumber: phoneNumberData,
                  id: nameData
        })}>Add Contact</button>

        </div>

      </div>

      <div className='contactsListContainer'>
        <p>List of contacts</p>

        <div className='listOfContacts'>

          {contacts.map((contact) => (
            <div key={contact.id} className='contact'>
              <p className='buttons'>Name:</p>
              <p>{contact.Name}</p>
              <p className='buttons'>Address:</p>
              <p>{contact.Address}</p>
              <p className='buttons'>Phone Number:</p>
              <p>{contact.PhoneNumber}</p>
              <p className='buttons'>Email:</p>
              <p>{contact.Email}</p>
              <p className='buttons'>Category:</p>
              <p>{contact.Category}</p>
              <button className='deleteButton' onClick={() => deleteContact(contact)}>Delete</button>
              <button className='editButton' onClick={() => editContact(
                {Name: nameData, 
                  Address: addressData, 
                  Email: emailData, 
                  Category: categoryData, 
                  PhoneNumber: phoneNumberData,
                  id: nameData})}>Edit</button>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default App;

