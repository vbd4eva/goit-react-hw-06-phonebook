import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactAddingForm from 'components/ContactAddingForm/ContactAddingForm';
import ContactsBook from 'components/ContactsBook/ContactsBook';
import ContactFilter from 'components/ContactFilter/ContactFilter';
import ContactList from 'components/ContactList/ContactList';
import Header from 'components/Header/Header';

export default function App() {

  return (
      <>
      <Header title={"Phonebook"} rank={'1'} />      
        <ContactAddingForm />
       
            <ContactsBook >
               <ContactFilter />
        
              <ContactList />
            </ContactsBook>        
        
        <ToastContainer />
      </>
    )



 

} 